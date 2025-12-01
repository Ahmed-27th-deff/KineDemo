# Firebase Setup Instructions

## Prerequisites
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Install FlutterFire CLI: `dart pub global activate flutterfire_cli`

## Setup Steps

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name (e.g., "kinedemo")
4. Follow the setup wizard

### 2. Enable Authentication
1. In Firebase Console, go to "Authentication"
2. Click "Get Started"
3. Enable "Email/Password" sign-in method

### 3. Create Firestore Database
1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Start in "Test mode" (for development)
4. Choose a location

### 4. Configure Flutter App
Run the following command in your project root:
```bash
flutterfire configure
```

This will:
- Create/update `firebase_options.dart` with your Firebase configuration
- Register your app with Firebase for all platforms
- Download necessary configuration files

### 5. Update Firestore Security Rules
In Firebase Console > Firestore Database > Rules, update to:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### 6. Install Dependencies
```bash
flutter pub get
```

### 7. Run the App
```bash
flutter run
```

## Architecture Overview

### MVVM Pattern Implementation

#### 1. Model (`lib/models/user_model.dart`)
- Represents user data structure
- Handles JSON serialization/deserialization

#### 2. Repository (`lib/repositories/auth_repository.dart`)
- Abstracts Firebase Authentication and Firestore
- Handles all backend communication
- Converts Firebase exceptions to user-friendly messages

#### 3. Cubit/ViewModel (`lib/cubits/auth/`)
- `auth_state.dart`: Defines all possible authentication states
- `auth_cubit.dart`: Contains business logic
- Manages state transitions (Loading, Authenticated, Error, etc.)
- Communicates with Repository

#### 4. View (`lib/screens/login_screen.dart`, `lib/screens/signup_screen.dart`)
- Handles UI and user interactions
- Uses BlocListener to react to state changes
- Uses BlocBuilder to rebuild UI based on state
- Form validation before calling Cubit methods

## Features Implemented

### Sign Up
- Full name validation
- Email format validation
- Password strength validation (min 6 characters)
- Password confirmation matching
- Gender selection
- User data stored in Firestore
- Loading state with spinner
- Error handling with SnackBar

### Login
- Email validation
- Password validation
- Loading state with spinner
- Error handling with SnackBar
- Auto-redirect on success

### State Management
- Authentication state persists across app restarts
- Auto-redirect based on authentication status
- Protected routes (redirect to login if not authenticated)

## Testing

### Test Sign Up
1. Open the app
2. Navigate to Sign Up screen
3. Fill in all fields
4. Select gender
5. Click "Create Account"
6. Should redirect to onboarding screen

### Test Login
1. Open the app
2. Navigate to Login screen
3. Enter registered email and password
4. Click "Login"
5. Should redirect to dashboard

### Test Validation
- Try submitting empty forms
- Try invalid email formats
- Try passwords less than 6 characters
- Try mismatched passwords in sign up

## Troubleshooting

### Firebase not initialized
- Make sure you ran `flutterfire configure`
- Check that `firebase_options.dart` exists and has valid configuration

### Authentication errors
- Verify Email/Password is enabled in Firebase Console
- Check Firebase Console > Authentication > Users to see registered users

### Firestore errors
- Verify Firestore database is created
- Check security rules allow read/write for authenticated users

## Next Steps

1. Add password reset functionality
2. Add email verification
3. Add social authentication (Google, Apple)
4. Add profile update functionality
5. Add user avatar upload
6. Implement proper error logging
