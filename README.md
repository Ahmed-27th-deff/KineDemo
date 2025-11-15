# KineDemo - AI Fitness Coach

A comprehensive Flutter-based fitness coaching application with AI-powered guidance, workout tracking, nutrition management, and progress analytics.

**Status:** ✅ Production-Ready | **Platform:** Cross-platform (Android, iOS, Windows, macOS, Linux, Web)

## 📱 Features

### 🎯 Core Functionality
- **User Authentication** - Secure login and account creation with validation
- **Personalized Onboarding** - 5-step setup wizard for fitness profiling
  - Height/weight configuration
  - Gender selection
  - Fitness goal setting
  - Activity level assessment
  - Equipment availability
- **Comprehensive Dashboard** - Main hub with quick stats and training programs
- **Exercise Management** - Browse 100+ exercises with detailed information
- **Real-time Workout Tracking** - Timer, set/rep counters, rest tracking
- **AI Coach Chat** - Conversational fitness guidance and motivation
- **Nutrition Tracking** - Meal logging with macro calculations (Protein, Carbs, Fats)
- **Progress Analytics** - Track metrics, achievements, and milestones
- **User Settings** - Profile management, preferences, language selection

### 🌍 Localization
- **Bilingual Support:** Arabic (AR) and English (EN)
- **RTL Support:** Full right-to-left layout support for Arabic
- **170+ Translation Keys:** Comprehensive app-wide localization

### 🎨 Design System
- **Dark Theme:** Optimized for eye comfort and modern aesthetics
- **Custom Color Palette:** 
  - Primary: Cyan (#B8F1FF)
  - Secondary: Blue (#76A8FF)
  - Dark Background: #0E0E0E
- **Glass-morphism Effects:** Modern UI with opacity overlays
- **Material Design 3:** Latest Material Design specifications
- **Custom Typography:** Google Fonts (Nunito) integration

## 🏗️ Project Structure

```
lib/
├── main.dart                          # App entry point & routing
├── theme/
│   └── app_theme.dart                # Design system & theme configuration
├── providers/
│   └── language_provider.dart        # State management & localization
└── screens/                           # 12 feature screens
    ├── splash_screen.dart            # Loading screen with animations
    ├── login_screen.dart             # User authentication
    ├── signup_screen.dart            # Account creation
    ├── onboarding_screen.dart        # 5-step profile setup
    ├── dashboard_screen.dart         # Main application hub
    ├── exercise_list_screen.dart     # Browse exercises
    ├── exercise_detail_screen.dart   # Exercise information
    ├── exercise_tracking_screen.dart # Real-time workout tracking
    ├── ai_coach_screen.dart          # AI chatbot interface
    ├── nutrition_screen.dart         # Meal & macro tracking
    ├── progress_screen.dart          # Metrics & achievements
    └── settings_screen.dart          # User preferences
```

## 🚀 Getting Started

### Prerequisites
- **Flutter:** 3.9.0 or higher
- **Dart:** 3.9.0 or higher
- **Android SDK:** API level 21+ (for Android development)
- **Xcode:** 13.0+ (for iOS development - macOS only)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ahmed-27th-deff/KineDemo.git
   cd KineDemo
   ```

2. **Install dependencies:**
   ```bash
   flutter pub get
   ```

3. **Run the app:**
   ```bash
   # Android
   flutter run -d android
   
   # iOS
   flutter run -d ios
   
   # Windows
   flutter run -d windows
   
   # Web
   flutter run -d chrome
   ```

## 📦 Dependencies

- **provider (^6.1.2)** - State management and dependency injection
- **go_router (^13.1.0)** - Type-safe declarative routing
- **google_fonts (^6.1.0)** - Custom typography with Google Fonts
- **intl (^0.20.2)** - Internationalization and localization

## 🎯 Architecture

### State Management
- **Provider Pattern:** Using ChangeNotifier for reactive state management
- **LanguageProvider:** Centralized localization state with language switching
- **Consumer Widgets:** UI updates automatically on language/state changes

### Navigation
- **GoRouter:** Type-safe, declarative navigation system
- **Named Routes:** 12 application routes with clear navigation flow
- **Deep Linking Ready:** Foundation for URL-based navigation

### Theme System
- **Centralized Theming:** All design tokens in `app_theme.dart`
- **Consistency:** Guaranteed UI consistency across the app
- **Easy Customization:** Modify colors and styles in one place

## 🌐 Supported Platforms

| Platform | Status | Min Version |
|----------|--------|------------|
| Android  | ✅ Supported | API 21 (Android 5.0) |
| iOS      | ✅ Supported | iOS 12.0+ |
| Windows  | ✅ Supported | Windows 10+ |
| macOS    | ✅ Supported | macOS 10.14+ |
| Linux    | ✅ Supported | Ubuntu 18.04+ |
| Web      | ✅ Supported | Chrome, Firefox, Safari |

## 🔧 Development

### Running Tests
```bash
flutter test
```

### Build Release APK (Android)
```bash
flutter build apk --release
```

### Build iOS App
```bash
flutter build ios --release
```

### Build Windows Executable
```bash
flutter build windows --release
```

### Format Code
```bash
dart format .
```

### Analyze Code
```bash
flutter analyze
```

## 📝 Environment Setup

### Android Development
1. Install Android Studio or Android Command Line Tools
2. Accept Android licenses:
   ```bash
   flutter doctor --android-licenses
   ```
3. Configure Android SDK path in environment variables

### iOS Development (macOS only)
1. Install Xcode and Xcode Command Line Tools
2. Install CocoaPods:
   ```bash
   sudo gem install cocoapods
   ```

## 🐛 Troubleshooting

### Dependency Issues
```bash
flutter clean
flutter pub get
```

### Build Cache Issues
```bash
flutter clean
flutter pub cache repair
flutter pub get
```

### Platform-Specific Issues
- **Android:** Check `android/local.properties` for SDK path
- **iOS:** Ensure Xcode is updated: `sudo xcode-select --install`
- **Windows:** Visual Studio 2022+ required with C++ development tools

## 📚 Additional Resources

- [Flutter Documentation](https://docs.flutter.dev/)
- [Dart Language Guide](https://dart.dev/guides)
- [Material Design Guidelines](https://m3.material.io/)
- [Provider Package Documentation](https://pub.dev/packages/provider)
- [GoRouter Documentation](https://pub.dev/packages/go_router)

## 🤝 Contributing

This is a demonstration project showcasing Flutter best practices. For questions or improvements, please open an issue on GitHub.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Ahmed** - [GitHub Profile](https://github.com/Ahmed-27th-deff)

## 📞 Support

For support, email: ahmed@example.com or open an issue on GitHub.

---

**Last Updated:** November 2025 | **Version:** 1.0.0
