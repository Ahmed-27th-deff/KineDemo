import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:provider/provider.dart';
import 'package:kinedemo/providers/language_provider.dart';
import 'package:kinedemo/theme/app_theme.dart';

class ExerciseDetailScreen extends StatelessWidget {
  const ExerciseDetailScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final languageProvider = Provider.of<LanguageProvider>(context);

    return Scaffold(
      backgroundColor: AppTheme.darkBg,
      appBar: AppBar(
        backgroundColor: AppTheme.cardBg,
        leading: GestureDetector(
          onTap: () => context.pop(),
          child: const Icon(Icons.arrow_back, color: AppTheme.textWhite),
        ),
        title: const Text(
          'Exercise Detail',
          style: TextStyle(color: AppTheme.textWhite),
        ),
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                height: 250,
                decoration: BoxDecoration(
                  color: AppTheme.cardBg,
                  borderRadius: BorderRadius.circular(16),
                ),
                child: const Icon(
                  Icons.fitness_center,
                  color: AppTheme.cyanLight,
                  size: 80,
                ),
              ),
              const SizedBox(height: 24),
              Text(
                'Full Body Blast',
                style: const TextStyle(
                  color: AppTheme.textWhite,
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 16),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  _buildInfoCard('45', 'min'),
                  _buildInfoCard('320', 'cal'),
                  _buildInfoCard('15', languageProvider.t('sets')),
                ],
              ),
              const SizedBox(height: 32),
              Text(
                'Description',
                style: const TextStyle(
                  color: AppTheme.textWhite,
                  fontSize: 18,
                  fontWeight: FontWeight.w600,
                ),
              ),
              const SizedBox(height: 12),
              Text(
                'This is a comprehensive full body workout that targets all major muscle groups. Perfect for beginners and intermediates.',
                style: const TextStyle(color: AppTheme.textLight, height: 1.6),
              ),
              const SizedBox(height: 32),
              SizedBox(
                width: double.infinity,
                height: 56,
                child: ElevatedButton(
                  onPressed: () => context.go('/exercise-tracking'),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: AppTheme.cyanLight,
                    foregroundColor: AppTheme.darkBg,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                  ),
                  child: Text(
                    languageProvider.t('startExercise'),
                    style: const TextStyle(fontWeight: FontWeight.w600),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildInfoCard(String value, String label) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
      decoration: BoxDecoration(
        color: AppTheme.cyanLight.withOpacity(0.08),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: AppTheme.cyanLight.withOpacity(0.2)),
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
