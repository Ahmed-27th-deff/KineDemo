import 'package:equatable/equatable.dart';

class UserModel extends Equatable {
  final String uid;
  final String email;
  final String fullName;
  final String gender;
  final DateTime createdAt;

  const UserModel({
    required this.uid,
    required this.email,
    required this.fullName,
    required this.gender,
    required this.createdAt,
  });

  factory UserModel.fromJson(Map<String, dynamic> json) {
    return UserModel(
      uid: json['uid'] as String,
      email: json['email'] as String,
      fullName: json['fullName'] as String,
      gender: json['gender'] as String,
      createdAt: DateTime.parse(json['createdAt'] as String),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'uid': uid,
      'email': email,
      'fullName': fullName,
      'gender': gender,
      'createdAt': createdAt.toIso8601String(),
    };
  }

  @override
  List<Object?> get props => [uid, email, fullName, gender, createdAt];
}
