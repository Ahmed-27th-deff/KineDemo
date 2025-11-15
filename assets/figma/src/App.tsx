import React, { useState } from 'react';
import { LanguageProvider } from './components/LanguageContext';
import { SplashScreen } from './components/screens/SplashScreen';
import { LoginScreen } from './components/screens/LoginScreen';
import { SignUpScreen } from './components/screens/SignUpScreen';
import { OnboardingScreens } from './components/screens/OnboardingScreens';
import { DashboardScreen } from './components/screens/DashboardScreen';
import { ExerciseListScreen } from './components/screens/ExerciseListScreen';
import { ExerciseDetailScreen } from './components/screens/ExerciseDetailScreen';
import { ExerciseTrackingScreen } from './components/screens/ExerciseTrackingScreen';
import { AICoachScreen } from './components/screens/AICoachScreen';
import { NutritionScreen } from './components/screens/NutritionScreen';
import { ProgressScreen } from './components/screens/ProgressScreen';
import { SettingsScreen } from './components/screens/SettingsScreen';

type Screen =
  | 'splash'
  | 'login'
  | 'signup'
  | 'onboarding'
  | 'dashboard'
  | 'exercises'
  | 'exercise-detail'
  | 'exercise-tracking'
  | 'ai-coach'
  | 'nutrition'
  | 'progress'
  | 'settings';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [screenHistory, setScreenHistory] = useState<Screen[]>([]);

  const navigateTo = (screen: Screen) => {
    setScreenHistory([...screenHistory, currentScreen]);
    setCurrentScreen(screen);
  };

  const goBack = () => {
    if (screenHistory.length > 0) {
      const previousScreen = screenHistory[screenHistory.length - 1];
      setCurrentScreen(previousScreen);
      setScreenHistory(screenHistory.slice(0, -1));
    } else {
      setCurrentScreen('dashboard');
    }
  };

  return (
    <LanguageProvider>
      <div className="w-full min-h-screen bg-white">
        {currentScreen === 'splash' && (
          <SplashScreen onComplete={() => setCurrentScreen('login')} />
        )}

        {currentScreen === 'login' && (
          <LoginScreen
            onLogin={() => setCurrentScreen('dashboard')}
            onSignUp={() => navigateTo('signup')}
          />
        )}

        {currentScreen === 'signup' && (
          <SignUpScreen
            onSignUp={() => setCurrentScreen('onboarding')}
            onBack={() => setCurrentScreen('login')}
          />
        )}

        {currentScreen === 'onboarding' && (
          <OnboardingScreens onComplete={() => setCurrentScreen('dashboard')} />
        )}

        {currentScreen === 'dashboard' && (
          <DashboardScreen onNavigate={navigateTo} />
        )}

        {currentScreen === 'exercises' && (
          <ExerciseListScreen
            onBack={goBack}
            onSelectExercise={() => navigateTo('exercise-detail')}
          />
        )}

        {currentScreen === 'exercise-detail' && (
          <ExerciseDetailScreen
            onBack={goBack}
            onStartExercise={() => navigateTo('exercise-tracking')}
          />
        )}

        {currentScreen === 'exercise-tracking' && (
          <ExerciseTrackingScreen onStop={goBack} />
        )}

        {currentScreen === 'ai-coach' && (
          <AICoachScreen onBack={goBack} />
        )}

        {currentScreen === 'nutrition' && (
          <NutritionScreen onBack={goBack} />
        )}

        {currentScreen === 'progress' && (
          <ProgressScreen onBack={goBack} />
        )}

        {currentScreen === 'settings' && (
          <SettingsScreen onBack={goBack} />
        )}
      </div>
    </LanguageProvider>
  );
}
