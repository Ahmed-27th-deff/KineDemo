import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:provider/provider.dart';
import 'package:kinedemo/providers/language_provider.dart';

class OnboardingScreen extends StatefulWidget {
  const OnboardingScreen({Key? key}) : super(key: key);

  @override
  State<OnboardingScreen> createState() => _OnboardingScreenState();
}

class _OnboardingScreenState extends State<OnboardingScreen> {
  int _currentStep = 1;
  double _height = 170;
  double _weight = 70;
  String? _selectedGender;
  String? _selectedGoal;
  String? _selectedActivityLevel;
  String? _selectedEquipment;

  final List<String> goals = [
    'loseFat',
    'gainWeight',
    'buildMuscle',
    'improveFitness',
  ];
  final List<String> activityLevels = ['beginner', 'intermediate', 'advanced'];
  final List<String> equipment = ['home', 'gym'];

  @override
  Widget build(BuildContext context) {
    final languageProvider = Provider.of<LanguageProvider>(context);

    return WillPopScope(
      onWillPop: () async {
        if (_currentStep > 1) {
          setState(() => _currentStep--);
          return false;
        }
        return true;
      },
      child: Scaffold(
        backgroundColor: Colors.white,
        body: SingleChildScrollView(
          child: Column(
            children: [
              // Progress Bar
              Padding(
                padding: const EdgeInsets.all(24),
                child: Column(
                  children: [
                    ClipRRect(
                      borderRadius: BorderRadius.circular(8),
                      child: LinearProgressIndicator(
                        value: _currentStep / 5,
                        minHeight: 8,
                        backgroundColor: Colors.grey[200],
                        valueColor: const AlwaysStoppedAnimation(
                          Color(0xFF0066FF),
                        ),
                      ),
                    ),
                    const SizedBox(height: 16),
                    Text(
                      'Step $_currentStep of 5',
                      style: TextStyle(color: Colors.grey[600], fontSize: 14),
                    ),
                  ],
                ),
              ),
              // Step Content
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 24),
                child: Column(
                  children: [
                    if (_currentStep == 1) _buildStep1(languageProvider),
                    if (_currentStep == 2) _buildStep2(languageProvider),
                    if (_currentStep == 3) _buildStep3(languageProvider),
                    if (_currentStep == 4) _buildStep4(languageProvider),
                    if (_currentStep == 5) _buildStep5(languageProvider),
                  ],
                ),
              ),
              const SizedBox(height: 32),
              // Navigation Buttons
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 24),
                child: Row(
                  children: [
                    if (_currentStep > 1)
                      Expanded(
                        child: OutlinedButton(
                          onPressed: () {
                            setState(() => _currentStep--);
                          },
                          style: OutlinedButton.styleFrom(
                            padding: const EdgeInsets.symmetric(vertical: 14),
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(12),
                            ),
                            side: const BorderSide(
                              color: Colors.grey,
                              width: 1,
                            ),
                          ),
                          child: Text(
                            languageProvider.t('skip'),
                            style: const TextStyle(
                              color: Colors.black,
                              fontWeight: FontWeight.w600,
                            ),
                          ),
                        ),
                      ),
                    if (_currentStep > 1) const SizedBox(width: 12),
                    Expanded(
                      child: ElevatedButton(
                        onPressed: _canProceed()
                            ? () {
                                if (_currentStep < 5) {
                                  setState(() => _currentStep++);
                                } else {
                                  context.go('/dashboard');
                                }
                              }
                            : null,
                        style: ElevatedButton.styleFrom(
                          padding: const EdgeInsets.symmetric(vertical: 14),
                          backgroundColor: const Color(0xFF0066FF),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(12),
                          ),
                        ),
                        child: Text(
                          _currentStep == 5
                              ? languageProvider.t('startPlan')
                              : languageProvider.t('next'),
                          style: const TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 32),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildStep1(LanguageProvider provider) {
    return Column(
      children: [
        Container(
          width: 80,
          height: 80,
          decoration: BoxDecoration(
            color: const Color(0xFF0066FF).withOpacity(0.1),
            borderRadius: BorderRadius.circular(20),
          ),
          child: const Icon(
            Icons.straighten,
            color: Color(0xFF0066FF),
            size: 40,
          ),
        ),
        const SizedBox(height: 24),
        Text(
          provider.t('physicalStats'),
          style: const TextStyle(
            color: Color(0xFF0066FF),
            fontSize: 20,
            fontWeight: FontWeight.bold,
          ),
        ),
        const SizedBox(height: 8),
        Text(provider.t('helpUs'), style: TextStyle(color: Colors.grey[600])),
        const SizedBox(height: 32),
        _buildSlider(
          provider.t('height'),
          _height,
          100,
          220,
          '${_height.toInt()} ${provider.t('cm')}',
          (value) {
            setState(() => _height = value);
          },
        ),
        const SizedBox(height: 32),
        _buildSlider(
          provider.t('weight'),
          _weight,
          30,
          200,
          '${_weight.toInt()} ${provider.t('kg')}',
          (value) {
            setState(() => _weight = value);
          },
        ),
      ],
    );
  }

  Widget _buildStep2(LanguageProvider provider) {
    return Column(
      children: [
        Container(
          width: 80,
          height: 80,
          decoration: BoxDecoration(
            color: const Color(0xFF0066FF).withOpacity(0.1),
            borderRadius: BorderRadius.circular(20),
          ),
          child: const Icon(Icons.person, color: Color(0xFF0066FF), size: 40),
        ),
        const SizedBox(height: 24),
        Text(
          provider.t('gender'),
          style: const TextStyle(
            color: Color(0xFF0066FF),
            fontSize: 20,
            fontWeight: FontWeight.bold,
          ),
        ),
        const SizedBox(height: 32),
        Row(
          children: [
            Expanded(
              child: _buildSelectionCard(
                provider.t('male'),
                _selectedGender == 'male',
                () => setState(() => _selectedGender = 'male'),
              ),
            ),
            const SizedBox(width: 16),
            Expanded(
              child: _buildSelectionCard(
                provider.t('female'),
                _selectedGender == 'female',
                () => setState(() => _selectedGender = 'female'),
              ),
            ),
          ],
        ),
      ],
    );
  }

  Widget _buildStep3(LanguageProvider provider) {
    return Column(
      children: [
        Container(
          width: 80,
          height: 80,
          decoration: BoxDecoration(
            color: const Color(0xFF0066FF).withOpacity(0.1),
            borderRadius: BorderRadius.circular(20),
          ),
          child: const Icon(
            Icons.track_changes,
            color: Color(0xFF0066FF),
            size: 40,
          ),
        ),
        const SizedBox(height: 24),
        Text(
          provider.t('selectGoal'),
          style: const TextStyle(
            color: Color(0xFF0066FF),
            fontSize: 20,
            fontWeight: FontWeight.bold,
          ),
        ),
        const SizedBox(height: 32),
        Column(
          children: goals.map((goal) {
            return Padding(
              padding: const EdgeInsets.only(bottom: 12),
              child: _buildSelectionCard(
                provider.t(goal),
                _selectedGoal == goal,
                () => setState(() => _selectedGoal = goal),
                fullWidth: true,
              ),
            );
          }).toList(),
        ),
      ],
    );
  }

  Widget _buildStep4(LanguageProvider provider) {
    return Column(
      children: [
        Container(
          width: 80,
          height: 80,
          decoration: BoxDecoration(
            color: const Color(0xFF0066FF).withOpacity(0.1),
            borderRadius: BorderRadius.circular(20),
          ),
          child: const Icon(
            Icons.fitness_center,
            color: Color(0xFF0066FF),
            size: 40,
          ),
        ),
        const SizedBox(height: 24),
        Text(
          provider.t('activityLevel'),
          style: const TextStyle(
            color: Color(0xFF0066FF),
            fontSize: 20,
            fontWeight: FontWeight.bold,
          ),
        ),
        const SizedBox(height: 32),
        Column(
          children: activityLevels.map((level) {
            return Padding(
              padding: const EdgeInsets.only(bottom: 12),
              child: _buildSelectionCard(
                provider.t(level),
                _selectedActivityLevel == level,
                () => setState(() => _selectedActivityLevel = level),
                fullWidth: true,
              ),
            );
          }).toList(),
        ),
      ],
    );
  }

  Widget _buildStep5(LanguageProvider provider) {
    return Column(
      children: [
        Container(
          width: 80,
          height: 80,
          decoration: BoxDecoration(
            color: const Color(0xFF0066FF).withOpacity(0.1),
            borderRadius: BorderRadius.circular(20),
          ),
          child: const Icon(Icons.home, color: Color(0xFF0066FF), size: 40),
        ),
        const SizedBox(height: 24),
        Text(
          provider.t('equipment'),
          style: const TextStyle(
            color: Color(0xFF0066FF),
            fontSize: 20,
            fontWeight: FontWeight.bold,
          ),
        ),
        const SizedBox(height: 32),
        Row(
          children: [
            Expanded(
              child: _buildSelectionCard(
                provider.t('home'),
                _selectedEquipment == 'home',
                () => setState(() => _selectedEquipment = 'home'),
              ),
            ),
            const SizedBox(width: 16),
            Expanded(
              child: _buildSelectionCard(
                provider.t('gym'),
                _selectedEquipment == 'gym',
                () => setState(() => _selectedEquipment = 'gym'),
              ),
            ),
          ],
        ),
      ],
    );
  }

  Widget _buildSlider(
    String label,
    double value,
    double min,
    double max,
    String displayValue,
    ValueChanged<double> onChanged,
  ) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(
              label,
              style: const TextStyle(
                color: Colors.black87,
                fontWeight: FontWeight.w600,
              ),
            ),
            Text(
              displayValue,
              style: const TextStyle(
                color: Color(0xFF0066FF),
                fontWeight: FontWeight.w600,
              ),
            ),
          ],
        ),
        const SizedBox(height: 16),
        Slider(
          value: value,
          min: min,
          max: max,
          activeColor: const Color(0xFF0066FF),
          inactiveColor: Colors.grey[300],
          onChanged: onChanged,
        ),
      ],
    );
  }

  Widget _buildSelectionCard(
    String label,
    bool isSelected,
    VoidCallback onTap, {
    bool fullWidth = false,
  }) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 16),
        decoration: BoxDecoration(
          color: isSelected ? const Color(0xFF0066FF) : Colors.white,
          border: Border.all(
            color: isSelected ? const Color(0xFF0066FF) : Colors.grey[300]!,
            width: 2,
          ),
          borderRadius: BorderRadius.circular(12),
        ),
        child: Center(
          child: Text(
            label,
            textAlign: TextAlign.center,
            style: TextStyle(
              color: isSelected ? Colors.white : Colors.black87,
              fontWeight: FontWeight.w600,
              fontSize: 16,
            ),
          ),
        ),
      ),
    );
  }

  bool _canProceed() {
    switch (_currentStep) {
      case 1:
        return true;
      case 2:
        return _selectedGender != null;
      case 3:
        return _selectedGoal != null;
      case 4:
        return _selectedActivityLevel != null;
      case 5:
        return _selectedEquipment != null;
      default:
        return false;
    }
  }
}
