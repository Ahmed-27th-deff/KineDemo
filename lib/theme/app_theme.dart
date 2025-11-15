import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AppTheme {
  // Colors
  static const Color darkBg = Color(0xFF0E0E0E);
  static const Color cardBg = Color(0xFF1A1A1A);
  static const Color borderColor = Color(0xFF2A2A2A);
  static const Color cyanLight = Color(0xFFB8F1FF);
  static const Color blueDark = Color(0xFF76A8FF);
  static const Color goldColor = Color(0xFFFFD966);
  static const Color textLight = Color(0xFFA0A0A0);
  static const Color textWhite = Color(0xFFFFFFFF);

  static ThemeData lightTheme() {
    return ThemeData(
      useMaterial3: true,
      brightness: Brightness.light,
      primaryColor: cyanLight,
      scaffoldBackgroundColor: darkBg,
      textTheme: GoogleFonts.nunitoTextTheme(
        const TextTheme(
          headlineLarge: TextStyle(
            fontSize: 32,
            fontWeight: FontWeight.bold,
            color: textWhite,
          ),
          headlineMedium: TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.w700,
            color: textWhite,
          ),
          titleLarge: TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.w600,
            color: textWhite,
          ),
          bodyLarge: TextStyle(fontSize: 16, color: textLight),
          bodyMedium: TextStyle(fontSize: 14, color: textLight),
          labelSmall: TextStyle(fontSize: 12, color: textLight),
        ),
      ),
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: cardBg,
        contentPadding: const EdgeInsets.symmetric(
          horizontal: 16,
          vertical: 14,
        ),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(16),
          borderSide: const BorderSide(color: borderColor),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(16),
          borderSide: const BorderSide(color: borderColor),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(16),
          borderSide: const BorderSide(color: cyanLight, width: 2),
        ),
        hintStyle: const TextStyle(color: textLight),
        labelStyle: const TextStyle(color: textLight),
      ),
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: cyanLight,
          foregroundColor: darkBg,
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 14),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(16),
          ),
          textStyle: const TextStyle(fontSize: 16, fontWeight: FontWeight.w600),
        ),
      ),
    );
  }
}

// Gradient Colors
const LinearGradient gradientBlueCyan = LinearGradient(
  colors: [AppTheme.cyanLight, AppTheme.blueDark],
  begin: Alignment.topLeft,
  end: Alignment.bottomRight,
);

// Glass Effect styling constants
const double glassBlurSigma = 10;
const double glassOpacity = 0.15;
