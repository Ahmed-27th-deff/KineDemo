import 'package:flutter/material.dart';
import 'package:curved_navigation_bar/curved_navigation_bar.dart';
import 'package:kinedemo/theme/app_theme.dart';
import 'package:kinedemo/screens/dashboard_screen.dart';
import 'package:kinedemo/screens/exercise_list_screen.dart';
import 'package:kinedemo/screens/nutrition_screen.dart';
import 'package:kinedemo/screens/progress_screen.dart';
import 'package:kinedemo/screens/ai_coach_screen.dart';

class MainNavigationScreen extends StatefulWidget {
  const MainNavigationScreen({Key? key}) : super(key: key);

  @override
  State<MainNavigationScreen> createState() => _MainNavigationScreenState();
}

class _MainNavigationScreenState extends State<MainNavigationScreen> {
  int _currentIndex = 0;

  final List<Widget> _screens = const [
    DashboardScreen(),
    ExerciseListScreen(),
    NutritionScreen(),
    ProgressScreen(),
    AICoachScreen(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppTheme.darkBg,
      body: IndexedStack(index: _currentIndex, children: _screens),
      bottomNavigationBar: SafeArea(
        child: CurvedNavigationBar(
          index: _currentIndex,
          height: 60,
          backgroundColor: AppTheme.darkBg,
          color: AppTheme.cardBg,
          buttonBackgroundColor: AppTheme.cyanLight,
          animationDuration: const Duration(milliseconds: 300),
          animationCurve: Curves.easeInOut,
          onTap: (index) {
            setState(() {
              _currentIndex = index;
            });
          },
          items: const [
            Icon(Icons.home, size: 26, color: AppTheme.textWhite),
            Icon(Icons.fitness_center, size: 26, color: AppTheme.textWhite),
            Icon(Icons.apple, size: 26, color: AppTheme.textWhite),
            Icon(Icons.trending_up, size: 26, color: AppTheme.textWhite),
            Icon(Icons.message, size: 26, color: AppTheme.textWhite),
          ],
        ),
      ),
    );
  }
}
