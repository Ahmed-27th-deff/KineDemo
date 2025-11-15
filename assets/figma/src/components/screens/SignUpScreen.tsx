import React, { useState } from 'react';
import { User, Mail, Lock, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface SignUpScreenProps {
  onSignUp: () => void;
  onBack: () => void;
}

export const SignUpScreen: React.FC<SignUpScreenProps> = ({ onSignUp, onBack }) => {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState<'male' | 'female' | ''>('');

  const handleSignUp = () => {
    if (gender) {
      onSignUp();
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0E0E0E] flex flex-col relative overflow-hidden">
      {/* Gradient Orbs Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#B8F1FF] opacity-10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#76A8FF] opacity-10 blur-[120px] rounded-full" />

      {/* Header */}
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
      <div className="flex-1 flex flex-col px-6 pb-12 overflow-y-auto z-10">
        <div className="w-full max-w-md mx-auto space-y-6">
          <div className="text-center space-y-3">
            <h1 className="text-white text-4xl" style={{ fontWeight: 700 }}>
              Start Your Journey
            </h1>
            <p className="text-[#A0A0A0]">Transform your body, transform your life</p>
          </div>

          <div className="space-y-5">
            {/* Full Name */}
            <div className="space-y-3">
              <Label htmlFor="fullName" className="text-white/90">
                {t('fullName')}
              </Label>
              <div className="relative">
                <User className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} w-5 h-5 text-[#A0A0A0]`} />
                <Input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`${isRTL ? 'pr-14' : 'pl-14'} h-14 bg-[#1A1A1A] border-[#2A2A2A] rounded-2xl text-white placeholder:text-[#A0A0A0] focus:border-[#B8F1FF] focus:ring-[#B8F1FF]/20`}
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email */}
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

            {/* Password */}
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

            {/* Confirm Password */}
            <div className="space-y-3">
              <Label htmlFor="confirmPassword" className="text-white/90">
                {t('confirmPassword')}
              </Label>
              <div className="relative">
                <Lock className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} w-5 h-5 text-[#A0A0A0]`} />
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`${isRTL ? 'pr-14' : 'pl-14'} h-14 bg-[#1A1A1A] border-[#2A2A2A] rounded-2xl text-white placeholder:text-[#A0A0A0] focus:border-[#B8F1FF] focus:ring-[#B8F1FF]/20`}
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Gender Selection */}
            <div className="space-y-3">
              <Label className="text-white/90">{t('gender')} *</Label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setGender('male')}
                  className={`p-6 rounded-2xl border-2 transition-all ${
                    gender === 'male'
                      ? 'border-[#B8F1FF] bg-[#B8F1FF]/5 shadow-lg shadow-[#B8F1FF]/20'
                      : 'border-[#2A2A2A] hover:border-[#2A2A2A]/80 bg-[#1A1A1A]'
                  }`}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      gender === 'male' ? 'bg-gradient-to-br from-[#B8F1FF] to-[#76A8FF]' : 'bg-[#2A2A2A]'
                    }`}>
                      <User className={`w-8 h-8 ${gender === 'male' ? 'text-[#0E0E0E]' : 'text-[#A0A0A0]'}`} />
                    </div>
                    <span className={gender === 'male' ? 'text-[#B8F1FF]' : 'text-[#A0A0A0]'}>
                      {t('male')}
                    </span>
                  </div>
                </button>

                <button
                  onClick={() => setGender('female')}
                  className={`p-6 rounded-2xl border-2 transition-all ${
                    gender === 'female'
                      ? 'border-[#76A8FF] bg-[#76A8FF]/5 shadow-lg shadow-[#76A8FF]/20'
                      : 'border-[#2A2A2A] hover:border-[#2A2A2A]/80 bg-[#1A1A1A]'
                  }`}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      gender === 'female' ? 'bg-gradient-to-br from-[#76A8FF] to-[#5A8CFF]' : 'bg-[#2A2A2A]'
                    }`}>
                      <User className={`w-8 h-8 ${gender === 'female' ? 'text-[#0E0E0E]' : 'text-[#A0A0A0]'}`} />
                    </div>
                    <span className={gender === 'female' ? 'text-[#76A8FF]' : 'text-[#A0A0A0]'}>
                      {t('female')}
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Create Account Button */}
            <Button
              onClick={handleSignUp}
              disabled={!gender}
              className="w-full h-14 bg-gradient-to-r from-[#B8F1FF] to-[#76A8FF] hover:opacity-90 text-[#0E0E0E] rounded-2xl disabled:opacity-30 shadow-lg shadow-[#B8F1FF]/30"
              style={{ fontWeight: 700 }}
            >
              {t('createAccount')}
            </Button>

            {/* Back to Login */}
            <div className="text-center pt-2">
              <button onClick={onBack} className="text-[#A0A0A0]">
                Already have an account?{' '}
                <span className="text-[#B8F1FF]">{t('login')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
