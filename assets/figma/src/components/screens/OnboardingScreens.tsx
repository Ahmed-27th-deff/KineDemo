import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Ruler, Weight, Target, Activity, Dumbbell, Home } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Slider } from '../ui/slider';

interface OnboardingScreensProps {
  onComplete: () => void;
}

export const OnboardingScreens: React.FC<OnboardingScreensProps> = ({ onComplete }) => {
  const { t, isRTL } = useLanguage();
  const [step, setStep] = useState(1);
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [goal, setGoal] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [equipment, setEquipment] = useState('');

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 flex flex-col">
      {/* Progress Bar */}
      <div className="p-6">
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#0066FF] to-[#FF7A00] transition-all duration-500"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
        <p className="text-gray-500 text-center mt-2">
          Step {step} of 5
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center px-6 pb-12">
        <div className="w-full max-w-md mx-auto">
          {/* Step 1: Height & Weight */}
          {step === 1 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center space-y-2">
                <div className="w-20 h-20 bg-[#0066FF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Ruler className="w-10 h-10 text-[#0066FF]" />
                </div>
                <h1 className="text-[#0066FF]">Physical Stats</h1>
                <p className="text-gray-600">Help us personalize your plan</p>
              </div>

              <div className="space-y-6">
                {/* Height */}
                <div className="space-y-4">
                  <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Label className="text-gray-700">{t('height')}</Label>
                    <span className="text-[#0066FF]">{height} {t('cm')}</span>
                  </div>
                  <Slider
                    value={[height]}
                    onValueChange={(value) => setHeight(value[0])}
                    min={100}
                    max={220}
                    step={1}
                    className="w-full"
                  />
                </div>

                {/* Weight */}
                <div className="space-y-4">
                  <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Label className="text-gray-700">{t('weight')}</Label>
                    <span className="text-[#0066FF]">{weight} {t('kg')}</span>
                  </div>
                  <Slider
                    value={[weight]}
                    onValueChange={(value) => setWeight(value[0])}
                    min={30}
                    max={200}
                    step={1}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Gender */}
          {step === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center space-y-2">
                <div className="w-20 h-20 bg-[#FF7A00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-10 h-10 text-[#FF7A00]" />
                </div>
                <h1 className="text-[#0066FF]">{t('gender')}</h1>
                <p className="text-gray-600">Select your gender</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setGender('male')}
                  className={`p-8 rounded-2xl border-2 transition-all ${
                    gender === 'male'
                      ? 'border-[#0066FF] bg-[#0066FF]/5 shadow-lg'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
                      gender === 'male' ? 'bg-[#0066FF]' : 'bg-gray-200'
                    }`}>
                      <Activity className={`w-10 h-10 ${gender === 'male' ? 'text-white' : 'text-gray-500'}`} />
                    </div>
                    <span className={gender === 'male' ? 'text-[#0066FF]' : 'text-gray-600'}>
                      {t('male')}
                    </span>
                  </div>
                </button>

                <button
                  onClick={() => setGender('female')}
                  className={`p-8 rounded-2xl border-2 transition-all ${
                    gender === 'female'
                      ? 'border-[#FF7A00] bg-[#FF7A00]/5 shadow-lg'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
                      gender === 'female' ? 'bg-[#FF7A00]' : 'bg-gray-200'
                    }`}>
                      <Activity className={`w-10 h-10 ${gender === 'female' ? 'text-white' : 'text-gray-500'}`} />
                    </div>
                    <span className={gender === 'female' ? 'text-[#FF7A00]' : 'text-gray-600'}>
                      {t('female')}
                    </span>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Goal Selection */}
          {step === 3 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center space-y-2">
                <div className="w-20 h-20 bg-[#00C853]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-10 h-10 text-[#00C853]" />
                </div>
                <h1 className="text-[#0066FF]">{t('selectGoal')}</h1>
                <p className="text-gray-600">What do you want to achieve?</p>
              </div>

              <div className="space-y-3">
                {['loseFat', 'gainWeight', 'buildMuscle', 'improveFitness'].map((goalOption) => (
                  <button
                    key={goalOption}
                    onClick={() => setGoal(goalOption)}
                    className={`w-full p-5 rounded-xl border-2 transition-all ${
                      goal === goalOption
                        ? 'border-[#0066FF] bg-[#0066FF]/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        goal === goalOption ? 'bg-[#0066FF]' : 'bg-gray-200'
                      }`}>
                        <Target className={`w-6 h-6 ${goal === goalOption ? 'text-white' : 'text-gray-500'}`} />
                      </div>
                      <span className={goal === goalOption ? 'text-[#0066FF]' : 'text-gray-600'}>
                        {t(goalOption)}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Activity Level & Equipment */}
          {step === 4 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center space-y-2">
                <div className="w-20 h-20 bg-[#FF7A00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Dumbbell className="w-10 h-10 text-[#FF7A00]" />
                </div>
                <h1 className="text-[#0066FF]">{t('activityLevel')}</h1>
                <p className="text-gray-600">Choose your fitness level</p>
              </div>

              <div className="space-y-6">
                {/* Activity Level */}
                <div className="space-y-3">
                  {['beginner', 'intermediate', 'advanced'].map((level) => (
                    <button
                      key={level}
                      onClick={() => setActivityLevel(level)}
                      className={`w-full p-4 rounded-xl border-2 transition-all ${
                        activityLevel === level
                          ? 'border-[#0066FF] bg-[#0066FF]/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className={activityLevel === level ? 'text-[#0066FF]' : 'text-gray-600'}>
                        {t(level)}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Equipment */}
                <div className="space-y-3">
                  <Label className="text-gray-700">{t('equipment')}</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setEquipment('home')}
                      className={`p-5 rounded-xl border-2 transition-all ${
                        equipment === 'home'
                          ? 'border-[#00C853] bg-[#00C853]/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <Home className={`w-8 h-8 ${equipment === 'home' ? 'text-[#00C853]' : 'text-gray-500'}`} />
                        <span className={equipment === 'home' ? 'text-[#00C853]' : 'text-gray-600'}>
                          {t('home')}
                        </span>
                      </div>
                    </button>
                    <button
                      onClick={() => setEquipment('gym')}
                      className={`p-5 rounded-xl border-2 transition-all ${
                        equipment === 'gym'
                          ? 'border-[#00C853] bg-[#00C853]/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <Dumbbell className={`w-8 h-8 ${equipment === 'gym' ? 'text-[#00C853]' : 'text-gray-500'}`} />
                        <span className={equipment === 'gym' ? 'text-[#00C853]' : 'text-gray-600'}>
                          {t('gym')}
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Summary */}
          {step === 5 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center space-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0066FF] to-[#00C853] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-[#0066FF]">Your Plan is Ready!</h1>
                <p className="text-gray-600">Review your personalized fitness plan</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg space-y-4">
                <div className={`flex justify-between items-center pb-4 border-b ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-gray-600">{t('height')}</span>
                  <span>{height} {t('cm')}</span>
                </div>
                <div className={`flex justify-between items-center pb-4 border-b ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-gray-600">{t('weight')}</span>
                  <span>{weight} {t('kg')}</span>
                </div>
                <div className={`flex justify-between items-center pb-4 border-b ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-gray-600">{t('gender')}</span>
                  <span className="capitalize">{t(gender)}</span>
                </div>
                <div className={`flex justify-between items-center pb-4 border-b ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-gray-600">Goal</span>
                  <span>{t(goal)}</span>
                </div>
                <div className={`flex justify-between items-center pb-4 border-b ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-gray-600">{t('activityLevel')}</span>
                  <span className="capitalize">{t(activityLevel)}</span>
                </div>
                <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-gray-600">{t('equipment')}</span>
                  <span className="capitalize">{t(equipment)}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className={`p-6 flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
        {step > 1 && (
          <Button
            onClick={prevStep}
            variant="outline"
            className="h-12 rounded-xl"
          >
            {isRTL ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </Button>
        )}
        <Button
          onClick={nextStep}
          className="flex-1 h-12 bg-gradient-to-r from-[#0066FF] to-[#FF7A00] hover:opacity-90 text-white rounded-xl"
        >
          {step === 5 ? t('startPlan') : t('next')}
        </Button>
      </div>
    </div>
  );
};
