import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:kinedemo/cubits/auth/auth_state.dart';
import 'package:kinedemo/repositories/auth_repository.dart';

class AuthCubit extends Cubit<AuthState> {
  final AuthRepository _authRepository;

  AuthCubit({required AuthRepository authRepository})
      : _authRepository = authRepository,
        super(AuthInitial()) {
    _checkAuthStatus();
  }

  // Check if user is already authenticated
  Future<void> _checkAuthStatus() async {
    final user = _authRepository.currentUser;
    if (user != null) {
      try {
        final userData = await _authRepository.getUserData(user.uid);
        if (userData != null) {
          emit(AuthAuthenticated(userData));
        } else {
          emit(AuthUnauthenticated());
        }
      } catch (e) {
        emit(AuthUnauthenticated());
      }
    } else {
      emit(AuthUnauthenticated());
    }
  }

  // Sign up
  Future<void> signUp({
    required String email,
    required String password,
    required String fullName,
  }) async {
    try {
      emit(AuthLoading());
      
      final user = await _authRepository.signUp(
        email: email,
        password: password,
        fullName: fullName,
      );
      
      emit(AuthAuthenticated(user));
    } catch (e) {
      emit(AuthError(e.toString().replaceAll('Exception: ', '')));
      emit(AuthUnauthenticated());
    }
  }

  // Sign in
  Future<void> signIn({
    required String email,
    required String password,
  }) async {
    try {
      emit(AuthLoading());
      
      final user = await _authRepository.signIn(
        email: email,
        password: password,
      );
      
      emit(AuthAuthenticated(user));
    } catch (e) {
      emit(AuthError(e.toString().replaceAll('Exception: ', '')));
      emit(AuthUnauthenticated());
    }
  }

  // Sign out
  Future<void> signOut() async {
    try {
      emit(AuthLoading());
      await _authRepository.signOut();
      emit(AuthUnauthenticated());
    } catch (e) {
      emit(AuthError(e.toString().replaceAll('Exception: ', '')));
    }
  }

  // Complete onboarding
  Future<void> completeOnboarding({
    required double height,
    required double weight,
    required String gender,
    required String goal,
    required String activityLevel,
    required String equipment,
  }) async {
    try {
      final currentState = state;
      if (currentState is AuthAuthenticated) {
        emit(AuthLoading());
        final updatedUser = await _authRepository.completeOnboarding(
          uid: currentState.user.uid,
          height: height,
          weight: weight,
          gender: gender,
          goal: goal,
          activityLevel: activityLevel,
          equipment: equipment,
        );
        emit(AuthAuthenticated(updatedUser));
      }
    } catch (e) {
      emit(AuthError(e.toString().replaceAll('Exception: ', '')));
    }
  }

  // Forgot password
  Future<void> forgotPassword(String email) async {
    try {
      await _authRepository.sendPasswordResetEmail(email);
    } catch (e) {
      throw Exception(e.toString().replaceAll('Exception: ', ''));
    }
  }
}
