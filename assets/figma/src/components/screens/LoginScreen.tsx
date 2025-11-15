import React, { useState } from 'react';
import { Mail, Lock, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface LoginScreenProps {
  onLogin: () => void;
  onSignUp: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin, onSignUp }) => {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin();
  };

  return (
    <div className="min-h-screen w-full bg-[#0E0E0E] flex flex-col relative overflow-hidden">
      {/* Gradient Orbs Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8F1FF] opacity-10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#76A8FF] opacity-10 blur-[120px] rounded-full" />

      {/* Header with Language Toggle */}
      <div className={`flex justify-between items-center p-6 z-10 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <h2 className="text-[#B8F1FF]" style={{ fontWeight: 600 }}>{t('appName')}</h2>
        <Button
          onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
          variant="ghost"
          size="sm"
          className="gap-2 text-[#A0A0A0] hover:text-white hover:bg-[#1A1A1A]"
        >
          <Globe className="w-4 h-4" />
          {language === 'en' ? 'ع' : 'EN'}
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center px-6 pb-12 z-10">
        <div className="w-full max-w-md mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h1 className="text-white text-4xl" style={{ fontWeight: 700 }}>
              Welcome Back
            </h1>
            <p className="text-[#A0A0A0]">Continue your fitness transformation</p>
          </div>

          <div className="space-y-6">
            {/* Email Field */}
            <div className="space-y-3">
              <Label htmlFor="email" className="text-white/90">
                {t('email')}
              </Label>
              <div className="relative">
                <Mail className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} w-5 h-5 text-[#A0A0A0]`} />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`${isRTL ? 'pr-14' : 'pl-14'} h-14 bg-[#1A1A1A] border-[#2A2A2A] rounded-2xl text-white placeholder:text-[#A0A0A0] focus:border-[#B8F1FF] focus:ring-[#B8F1FF]/20`}
                  placeholder="example@email.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-3">
              <Label htmlFor="password" className="text-white/90">
                {t('password')}
              </Label>
              <div className="relative">
                <Lock className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} w-5 h-5 text-[#A0A0A0]`} />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`${isRTL ? 'pr-14' : 'pl-14'} h-14 bg-[#1A1A1A] border-[#2A2A2A] rounded-2xl text-white placeholder:text-[#A0A0A0] focus:border-[#B8F1FF] focus:ring-[#B8F1FF]/20`}
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className={`flex ${isRTL ? 'justify-start' : 'justify-end'}`}>
              <button className="text-[#B8F1FF] hover:underline">
                {t('forgotPassword')}
              </button>
            </div>

            {/* Login Button */}
            <Button
              onClick={handleLogin}
              className="w-full h-14 glass-light text-white rounded-2xl hover:bg-[#B8F1FF]/20 border-[#B8F1FF]/30"
              style={{ fontWeight: 600 }}
            >
              <span className="bg-gradient-to-r from-[#B8F1FF] to-[#76A8FF] bg-clip-text text-transparent">
                {t('login')}
              </span>
            </Button>

            {/* Sign Up Link */}
            <div className="text-center pt-4">
              <button
                onClick={onSignUp}
                className="text-[#A0A0A0]"
              >
                Don't have an account?{' '}
                <span className="text-[#B8F1FF]">{t('createAccount')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
