# Quick Firebase Setup Guide

## Step 1: Install Required Tools

### Install Firebase CLI
```bash
flutterfire configure
```

### Install FlutterFire CLI
```bash
dart pub global activate flutterfire_cli
```

Make sure the Dart pub global bin directory is in your PATH.

## Step 2: Login to Firebase
```bash
firebase login
```

## Step 3: Configure FlutterFire
Run this command in your project root directory:
```bash
flutterfire configure
```

This command will:
1. Ask you to select or create a Firebase project
2. Ask which platforms you want to support (select Android, iOS, Web, etc.)
3. Automatically generate `lib/firebase_options.dart` with your configuration
4. Register your app with Firebase

## Step 4: Enable Authentication in Firebase Console

1. Go to https://console.firebase.google.com/
2. Select your project
3. Click on "Authentication" in the left sidebar
4. Click "Get Started"
5. Click on "Email/Password" under Sign-in providers
6. Enable "Email/Password"
7. Click "Save"

## Step 5: Create Firestore Database

1. In Firebase Console, click on "Firestore Database" in the left sidebar
2. Click "Create database"
3. Select "Start in test mode" (for development)
4. Choose your preferred location
5. Click "Enable"

## Step 6: Update Firestore Security Rules

1. In Firestore Database, click on the "Rules" tab
2. Replace the rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

3. Click "Publish"

## Step 7: Run Your App

```bash
flutter run
```

## Verification

After setup, you should be able to:
1. Create a new account (Sign Up)
2. Login with the created account
3. See user data in Firestore Console under "users" collection

## Common Issues

### Issue: "Firebase not initialized"
**Solution**: Make sure you ran `flutterfire configure` and the `firebase_options.dart` file was generated.

### Issue: "Email/Password accounts are not enabled"
**Solution**: Enable Email/Password authentication in Firebase Console > Authentication > Sign-in method.

### Issue: "Permission denied" when writing to Firestore
**Solution**: Update Firestore security rules as shown in Step 6.

### Issue: FlutterFire command not found
**Solution**: Add Dart pub global bin to your PATH:
- Windows: Add `%USERPROFILE%\AppData\Local\Pub\Cache\bin` to PATH
- Mac/Linux: Add `$HOME/.pub-cache/bin` to PATH

## Testing the Implementation

### Test Sign Up Flow:
1. Launch the app
2. Click "Sign Up" or navigate to signup screen
3. Fill in:
   - Full Name: "Test User"
   - Email: "test@example.com"
   - Password: "password123"
   - Confirm Password: "password123"
   - Gender: Select Male or Female
4. Click "Create Account"
5. Should show loading spinner
6. Should redirect to onboarding screen on success
7. Check Firebase Console > Authentication > Users to see the new user
8. Check Firestore > users collection to see user data

### Test Login Flow:
1. Launch the app
2. Navigate to login screen
3. Enter the email and password you used for signup
4. Click "Login"
5. Should show loading spinner
6. Should redirect to dashboard on success

### Test Validation:
1. Try submitting forms with empty fields - should show validation errors
2. Try invalid email format - should show "Please enter a valid email"
3. Try password less than 6 characters - should show error
4. Try mismatched passwords in signup - should show "Passwords do not match"

## Architecture Summary

The implementation follows MVVM pattern:

- **Model** (`lib/models/user_model.dart`): User data structure
- **Repository** (`lib/repositories/auth_repository.dart`): Firebase communication layer
- **Cubit** (`lib/cubits/auth/`): Business logic and state management
- **View** (`lib/screens/login_screen.dart`, `signup_screen.dart`): UI layer

State flow:
1. User interacts with View (clicks button)
2. View calls Cubit method
3. Cubit emits Loading state
4. Cubit calls Repository
5. Repository communicates with Firebase
6. Repository returns result to Cubit
7. Cubit emits Success or Error state
8. View reacts to state change (shows error or navigates)
