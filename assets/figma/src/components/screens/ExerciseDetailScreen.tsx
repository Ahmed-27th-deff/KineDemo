import React from 'react';
import { ArrowLeft, ChevronRight, Clock, Repeat, Layers, Play } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ExerciseDetailScreenProps {
  onBack: () => void;
  onStartExercise: () => void;
}

export const ExerciseDetailScreen: React.FC<ExerciseDetailScreenProps> = ({ onBack, onStartExercise }) => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen w-full bg-[#0E0E0E] flex flex-col">
      {/* Header with Large Image */}
      <div className="relative h-96">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1634788699201-77bbb9428ab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGV4ZXJjaXNlfGVufDF8fHx8MTc2MTk0MDQ2MHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Push Ups"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/60 to-transparent" />
        
        {/* Back Button */}
        <Button
          onClick={onBack}
          variant="ghost"
          size="icon"
          className={`absolute top-6 ${isRTL ? 'right-6' : 'left-6'} glass-light hover:bg-white/20 text-white rounded-full z-10`}
        >
          {isRTL ? <ChevronRight className="w-6 h-6" /> : <ArrowLeft className="w-6 h-6" />}
        </Button>

        {/* Exercise Info */}
        <div className={`absolute bottom-6 ${isRTL ? 'right-6' : 'left-6'} z-10`}>
          <div className="glass-light px-4 py-2 rounded-full mb-3 inline-block">
            <p className="text-[#B8F1FF] text-sm" style={{ fontWeight: 600 }}>
              Chest
            </p>
          </div>
          <h1 className="text-white text-4xl mb-2" style={{ fontWeight: 700 }}>
            Push Ups
          </h1>
          <p className="text-[#A0A0A0]">Upper body compound exercise</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3">
          <div className="glass rounded-2xl p-5 text-center">
            <div className="w-12 h-12 bg-[#B8F1FF]/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Layers className="w-6 h-6 text-[#B8F1FF]" />
            </div>
            <p className="text-[#A0A0A0] text-xs mb-1">{t('sets')}</p>
            <p className="text-white text-xl" style={{ fontWeight: 700 }}>3</p>
          </div>
          
          <div className="glass rounded-2xl p-5 text-center">
            <div className="w-12 h-12 bg-[#76A8FF]/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Repeat className="w-6 h-6 text-[#76A8FF]" />
            </div>
            <p className="text-[#A0A0A0] text-xs mb-1">{t('reps')}</p>
            <p className="text-white text-xl" style={{ fontWeight: 700 }}>15</p>
          </div>
          
          <div className="glass rounded-2xl p-5 text-center">
            <div className="w-12 h-12 bg-[#FFD966]/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-[#FFD966]" />
            </div>
            <p className="text-[#A0A0A0] text-xs mb-1">{t('rest')}</p>
            <p className="text-white text-xl" style={{ fontWeight: 700 }}>60s</p>
          </div>
        </div>

        {/* Description */}
        <div className="glass rounded-2xl p-6 space-y-3">
          <h3 className="text-white" style={{ fontWeight: 600 }}>Description</h3>
          <p className="text-[#A0A0A0] leading-relaxed">
            A classic bodyweight exercise that targets your chest, shoulders, and triceps. 
            Great for building upper body strength and can be done anywhere without equipment.
          </p>
        </div>

        {/* Instructions */}
        <div className="glass rounded-2xl p-6 space-y-4">
          <h3 className="text-white" style={{ fontWeight: 600 }}>How to Perform</h3>
          <div className="space-y-4">
            <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-10 h-10 bg-gradient-to-br from-[#B8F1FF] to-[#76A8FF] rounded-full flex items-center justify-center text-[#0E0E0E] flex-shrink-0" style={{ fontWeight: 700 }}>
                1
              </div>
              <p className="text-[#A0A0A0] flex-1 pt-2">
                Start in a high plank position with hands shoulder-width apart
              </p>
            </div>
            <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-10 h-10 bg-gradient-to-br from-[#B8F1FF] to-[#76A8FF] rounded-full flex items-center justify-center text-[#0E0E0E] flex-shrink-0" style={{ fontWeight: 700 }}>
                2
              </div>
              <p className="text-[#A0A0A0] flex-1 pt-2">
                Lower your body until chest nearly touches the floor
              </p>
            </div>
            <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-10 h-10 bg-gradient-to-br from-[#B8F1FF] to-[#76A8FF] rounded-full flex items-center justify-center text-[#0E0E0E] flex-shrink-0" style={{ fontWeight: 700 }}>
                3
              </div>
              <p className="text-[#A0A0A0] flex-1 pt-2">
                Push yourself back up to starting position
              </p>
            </div>
            <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-10 h-10 bg-gradient-to-br from-[#B8F1FF] to-[#76A8FF] rounded-full flex items-center justify-center text-[#0E0E0E] flex-shrink-0" style={{ fontWeight: 700 }}>
                4
              </div>
              <p className="text-[#A0A0A0] flex-1 pt-2">
                Keep core engaged and body straight throughout
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Start Button */}
      <div className="p-6 border-t border-[#2A2A2A]">
        <Button
          onClick={onStartExercise}
          className="w-full h-16 bg-gradient-to-r from-[#B8F1FF] to-[#76A8FF] hover:opacity-90 text-[#0E0E0E] rounded-2xl shadow-2xl shadow-[#B8F1FF]/30 flex items-center justify-center gap-3"
          style={{ fontWeight: 700 }}
        >
          <Play className="w-6 h-6" fill="#0E0E0E" />
          {t('startExercise')}
        </Button>
      </div>
    </div>
  );
};
