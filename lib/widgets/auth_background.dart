import 'package:flutter/material.dart';
import 'package:kinedemo/theme/app_theme.dart';

class AuthBackground extends StatelessWidget {
  final Widget child;

  const AuthBackground({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        // Top right cyan orb
        Positioned(
          top: 0,
          right: 0,
          child: Container(
            width: 384,
            height: 384,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: AppTheme.cyanLight.withValues(alpha: 0.1),
              boxShadow: [
                BoxShadow(
                  color: AppTheme.cyanLight.withValues(alpha: 0.05),
                  blurRadius: 120,
                ),
              ],
            ),
          ),
        ),
        // Bottom left blue orb
        Positioned(
          bottom: 0,
          left: 0,
          child: Container(
            width: 384,
            height: 384,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: AppTheme.blueDark.withValues(alpha: 0.1),
              boxShadow: [
                BoxShadow(
                  color: AppTheme.blueDark.withValues(alpha: 0.05),
                  blurRadius: 120,
                ),
              ],
            ),
          ),
        ),
        // Positioned Top left orb from SignUp
        Positioned(
          top: 0,
          left: 0,
          child: Container(
            width: 200,
            height: 200,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: AppTheme.cyanLight.withValues(alpha: 0.05),
            ),
          ),
        ),
        // Content
        child,
      ],
    );
  }
}
