import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:provider/provider.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:kinedemo/providers/language_provider.dart';
import 'package:kinedemo/theme/app_theme.dart';
import 'package:kinedemo/cubits/auth/auth_cubit.dart';
import 'package:kinedemo/cubits/auth/auth_state.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({Key? key}) : super(key: key);

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _formKey = GlobalKey<FormState>();
  final emailController = TextEditingController();
  final passwordController = TextEditingController();
  bool _obscurePassword = true;

  @override
  void dispose() {
    emailController.dispose();
    passwordController.dispose();
    super.dispose();
  }

  void _handleLogin() {
    if (_formKey.currentState!.validate()) {
      context.read<AuthCubit>().signIn(
            email: emailController.text.trim(),
            password: passwordController.text,
          );
    }
  }

  @override
  Widget build(BuildContext context) {
    final languageProvider = Provider.of<LanguageProvider>(context);
    final isRTL = languageProvider.isRTL;

    return BlocListener<AuthCubit, AuthState>(
      listener: (context, state) {
        if (state is AuthError) {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
              content: Text(state.message),
              backgroundColor: Colors.red,
            ),
          );
        } else if (state is AuthAuthenticated) {
          context.go('/dashboard');
        }
      },
      child: Scaffold(
      backgroundColor: AppTheme.darkBg,
      body: Stack(
        children: [
          // Gradient Orbs Background
          Positioned(
            top: 0,
            right: 0,
            child: Container(
              width: 384,
              height: 384,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: AppTheme.cyanLight.withOpacity(0.1),
                boxShadow: [
                  BoxShadow(
                    color: AppTheme.cyanLight.withOpacity(0.05),
                    blurRadius: 120,
                  ),
                ],
              ),
            ),
          ),
          Positioned(
            bottom: 0,
            left: 0,
            child: Container(
              width: 384,
              height: 384,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: AppTheme.blueDark.withOpacity(0.1),
                boxShadow: [
                  BoxShadow(
                    color: AppTheme.blueDark.withOpacity(0.05),
                    blurRadius: 120,
                  ),
                ],
              ),
            ),
          ),
          // Main Content
          SingleChildScrollView(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              child: Form(
                key: _formKey,
                child: Column(
                  children: [
                  // Header
                  Padding(
                    padding: const EdgeInsets.only(top: 24, bottom: 40),
                    child: Row(
                      mainAxisAlignment: isRTL
                          ? MainAxisAlignment.spaceBetween
                          : MainAxisAlignment.spaceBetween,
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
                              color: Colors.transparent,
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
                  // Title Section
                  Column(
                    children: [
                      Text(
                        languageProvider.t('welcomeBack'),
                        style: const TextStyle(
                          color: AppTheme.textWhite,
                          fontSize: 32,
                          fontWeight: FontWeight.bold,
                        ),
                        textAlign: TextAlign.center,
                      ),
                      const SizedBox(height: 12),
                      Text(
                        languageProvider.t('continueYourJourney'),
                        style: const TextStyle(
                          color: AppTheme.textLight,
                          fontSize: 16,
                        ),
                        textAlign: TextAlign.center,
                      ),
                    ],
                  ),
                  const SizedBox(height: 48),
                  // Email Field
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        languageProvider.t('email'),
                        style: const TextStyle(
                          color: Color(0xFFE5E5E5),
                          fontSize: 14,
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                      const SizedBox(height: 12),
                      TextFormField(
                        controller: emailController,
                        style: const TextStyle(color: AppTheme.textWhite),
                        keyboardType: TextInputType.emailAddress,
                        validator: (value) {
                          if (value == null || value.isEmpty) {
                            return 'Please enter your email';
                          }
                          if (!value.contains('@')) {
                            return 'Please enter a valid email';
                          }
                          return null;
                        },
                        decoration: InputDecoration(
                          prefixIcon: const Icon(
                            Icons.mail_outline,
                            color: AppTheme.textLight,
                          ),
                          hintText: 'example@email.com',
                          hintStyle: const TextStyle(color: AppTheme.textLight),
                          filled: true,
                          fillColor: AppTheme.cardBg,
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(16),
                            borderSide: const BorderSide(
                              color: AppTheme.borderColor,
                            ),
                          ),
                          enabledBorder: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(16),
                            borderSide: const BorderSide(
                              color: AppTheme.borderColor,
                            ),
                          ),
                          focusedBorder: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(16),
                            borderSide: const BorderSide(
                              color: AppTheme.cyanLight,
                              width: 2,
                            ),
                          ),
                          contentPadding: const EdgeInsets.symmetric(
                            horizontal: 16,
                            vertical: 14,
                          ),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 24),
                  // Password Field
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        languageProvider.t('password'),
                        style: const TextStyle(
                          color: Color(0xFFE5E5E5),
                          fontSize: 14,
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                      const SizedBox(height: 12),
                      TextFormField(
                        controller: passwordController,
                        style: const TextStyle(color: AppTheme.textWhite),
                        obscureText: _obscurePassword,
                        validator: (value) {
                          if (value == null || value.isEmpty) {
                            return 'Please enter your password';
                          }
                          if (value.length < 6) {
                            return 'Password must be at least 6 characters';
                          }
                          return null;
                        },
                        decoration: InputDecoration(
                          prefixIcon: const Icon(
                            Icons.lock_outline,
                            color: AppTheme.textLight,
                          ),
                          suffixIcon: GestureDetector(
                            onTap: () {
                              setState(() {
                                _obscurePassword = !_obscurePassword;
                              });
                            },
                            child: Icon(
                              _obscurePassword
                                  ? Icons.visibility_off
                                  : Icons.visibility,
                              color: AppTheme.textLight,
                            ),
                          ),
                          hintText: '••••••••',
                          hintStyle: const TextStyle(color: AppTheme.textLight),
                          filled: true,
                          fillColor: AppTheme.cardBg,
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(16),
                            borderSide: const BorderSide(
                              color: AppTheme.borderColor,
                            ),
                          ),
                          enabledBorder: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(16),
                            borderSide: const BorderSide(
                              color: AppTheme.borderColor,
                            ),
                          ),
                          focusedBorder: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(16),
                            borderSide: const BorderSide(
                              color: AppTheme.cyanLight,
                              width: 2,
                            ),
                          ),
                          contentPadding: const EdgeInsets.symmetric(
                            horizontal: 16,
                            vertical: 14,
                          ),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 16),
                  // Forgot Password
                  Align(
                    alignment: isRTL
                        ? Alignment.centerLeft
                        : Alignment.centerRight,
                    child: Text(
                      languageProvider.t('forgotPassword'),
                      style: const TextStyle(
                        color: AppTheme.cyanLight,
                        fontSize: 14,
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                  ),
                  const SizedBox(height: 32),
                  // Login Button
                  BlocBuilder<AuthCubit, AuthState>(
                    builder: (context, state) {
                      final isLoading = state is AuthLoading;
                      return SizedBox(
                        width: double.infinity,
                        height: 56,
                        child: ElevatedButton(
                          onPressed: isLoading ? null : _handleLogin,
                          style: ElevatedButton.styleFrom(
                            backgroundColor: AppTheme.cyanLight,
                            foregroundColor: AppTheme.darkBg,
                            disabledBackgroundColor:
                                AppTheme.cyanLight.withOpacity(0.5),
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(16),
                            ),
                          ),
                          child: isLoading
                              ? const SizedBox(
                                  height: 20,
                                  width: 20,
                                  child: CircularProgressIndicator(
                                    strokeWidth: 2,
                                    valueColor: AlwaysStoppedAnimation(
                                      AppTheme.darkBg,
                                    ),
                                  ),
                                )
                              : Text(
                                  languageProvider.t('login'),
                                  style: const TextStyle(
                                    fontSize: 16,
                                    fontWeight: FontWeight.w600,
                                  ),
                                ),
                        ),
                      );
                    },
                  ),
                  const SizedBox(height: 24),
                  // Sign Up Link
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        "Don't have an account? ",
                        style: const TextStyle(
                          color: AppTheme.textLight,
                          fontSize: 14,
                        ),
                      ),
                      GestureDetector(
                        onTap: () {
                          context.go('/signup');
                        },
                        child: Text(
                          languageProvider.t('signUp'),
                          style: const TextStyle(
                            color: AppTheme.cyanLight,
                            fontSize: 14,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 40),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
      ),
    );
  }
}
