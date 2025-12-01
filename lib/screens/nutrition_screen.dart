import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:kinedemo/providers/language_provider.dart';
import 'package:kinedemo/theme/app_theme.dart';

class NutritionScreen extends StatelessWidget {
  const NutritionScreen({Key? key}) : super(key: key);

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
              languageProvider.t('nutrition'),
              style: const TextStyle(
                color: AppTheme.textWhite,
                fontSize: 24,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ),
        Expanded(
          child: SingleChildScrollView(
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
            _buildMealSection(languageProvider.t('breakfast'), [
              'Oatmeal with berries',
              'Protein shake',
              'Toast with honey',
            ], 350),
            const SizedBox(height: 20),
            _buildMealSection(languageProvider.t('lunch'), [
              'Grilled chicken',
              'Brown rice',
              'Vegetables',
            ], 520),
            const SizedBox(height: 20),
            _buildMealSection(languageProvider.t('dinner'), [
              'Salmon fillet',
              'Sweet potato',
              'Broccoli',
            ], 600),
            const SizedBox(height: 32),
            _buildMacros(),
            const SizedBox(height: 80),
              ],
            ),
          ),
        ),
        ],
      ),
    );
  }

  Widget _buildMealSection(String mealName, List<String> items, int calories) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: AppTheme.cardBg,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: AppTheme.borderColor),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                mealName,
                style: const TextStyle(
                  color: AppTheme.textWhite,
                  fontSize: 18,
                  fontWeight: FontWeight.w600,
                ),
              ),
              Text(
                '$calories cal',
                style: const TextStyle(
                  color: AppTheme.cyanLight,
                  fontWeight: FontWeight.w600,
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),
          ...items.map(
            (item) => Padding(
              padding: const EdgeInsets.only(bottom: 8),
              child: Text(
                '• $item',
                style: const TextStyle(color: AppTheme.textLight),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildMacros() {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: AppTheme.cardBg,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: AppTheme.borderColor),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            'Daily Macros',
            style: TextStyle(
              color: AppTheme.textWhite,
              fontSize: 18,
              fontWeight: FontWeight.w600,
            ),
          ),
          const SizedBox(height: 16),
          _buildMacroBar('Protein', 120, 150, Colors.red),
          const SizedBox(height: 12),
          _buildMacroBar('Carbs', 280, 300, Colors.blue),
          const SizedBox(height: 12),
          _buildMacroBar('Fats', 65, 80, Colors.orange),
        ],
      ),
    );
  }

  Widget _buildMacroBar(String label, int current, int target, Color color) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(label, style: const TextStyle(color: AppTheme.textLight)),
            Text(
              '$current/${target}g',
              style: const TextStyle(
                color: AppTheme.cyanLight,
                fontWeight: FontWeight.w600,
              ),
            ),
          ],
        ),
        const SizedBox(height: 8),
        ClipRRect(
          borderRadius: BorderRadius.circular(4),
          child: LinearProgressIndicator(
            value: current / target,
            minHeight: 6,
            backgroundColor: AppTheme.borderColor,
            valueColor: AlwaysStoppedAnimation(color),
          ),
        ),
      ],
    );
  }
}
