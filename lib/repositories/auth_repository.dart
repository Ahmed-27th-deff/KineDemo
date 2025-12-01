import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:kinedemo/models/user_model.dart';

class AuthRepository {
  final FirebaseAuth _firebaseAuth;
  final FirebaseFirestore _firestore;

  AuthRepository({
    FirebaseAuth? firebaseAuth,
    FirebaseFirestore? firestore,
  })  : _firebaseAuth = firebaseAuth ?? FirebaseAuth.instance,
        _firestore = firestore ?? FirebaseFirestore.instance;

  // Get current user
  User? get currentUser => _firebaseAuth.currentUser;

  // Stream of auth state changes
  Stream<User?> get authStateChanges => _firebaseAuth.authStateChanges();

  // Sign up with email and password
  Future<UserModel> signUp({
    required String email,
    required String password,
    required String fullName,
    required String gender,
  }) async {
    try {
      // Create user in Firebase Auth
      final userCredential = await _firebaseAuth.createUserWithEmailAndPassword(
        email: email,
        password: password,
      );

      final user = userCredential.user;
      if (user == null) {
        throw Exception('Failed to create user');
      }

      // Create user model
      final userModel = UserModel(
        uid: user.uid,
        email: email,
        fullName: fullName,
        gender: gender,
        createdAt: DateTime.now(),
      );

      // Save user data to Firestore
      await _firestore.collection('users').doc(user.uid).set(userModel.toJson());

      // Update display name
      await user.updateDisplayName(fullName);

      return userModel;
    } on FirebaseAuthException catch (e) {
      throw _handleAuthException(e);
    } catch (e) {
      throw Exception('An unexpected error occurred: ${e.toString()}');
    }
  }

  // Sign in with email and password
  Future<UserModel> signIn({
    required String email,
    required String password,
  }) async {
    try {
      final userCredential = await _firebaseAuth.signInWithEmailAndPassword(
        email: email,
        password: password,
      );

      final user = userCredential.user;
      if (user == null) {
        throw Exception('Failed to sign in');
      }

      // Get user data from Firestore
      final userDoc = await _firestore.collection('users').doc(user.uid).get();
      
      if (!userDoc.exists) {
        throw Exception('User data not found');
      }

      return UserModel.fromJson(userDoc.data()!);
    } on FirebaseAuthException catch (e) {
      throw _handleAuthException(e);
    } catch (e) {
      throw Exception('An unexpected error occurred: ${e.toString()}');
    }
  }

  // Sign out
  Future<void> signOut() async {
    try {
      await _firebaseAuth.signOut();
    } catch (e) {
      throw Exception('Failed to sign out: ${e.toString()}');
    }
  }

  // Get user data
  Future<UserModel?> getUserData(String uid) async {
    try {
      final userDoc = await _firestore.collection('users').doc(uid).get();
      
      if (!userDoc.exists) {
        return null;
      }

      return UserModel.fromJson(userDoc.data()!);
    } catch (e) {
      throw Exception('Failed to get user data: ${e.toString()}');
    }
  }

  // Handle Firebase Auth exceptions
  String _handleAuthException(FirebaseAuthException e) {
    switch (e.code) {
      case 'weak-password':
        return 'The password provided is too weak.';
      case 'email-already-in-use':
        return 'An account already exists for that email.';
      case 'invalid-email':
        return 'The email address is not valid.';
      case 'user-disabled':
        return 'This user account has been disabled.';
      case 'user-not-found':
        return 'No user found with this email.';
      case 'wrong-password':
        return 'Wrong password provided.';
      case 'too-many-requests':
        return 'Too many attempts. Please try again later.';
      case 'operation-not-allowed':
        return 'Email/password accounts are not enabled.';
      case 'network-request-failed':
        return 'Network error. Please check your connection.';
      default:
        return 'Authentication failed: ${e.message ?? 'Unknown error'}';
    }
  }
}
