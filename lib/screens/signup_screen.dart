import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:provider/provider.dart';
import 'package:kinedemo/providers/language_provider.dart';
import 'package:kinedemo/theme/app_theme.dart';

class SignUpScreen extends StatefulWidget {
  const SignUpScreen({Key? key}) : super(key: key);

  @override
  State<SignUpScreen> createState() => _SignUpScreenState();
}

class _SignUpScreenState extends State<SignUpScreen> {
  final fullNameController = TextEditingController();
  final emailController = TextEditingController();
  final passwordController = TextEditingController();
  final confirmPasswordController = TextEditingController();
  String? selectedGender;
  bool _obscurePassword = true;
  bool _obscureConfirmPassword = true;

  @override
  void dispose() {
    fullNameController.dispose();
    emailController.dispose();
    passwordController.dispose();
    confirmPasswordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final languageProvider = Provider.of<LanguageProvider>(context);

    return Scaffold(
      backgroundColor: AppTheme.darkBg,
      body: Stack(
        children: [
          Positioned(
            top: 0,
            left: 0,
            child: Container(
              width: 384,
              height: 384,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: AppTheme.cyanLight.withOpacity(0.1),
              ),
            ),
          ),
          Positioned(
            bottom: 0,
            right: 0,
            child: Container(
              width: 384,
              height: 384,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: AppTheme.blueDark.withOpacity(0.1),
              ),
            ),
          ),
          SingleChildScrollView(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              child: Column(
                children: [
                  Padding(
                    padding: const EdgeInsets.only(top: 24, bottom: 32),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(
                          languageProvider.t('appName'),
                          style: const TextStyle(
                            color: AppTheme.cyanLight,
                            fontSize: 18,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                        GestureDetector(
                          onTap: () {
                            languageProvider.setLanguage(
                              languageProvider.language == 'en' ? 'ar' : 'en',
                            );
                          },
                          child: Container(
                            padding: const EdgeInsets.symmetric(
                              horizontal: 12,
                              vertical: 8,
                            ),
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(20),
                              border: Border.all(
                                color: AppTheme.cyanLight.withOpacity(0.3),
                              ),
                            ),
                            child: Row(
                              children: [
                                const Icon(
                                  Icons.language,
                                  color: AppTheme.textLight,
                                  size: 18,
                                ),
                                const SizedBox(width: 4),
                                Text(
                                  languageProvider.language == 'en'
                                      ? 'ع'
                                      : 'EN',
                                  style: const TextStyle(
                                    color: AppTheme.textLight,
                                    fontSize: 12,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Column(
                    children: [
                      Text(
                        languageProvider.t('startYourJourney'),
                        style: const TextStyle(
                          color: AppTheme.textWhite,
                          fontSize: 32,
                          fontWeight: FontWeight.bold,
                        ),
                        textAlign: TextAlign.center,
                      ),
                      const SizedBox(height: 12),
                      Text(
                        languageProvider.t('transformYourBody'),
                        style: const TextStyle(
                          color: AppTheme.textLight,
                          fontSize: 16,
                        ),
                        textAlign: TextAlign.center,
                      ),
                    ],
                  ),
                  const SizedBox(height: 32),
                  _buildTextInputField(
                    languageProvider,
                    label: languageProvider.t('fullName'),
                    controller: fullNameController,
                    icon: Icons.person_outline,
                    hintText: 'John Doe',
                  ),
                  const SizedBox(height: 20),
                  _buildTextInputField(
                    languageProvider,
                    label: languageProvider.t('email'),
                    controller: emailController,
                    icon: Icons.mail_outline,
                    hintText: 'example@email.com',
                    keyboardType: TextInputType.emailAddress,
                  ),
                  const SizedBox(height: 20),
                  _buildPasswordField(
                    languageProvider,
                    label: languageProvider.t('password'),
                    controller: passwordController,
                    obscure: _obscurePassword,
                    onVisibilityToggle: () {
                      setState(() {
                        _obscurePassword = !_obscurePassword;
                      });
                    },
                  ),
                  const SizedBox(height: 20),
                  _buildPasswordField(
                    languageProvider,
                    label: languageProvider.t('confirmPassword'),
                    controller: confirmPasswordController,
                    obscure: _obscureConfirmPassword,
                    onVisibilityToggle: () {
                      setState(() {
                        _obscureConfirmPassword = !_obscureConfirmPassword;
                      });
                    },
                  ),
                  const SizedBox(height: 20),
                  _buildGenderSelector(languageProvider),
                  const SizedBox(height: 32),
                  SizedBox(
                    width: double.infinity,
                    height: 56,
                    child: ElevatedButton(
                      onPressed: selectedGender != null
                          ? () {
                              context.go('/onboarding');
                            }
                          : null,
                      style: ElevatedButton.styleFrom(
                        backgroundColor: AppTheme.cyanLight,
                        foregroundColor: AppTheme.darkBg,
                        disabledBackgroundColor: AppTheme.cyanLight.withOpacity(
                          0.5,
                        ),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(16),
                        ),
                      ),
                      child: Text(
                        languageProvider.t('createAccount'),
                        style: const TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(height: 24),
                  GestureDetector(
                    onTap: () {
                      context.go('/login');
                    },
                    child: Text(
                      languageProvider.t('login'),
                      style: const TextStyle(
                        color: AppTheme.cyanLight,
                        fontSize: 14,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ),
                  const SizedBox(height: 40),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildTextInputField(
    LanguageProvider provider, {
    required String label,
    required TextEditingController controller,
    required IconData icon,
    required String hintText,
    TextInputType keyboardType = TextInputType.text,
  }) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          label,
          style: const TextStyle(
            color: Color(0xFFE5E5E5),
            fontSize: 14,
            fontWeight: FontWeight.w500,
          ),
        ),
        const SizedBox(height: 12),
        TextField(
          controller: controller,
          style: const TextStyle(color: AppTheme.textWhite),
          keyboardType: keyboardType,
          decoration: InputDecoration(
            prefixIcon: Icon(icon, color: AppTheme.textLight),
            hintText: hintText,
            hintStyle: const TextStyle(color: AppTheme.textLight),
            filled: true,
            fillColor: AppTheme.cardBg,
            border: OutlineInputBorder(
              borderRadius: BorderRadius.circular(16),
              borderSide: const BorderSide(color: AppTheme.borderColor),
            ),
            enabledBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(16),
              borderSide: const BorderSide(color: AppTheme.borderColor),
            ),
            focusedBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(16),
              borderSide: const BorderSide(color: AppTheme.cyanLight, width: 2),
            ),
            contentPadding: const EdgeInsets.symmetric(
              horizontal: 16,
              vertical: 14,
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildPasswordField(
    LanguageProvider provider, {
    required String label,
    required TextEditingController controller,
    required bool obscure,
    required VoidCallback onVisibilityToggle,
  }) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          label,
          style: const TextStyle(
            color: Color(0xFFE5E5E5),
            fontSize: 14,
            fontWeight: FontWeight.w500,
          ),
        ),
        const SizedBox(height: 12),
        TextField(
          controller: controller,
          style: const TextStyle(color: AppTheme.textWhite),
          obscureText: obscure,
          decoration: InputDecoration(
            prefixIcon: const Icon(
              Icons.lock_outline,
              color: AppTheme.textLight,
            ),
            suffixIcon: GestureDetector(
              onTap: onVisibilityToggle,
              child: Icon(
                obscure ? Icons.visibility_off : Icons.visibility,
                color: AppTheme.textLight,
              ),
            ),
            hintText: '••••••••',
            hintStyle: const TextStyle(color: AppTheme.textLight),
            filled: true,
            fillColor: AppTheme.cardBg,
            border: OutlineInputBorder(
              borderRadius: BorderRadius.circular(16),
              borderSide: const BorderSide(color: AppTheme.borderColor),
            ),
            enabledBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(16),
              borderSide: const BorderSide(color: AppTheme.borderColor),
            ),
            focusedBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(16),
              borderSide: const BorderSide(color: AppTheme.cyanLight, width: 2),
            ),
            contentPadding: const EdgeInsets.symmetric(
              horizontal: 16,
              vertical: 14,
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildGenderSelector(LanguageProvider provider) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          provider.t('gender'),
          style: const TextStyle(
            color: Color(0xFFE5E5E5),
            fontSize: 14,
            fontWeight: FontWeight.w500,
          ),
        ),
        const SizedBox(height: 12),
        Row(
          children: [
            Expanded(
              child: GestureDetector(
                onTap: () {
                  setState(() {
                    selectedGender = 'male';
                  });
                },
                child: Container(
                  padding: const EdgeInsets.symmetric(vertical: 14),
                  decoration: BoxDecoration(
                    color: selectedGender == 'male'
                        ? AppTheme.cyanLight
                        : AppTheme.cardBg,
                    border: Border.all(
                      color: selectedGender == 'male'
                          ? AppTheme.cyanLight
                          : AppTheme.borderColor,
                    ),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Text(
                    provider.t('male'),
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: selectedGender == 'male'
                          ? AppTheme.darkBg
                          : AppTheme.textLight,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ),
              ),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: GestureDetector(
                onTap: () {
                  setState(() {
                    selectedGender = 'female';
                  });
                },
                child: Container(
                  padding: const EdgeInsets.symmetric(vertical: 14),
                  decoration: BoxDecoration(
                    color: selectedGender == 'female'
                        ? AppTheme.cyanLight
                        : AppTheme.cardBg,
                    border: Border.all(
                      color: selectedGender == 'female'
                          ? AppTheme.cyanLight
                          : AppTheme.borderColor,
                    ),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Text(
                    provider.t('female'),
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: selectedGender == 'female'
                          ? AppTheme.darkBg
                          : AppTheme.textLight,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ],
    );
  }
}
