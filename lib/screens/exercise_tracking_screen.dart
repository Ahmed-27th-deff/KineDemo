import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:kinedemo/theme/app_theme.dart';

class ExerciseTrackingScreen extends StatefulWidget {
  const ExerciseTrackingScreen({Key? key}) : super(key: key);

  @override
  State<ExerciseTrackingScreen> createState() => _ExerciseTrackingScreenState();
}

class _ExerciseTrackingScreenState extends State<ExerciseTrackingScreen> {
  int seconds = 0;
  bool isRunning = false;
  int currentSet = 1;
  int completedReps = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppTheme.darkBg,
      body: SafeArea(
        child: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: Column(
              children: [
                Align(
                  alignment: Alignment.topRight,
                  child: GestureDetector(
                    onTap: () => context.pop(),
                    child: Container(
                      width: 40,
                      height: 40,
                      decoration: BoxDecoration(
                        color: AppTheme.cardBg,
                        borderRadius: BorderRadius.circular(10),
                      ),
                      child: const Icon(Icons.close, color: AppTheme.textWhite),
                    ),
                  ),
                ),
                const SizedBox(height: 32),
                Text(
                  'Exercise: Pushups',
                  style: const TextStyle(
                    color: AppTheme.textWhite,
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 32),
                // Timer
                Container(
                  width: 200,
                  height: 200,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: AppTheme.cyanLight.withOpacity(0.1),
                    border: Border.all(
                      color: AppTheme.cyanLight.withOpacity(0.3),
                      width: 2,
                    ),
                  ),
                  child: Center(
                    child: Text(
                      '${(seconds ~/ 60).toString().padLeft(2, '0')}:${(seconds % 60).toString().padLeft(2, '0')}',
                      style: const TextStyle(
                        color: AppTheme.cyanLight,
                        fontSize: 48,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ),
                const SizedBox(height: 32),
                // Stats
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    _buildStatContainer('Set', '$currentSet/4'),
                    _buildStatContainer('Reps', '$completedReps/12'),
                    _buildStatContainer('Rest', '60s'),
                  ],
                ),
                const SizedBox(height: 48),
                // Buttons
                Row(
                  children: [
                    Expanded(
                      child: ElevatedButton(
                        onPressed: () {
                          setState(() => completedReps++);
                        },
                        style: ElevatedButton.styleFrom(
                          backgroundColor: AppTheme.cyanLight,
                          padding: const EdgeInsets.symmetric(vertical: 14),
                        ),
                        child: const Text(
                          'Rep Done',
                          style: TextStyle(
                            color: AppTheme.darkBg,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      ),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      child: ElevatedButton(
                        onPressed: () {
                          setState(() => currentSet++);
                        },
                        style: ElevatedButton.styleFrom(
                          backgroundColor: AppTheme.blueDark,
                          padding: const EdgeInsets.symmetric(vertical: 14),
                        ),
                        child: const Text(
                          'Next Set',
                          style: TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildStatContainer(String label, String value) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
      decoration: BoxDecoration(
        color: AppTheme.cardBg,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: AppTheme.borderColor),
      ),
      child: Column(
        children: [
          Text(
            value,
            style: const TextStyle(
              color: AppTheme.cyanLight,
              fontSize: 18,
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(height: 4),
          Text(
            label,
            style: const TextStyle(color: AppTheme.textLight, fontSize: 12),
          ),
        ],
      ),
    );
  }
}
