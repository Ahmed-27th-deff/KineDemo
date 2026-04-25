import 'package:equatable/equatable.dart';

class UserModel extends Equatable {
  final String uid;
  final String email;
  final String fullName;
  final String? gender;
  final double? height;
  final double? weight;
  final String? goal;
  final String? activityLevel;
  final String? equipment;
  final DateTime createdAt;
  final bool hasCompletedOnboarding;

  const UserModel({
    required this.uid,
    required this.email,
    required this.fullName,
    this.gender,
    this.height,
    this.weight,
    this.goal,
    this.activityLevel,
    this.equipment,
    required this.createdAt,
    this.hasCompletedOnboarding = false,
  });

  factory UserModel.fromJson(Map<String, dynamic> json) {
    return UserModel(
      uid: json['uid'] as String,
      email: json['email'] as String,
      fullName: json['fullName'] as String,
      gender: json['gender'] as String?,
      height: (json['height'] as num?)?.toDouble(),
      weight: (json['weight'] as num?)?.toDouble(),
      goal: json['goal'] as String?,
      activityLevel: json['activityLevel'] as String?,
      equipment: json['equipment'] as String?,
      createdAt: DateTime.parse(json['createdAt'] as String),
      hasCompletedOnboarding: json['hasCompletedOnboarding'] as bool? ?? false,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'uid': uid,
      'email': email,
      'fullName': fullName,
      if (gender != null) 'gender': gender,
      if (height != null) 'height': height,
      if (weight != null) 'weight': weight,
      if (goal != null) 'goal': goal,
      if (activityLevel != null) 'activityLevel': activityLevel,
      if (equipment != null) 'equipment': equipment,
      'createdAt': createdAt.toIso8601String(),
      'hasCompletedOnboarding': hasCompletedOnboarding,
    };
  }

  UserModel copyWith({
    String? uid,
    String? email,
    String? fullName,
    String? gender,
    double? height,
    double? weight,
    String? goal,
    String? activityLevel,
    String? equipment,
    DateTime? createdAt,
    bool? hasCompletedOnboarding,
  }) {
    return UserModel(
      uid: uid ?? this.uid,
      email: email ?? this.email,
      fullName: fullName ?? this.fullName,
      gender: gender ?? this.gender,
      height: height ?? this.height,
      weight: weight ?? this.weight,
      goal: goal ?? this.goal,
      activityLevel: activityLevel ?? this.activityLevel,
      equipment: equipment ?? this.equipment,
      createdAt: createdAt ?? this.createdAt,
      hasCompletedOnboarding: hasCompletedOnboarding ?? this.hasCompletedOnboarding,
    );
  }

  @override
  List<Object?> get props => [
        uid,
        email,
        fullName,
        gender,
        height,
        weight,
        goal,
        activityLevel,
        equipment,
        createdAt,
        hasCompletedOnboarding,
      ];
}
