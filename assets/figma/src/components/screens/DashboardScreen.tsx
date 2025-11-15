import React, { useState } from 'react';
import { Dumbbell, Apple, TrendingUp, Settings, MessageCircle, Play, ChevronRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { CircularProgress } from '../CircularProgress';

interface DashboardScreenProps {
  onNavigate: (screen: string) => void;
}

const categories = ['All', 'Chest', 'Cardio', 'Lower Body', 'Upper Body', 'Core'];

const exercisePrograms = [
  { 
    name: 'Full Body Blast', 
    duration: '45 min',
    calories: 320,
    progress: 75,
    image: 'https://images.unsplash.com/photo-1628935291759-bbaf33a66dc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwbW90aXZhdGlvbiUyMGRhcmt8ZW58MXx8fHwxNzYyMDAxMjM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Full Body'
  },
  { 
    name: 'Chest & Triceps', 
    duration: '35 min',
    calories: 280,
    progress: 60,
    image: 'https://images.unsplash.com/photo-1634788699201-77bbb9428ab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGV4ZXJjaXNlfGVufDF8fHx8MTc2MTk0MDQ2MHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Upper Body'
  },
  { 
    name: 'Cardio HIIT', 
    duration: '30 min',
    calories: 400,
    progress: 85,
    image: 'https://images.unsplash.com/photo-1591291621060-89264efbeaed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBlcXVpcG1lbnQlMjB3ZWlnaHRzfGVufDF8fHx8MTc2MTg5NDU4MXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Cardio'
  },
];

export const DashboardScreen: React.FC<DashboardScreenProps> = ({ onNavigate }) => {
  const { t, isRTL } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const userName = 'Ahmad';

  return (
    <div className="min-h-screen w-full bg-[#0E0E0E] pb-24">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[480px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1628935291759-bbaf33a66dc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwbW90aXZhdGlvbiUyMGRhcmt8ZW58MXx8fHwxNzYyMDAxMjM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0E]/40 via-[#0E0E0E]/60 to-[#0E0E0E]" />
        </div>

        {/* Header */}
        <div className={`relative z-10 flex justify-between items-center p-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="glass-light px-4 py-2 rounded-full">
            <p className="text-[#B8F1FF] text-sm" style={{ fontWeight: 600 }}>
              {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onNavigate('settings')}
            className="glass-light text-white hover:bg-white/20 rounded-full"
          >
            <Settings className="w-5 h-5" />
          </Button>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 mt-20">
          <div className="space-y-4">
            <div className="inline-block glass-light px-4 py-2 rounded-full">
              <p className="text-[#A0A0A0] text-sm">
                {t('hello')}, {userName}! 👋
              </p>
            </div>
            <h1 className="text-white text-5xl leading-tight" style={{ fontWeight: 700 }}>
              Good day,<br />
              <span className="bg-gradient-to-r from-[#B8F1FF] to-[#76A8FF] bg-clip-text text-transparent">
                healthy body
              </span>
            </h1>
            <p className="text-[#A0A0A0] text-lg max-w-md">
              You're doing great this week. Keep pushing forward!
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3 mt-8">
            <div className="glass rounded-2xl p-4 text-center">
              <p className="text-[#B8F1FF] text-2xl mb-1" style={{ fontWeight: 700 }}>5</p>
              <p className="text-[#A0A0A0] text-xs">Workouts</p>
            </div>
            <div className="glass rounded-2xl p-4 text-center">
              <p className="text-[#76A8FF] text-2xl mb-1" style={{ fontWeight: 700 }}>1.2k</p>
              <p className="text-[#A0A0A0] text-xs">Calories</p>
            </div>
            <div className="glass rounded-2xl p-4 text-center">
              <p className="text-[#FFD966] text-2xl mb-1" style={{ fontWeight: 700 }}>180</p>
              <p className="text-[#A0A0A0] text-xs">Minutes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Pills - Horizontal Scroll */}
      <div className="px-6 py-6">
        <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex-shrink-0 px-6 py-2.5 rounded-full transition-all ${
                selectedCategory === category
                  ? 'glass-light border-[#B8F1FF]/50 text-[#B8F1FF] shadow-lg shadow-[#B8F1FF]/20'
                  : 'bg-[#1A1A1A] text-[#A0A0A0] hover:bg-[#2A2A2A]'
              }`}
              style={{ fontWeight: selectedCategory === category ? 600 : 400 }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Programs Section */}
      <div className="px-6 space-y-4">
        <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
          <h2 className="text-white" style={{ fontWeight: 600 }}>Training Programs</h2>
          <button className="text-[#B8F1FF] text-sm">See all</button>
        </div>

        <div className="space-y-4">
          {exercisePrograms.map((program, index) => (
            <button
              key={index}
              onClick={() => onNavigate('exercise-detail')}
              className="w-full group"
            >
              <div className="relative h-48 rounded-3xl overflow-hidden">
                <ImageWithFallback
                  src={program.image}
                  alt={program.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className="glass-light px-3 py-1.5 rounded-full">
                    <p className="text-[#B8F1FF] text-xs" style={{ fontWeight: 600 }}>
                      {program.category}
                    </p>
                  </div>
                </div>

                {/* Circular Progress */}
                <div className="absolute top-4 right-4">
                  <CircularProgress percentage={program.progress} size={56} />
                </div>

                {/* Program Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl mb-2" style={{ fontWeight: 700 }}>
                    {program.name}
                  </h3>
                  <div className="flex items-center gap-4 text-[#A0A0A0] text-sm">
                    <span>🕐 {program.duration}</span>
                    <span>•</span>
                    <span>🔥 {program.calories} cal</span>
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute bottom-4 right-4">
                  <div className="w-12 h-12 glass-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-[#B8F1FF]" fill="#B8F1FF" />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 glass border-t border-[#2A2A2A] px-6 py-4 safe-area-bottom z-20">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <button className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-10 bg-gradient-to-br from-[#B8F1FF] to-[#76A8FF] rounded-2xl flex items-center justify-center shadow-lg shadow-[#B8F1FF]/30">
              <Dumbbell className="w-5 h-5 text-[#0E0E0E]" />
            </div>
            <span className="text-xs text-[#B8F1FF]" style={{ fontWeight: 600 }}>Workout</span>
          </button>
          <button
            onClick={() => onNavigate('nutrition')}
            className="flex flex-col items-center gap-1.5 text-[#A0A0A0] hover:text-white"
          >
            <Apple className="w-6 h-6" />
            <span className="text-xs">{t('nutrition')}</span>
          </button>
          <button
            onClick={() => onNavigate('progress')}
            className="flex flex-col items-center gap-1.5 text-[#A0A0A0] hover:text-white"
          >
            <TrendingUp className="w-6 h-6" />
            <span className="text-xs">{t('progress')}</span>
          </button>
          <button
            onClick={() => onNavigate('settings')}
            className="flex flex-col items-center gap-1.5 text-[#A0A0A0] hover:text-white"
          >
            <Settings className="w-6 h-6" />
            <span className="text-xs">{t('settings')}</span>
          </button>
        </div>
      </div>

      {/* AI Coach FAB */}
      <button
        onClick={() => onNavigate('ai-coach')}
        className="fixed bottom-24 right-6 w-16 h-16 bg-gradient-to-br from-[#B8F1FF] to-[#76A8FF] rounded-full shadow-2xl shadow-[#B8F1FF]/40 flex items-center justify-center hover:scale-110 transition-transform z-30"
      >
        <MessageCircle className="w-8 h-8 text-[#0E0E0E]" />
      </button>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};
