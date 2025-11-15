import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:provider/provider.dart';
import 'package:kinedemo/providers/language_provider.dart';
import 'package:kinedemo/theme/app_theme.dart';
import 'package:kinedemo/screens/splash_screen.dart';
import 'package:kinedemo/screens/login_screen.dart';
import 'package:kinedemo/screens/signup_screen.dart';
import 'package:kinedemo/screens/onboarding_screen.dart';
import 'package:kinedemo/screens/dashboard_screen.dart';
import 'package:kinedemo/screens/exercise_list_screen.dart';
import 'package:kinedemo/screens/exercise_detail_screen.dart';
import 'package:kinedemo/screens/exercise_tracking_screen.dart';
import 'package:kinedemo/screens/ai_coach_screen.dart';
import 'package:kinedemo/screens/nutrition_screen.dart';
import 'package:kinedemo/screens/progress_screen.dart';
import 'package:kinedemo/screens/settings_screen.dart';

void main() {
  runApp(
    MultiProvider(
      providers: [ChangeNotifierProvider(create: (_) => LanguageProvider())],
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Consumer<LanguageProvider>(
      builder: (context, languageProvider, _) {
        return MaterialApp.router(
          title: 'AI Fitness Coach',
          theme: AppTheme.lightTheme(),
          debugShowCheckedModeBanner: false,
          locale: Locale(languageProvider.language),
          supportedLocales: const [Locale('en'), Locale('ar')],
          routerConfig: _buildRouter(),
        );
      },
    );
  }

  GoRouter _buildRouter() {
    return GoRouter(
      initialLocation: '/splash',
      routes: [
        GoRoute(
          path: '/splash',
          builder: (context, state) => const SplashScreen(),
        ),
        GoRoute(
          path: '/login',
          builder: (context, state) => const LoginScreen(),
        ),
        GoRoute(
          path: '/signup',
          builder: (context, state) => const SignUpScreen(),
        ),
        GoRoute(
          path: '/onboarding',
          builder: (context, state) => const OnboardingScreen(),
        ),
        GoRoute(
          path: '/dashboard',
          builder: (context, state) => const DashboardScreen(),
        ),
        GoRoute(
          path: '/exercises',
          builder: (context, state) => const ExerciseListScreen(),
        ),
        GoRoute(
          path: '/exercise-detail',
          builder: (context, state) => const ExerciseDetailScreen(),
        ),
        GoRoute(
          path: '/exercise-tracking',
          builder: (context, state) => const ExerciseTrackingScreen(),
        ),
        GoRoute(
          path: '/ai-coach',
          builder: (context, state) => const AICoachScreen(),
        ),
        GoRoute(
          path: '/nutrition',
          builder: (context, state) => const NutritionScreen(),
        ),
        GoRoute(
          path: '/progress',
          builder: (context, state) => const ProgressScreen(),
        ),
        GoRoute(
          path: '/settings',
          builder: (context, state) => const SettingsScreen(),
        ),
      ],
    );
  }
}
