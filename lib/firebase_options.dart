// This file should be generated using FlutterFire CLI
// Run: flutterfire configure
// For now, this is a placeholder

import 'package:firebase_core/firebase_core.dart' show FirebaseOptions;
import 'package:flutter/foundation.dart'
    show defaultTargetPlatform, kIsWeb, TargetPlatform;

class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    if (kIsWeb) {
      return web;
    }
    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
        return android;
      case TargetPlatform.iOS:
        return ios;
      case TargetPlatform.macOS:
        return macos;
      case TargetPlatform.windows:
        return windows;
      case TargetPlatform.linux:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for linux - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      default:
        throw UnsupportedError(
          'DefaultFirebaseOptions are not supported for this platform.',
        );
    }
  }

  static const FirebaseOptions web = FirebaseOptions(
    apiKey: 'AIzaSyBL7tQqtH_w6X7pwKzFTi1aBIYTy5yAjog',
    appId: '1:639487181344:web:60d6072d2142ce187e7245',
    messagingSenderId: '639487181344',
    projectId: 'kinedemo',
    authDomain: 'kinedemo.firebaseapp.com',
    storageBucket: 'kinedemo.firebasestorage.app',
    measurementId: 'G-KY1FBZY2QF',
  );

  static const FirebaseOptions android = FirebaseOptions(
    apiKey: 'AIzaSyD-_0QkJ3VfH3esvvDhCOSJN6gKe5kqsjQ',
    appId: '1:639487181344:android:5b971b62aff7d1b67e7245',
    messagingSenderId: '639487181344',
    projectId: 'kinedemo',
    storageBucket: 'kinedemo.firebasestorage.app',
  );

  static const FirebaseOptions ios = FirebaseOptions(
    apiKey: 'AIzaSyDIok8uRdmwioEqhyvcd0BjMKPUhLJYsS8',
    appId: '1:639487181344:ios:dfa4071b13050a477e7245',
    messagingSenderId: '639487181344',
    projectId: 'kinedemo',
    storageBucket: 'kinedemo.firebasestorage.app',
    iosBundleId: 'com.example.kinedemo',
  );

  static const FirebaseOptions macos = FirebaseOptions(
    apiKey: 'AIzaSyDIok8uRdmwioEqhyvcd0BjMKPUhLJYsS8',
    appId: '1:639487181344:ios:dfa4071b13050a477e7245',
    messagingSenderId: '639487181344',
    projectId: 'kinedemo',
    storageBucket: 'kinedemo.firebasestorage.app',
    iosBundleId: 'com.example.kinedemo',
  );

  static const FirebaseOptions windows = FirebaseOptions(
    apiKey: 'AIzaSyBL7tQqtH_w6X7pwKzFTi1aBIYTy5yAjog',
    appId: '1:639487181344:web:d0eaa31dce35d16b7e7245',
    messagingSenderId: '639487181344',
    projectId: 'kinedemo',
    authDomain: 'kinedemo.firebaseapp.com',
    storageBucket: 'kinedemo.firebasestorage.app',
    measurementId: 'G-F6CQRF8SMM',
  );

}