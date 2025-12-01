import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:provider/provider.dart';
import 'package:kinedemo/providers/language_provider.dart';
import 'package:kinedemo/theme/app_theme.dart';

class ExerciseListScreen extends StatelessWidget {
  const ExerciseListScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final languageProvider = Provider.of<LanguageProvider>(context);

    return Container(
      color: AppTheme.darkBg,
      child: Column(
        children: [
        Container(
          color: AppTheme.cardBg,
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
          child: SafeArea(
            bottom: false,
            child: Text(
              languageProvider.t('exercises'),
              style: const TextStyle(
                color: AppTheme.textWhite,
                fontSize: 24,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ),
        Expanded(
          child: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: 10,
        itemBuilder: (context, index) {
          return GestureDetector(
            onTap: () => context.go('/exercise-detail'),
            child: Container(
              margin: const EdgeInsets.only(bottom: 12),
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: AppTheme.cardBg,
                borderRadius: BorderRadius.circular(12),
                border: Border.all(color: AppTheme.borderColor),
              ),
              child: Row(
                children: [
                  Container(
                    width: 60,
                    height: 60,
                    decoration: BoxDecoration(
                      color: AppTheme.cyanLight.withOpacity(0.1),
                      borderRadius: BorderRadius.circular(8),
                    ),
                    child: const Icon(
                      Icons.fitness_center,
                      color: AppTheme.cyanLight,
                    ),
                  ),
                  const SizedBox(width: 16),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Exercise ${index + 1}',
                          style: const TextStyle(
                            color: AppTheme.textWhite,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                        const SizedBox(height: 4),
                        Text(
                          '3 sets • 12 reps',
                          style: TextStyle(
                            color: AppTheme.textLight.withOpacity(0.7),
                            fontSize: 12,
                          ),
                        ),
                      ],
                    ),
                  ),
                  const Icon(Icons.chevron_right, color: AppTheme.textLight),
                ],
              ),
            ),
          );
        },
          ),
        ),
        ],
      ),
    );
  }
}
