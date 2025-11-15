# AI Fitness Coach - Flutter App

A complete conversion of the Figma-based React AI Fitness Coach design into a production-ready Flutter mobile application.

## Quick Start

### Prerequisites
- Flutter 3.9.0+
- Dart 3.9.0+
- Android Studio / Xcode / VS Code

### Installation

```bash
# Navigate to project
cd kinedemo

# Get dependencies
flutter pub get

# Run on Windows
flutter run -d windows

# Run on Android
flutter run -d android

# Run on iOS
flutter run -d ios

# Run on Web
flutter run -d chrome
```

## Project Structure

```
lib/
├── main.dart                    # App entry point & routing
├── theme/
│   └── app_theme.dart          # Design system & colors
├── providers/
│   └── language_provider.dart   # Localization state
└── screens/
    ├── splash_screen.dart
    ├── login_screen.dart
    ├── signup_screen.dart
    ├── onboarding_screen.dart
    ├── dashboard_screen.dart
    ├── exercise_list_screen.dart
    ├── exercise_detail_screen.dart
    ├── exercise_tracking_screen.dart
    ├── ai_coach_screen.dart
    ├── nutrition_screen.dart
    ├── progress_screen.dart
    └── settings_screen.dart
```

## Features

### 🎯 Complete Screens (12 total)
- ✅ Splash Screen with animations
- ✅ Login/Sign-up screens
- ✅ Multi-step onboarding
- ✅ Dashboard with quick stats
- ✅ Exercise browsing & tracking
- ✅ AI Coach chat interface
- ✅ Nutrition tracking
- ✅ Progress tracking
- ✅ Settings & profile management

### 🌍 Localization
- ✅ Arabic & English support
- ✅ RTL layout for Arabic
- ✅ 170+ translations
- ✅ Real-time language switching

### 🎨 Design
- Modern dark theme
- Cyan/Blue accent colors
- Glass-morphism elements
- Smooth animations
- Responsive layouts

### 🧭 Navigation
- Type-safe routing with GoRouter
- 12 named routes
- Back button support
- Seamless transitions

## Key Routes

| Route | Screen |
|-------|--------|
| `/splash` | Splash Screen |
| `/login` | Login Screen |
| `/signup` | Sign-up Screen |
| `/onboarding` | Onboarding (5 steps) |
| `/dashboard` | Main Dashboard |
| `/exercises` | Exercise List |
| `/exercise-detail` | Exercise Details |
| `/exercise-tracking` | Exercise Tracking |
| `/ai-coach` | AI Coach Chat |
| `/nutrition` | Nutrition Tracking |
| `/progress` | Progress & Achievements |
| `/settings` | Settings & Profile |

## State Management

### Provider Package
- `LanguageProvider`: Manages app-wide language state
- Automatic UI updates on language change
- Centralized translations

### GoRouter
- Declarative navigation
- Type-safe route definitions
- Named route support

## Customization

### Colors
Edit `lib/theme/app_theme.dart`:
```dart
static const Color cyanLight = Color(0xFFB8F1FF);
static const Color blueDark = Color(0xFF76A8FF);
static const Color darkBg = Color(0xFF0E0E0E);
```

### Translations
Edit `lib/providers/language_provider.dart`:
```dart
translations: {
  'en': { /* English translations */ },
  'ar': { /* Arabic translations */ }
}
```

### Fonts
Update `google_fonts` import in `lib/theme/app_theme.dart`

## Building for Release

### Android
```bash
flutter build apk --release
# or
flutter build appbundle --release
```

### iOS
```bash
flutter build ios --release
```

### Windows
```bash
flutter build windows --release
```

### Web
```bash
flutter build web --release
```

## Key Dependencies

- `provider: ^6.1.2` - State management
- `go_router: ^13.1.0` - Navigation
- `google_fonts: ^6.1.0` - Fonts
- `cached_network_image: ^3.3.1` - Image caching
- `intl: ^0.20.2` - Localization

## Functionality

### User Flows
1. **Signup Flow**: Splash → Login → SignUp → Onboarding → Dashboard
2. **Exercise Flow**: Dashboard → Exercises → Detail → Tracking
3. **Progress Flow**: Dashboard → Progress → View achievements
4. **AI Coach**: Chat interface for fitness guidance
5. **Nutrition**: Track meals and macros
6. **Settings**: Profile & preferences management

### Interactive Elements
- ✅ Form inputs with validation
- ✅ Slider controls
- ✅ Selection buttons
- ✅ Scrollable lists
- ✅ Chat messaging
- ✅ Exercise tracking
- ✅ Progress visualization

## Testing

### Automated Testing (optional)
```bash
flutter test
```

### Manual Testing
1. Launch app
2. Navigate through all screens
3. Test language toggle (EN/AR)
4. Verify all buttons and inputs
5. Check navigation flows

## Troubleshooting

### Build Issues
```bash
# Clean and rebuild
flutter clean
flutter pub get
flutter run
```

### Android Issues
```bash
# Update gradle
flutter doctor --android-licenses
```

### iOS Issues
```bash
# Update pod files
cd ios
pod repo update
pod install
cd ..
```

## Performance Tips

- Use `const` widgets where possible
- Lazy load screens with GoRouter
- Cache network images
- Optimize rebuild cycles
- Use `SingleChildScrollView` for scrollable content

## Next Steps

1. **Backend Integration**: Connect to Firebase/API
2. **Real Data**: Replace mock data with API calls
3. **Authentication**: Implement real auth system
4. **Database**: Add local/cloud database
5. **Push Notifications**: Implement notifications
6. **Analytics**: Add analytics tracking

## Support

For issues or questions:
1. Check the `CONVERSION_SUMMARY.md` for detailed documentation
2. Review the code comments in each screen
3. Check Flutter documentation: https://flutter.dev

## License

This project is part of the AI Fitness Coach application.

---

**Status**: ✅ Ready for Development/Deployment
**Last Updated**: 2025
**Platform Support**: Android, iOS, Windows, Web, macOS, Linux
