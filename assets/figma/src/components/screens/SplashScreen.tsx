import React, { useEffect } from 'react';
import { Dumbbell, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Button } from '../ui/button';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const { language, setLanguage, t, isRTL } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="h-screen w-full bg-[#0E0E0E] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Gradient Orbs Background */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#B8F1FF] opacity-20 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#76A8FF] opacity-20 blur-[120px] rounded-full" />

      {/* Language Toggle Button */}
      <div className={`absolute top-8 ${isRTL ? 'left-8' : 'right-8'} z-10`}>
        <Button
          onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
          variant="outline"
          className="glass-light border-[#B8F1FF]/30 text-white hover:bg-[#B8F1FF]/20 rounded-full gap-2"
        >
          <Globe className="w-4 h-4" />
          {language === 'en' ? 'العربية' : 'English'}
        </Button>
      </div>

      {/* Logo and App Name */}
      <div className="flex flex-col items-center gap-8 animate-in fade-in zoom-in duration-700 z-10">
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-[#B8F1FF] blur-3xl opacity-40 rounded-full" />
          <div className="relative w-28 h-28 glass-light rounded-3xl flex items-center justify-center shadow-2xl border border-[#B8F1FF]/30">
            <Dumbbell className="w-16 h-16 text-[#B8F1FF]" strokeWidth={2.5} />
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-white text-4xl mb-2" style={{ fontWeight: 700 }}>
            {t('appName')}
          </h1>
          <p className="text-[#A0A0A0]">Your AI-Powered Fitness Journey</p>
        </div>
      </div>

      {/* Loading Indicator */}
      <div className="absolute bottom-24 flex gap-2">
        <div className="w-3 h-3 bg-[#B8F1FF] rounded-full animate-bounce shadow-lg shadow-[#B8F1FF]/50" style={{ animationDelay: '0ms' }} />
        <div className="w-3 h-3 bg-[#B8F1FF] rounded-full animate-bounce shadow-lg shadow-[#B8F1FF]/50" style={{ animationDelay: '150ms' }} />
        <div className="w-3 h-3 bg-[#B8F1FF] rounded-full animate-bounce shadow-lg shadow-[#B8F1FF]/50" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  );
};
