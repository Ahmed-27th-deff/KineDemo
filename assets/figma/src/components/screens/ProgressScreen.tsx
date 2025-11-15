import React from 'react';
import { ArrowLeft, ChevronRight, Trophy, Target, Flame, TrendingUp } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Button } from '../ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { CircularProgress } from '../CircularProgress';

interface ProgressScreenProps {
  onBack: () => void;
}

const weightData = [
  { week: 'W1', weight: 85 },
  { week: 'W2', weight: 84.5 },
  { week: 'W3', weight: 83.8 },
  { week: 'W4', weight: 83.2 },
  { week: 'W5', weight: 82.5 },
  { week: 'W6', weight: 82 },
];

const achievements = [
  { icon: Trophy, title: '7-Day Streak', description: 'Completed workouts for 7 days straight', color: '#FFD700', progress: 100 },
  { icon: Target, title: 'Goal Crusher', description: 'Hit all macro targets for 5 days', color: '#B8F1FF', progress: 85 },
  { icon: Flame, title: '1000 Calories', description: 'Burned 1000+ calories in one day', color: '#FF8A80', progress: 100 },
  { icon: TrendingUp, title: 'Progress Master', description: 'Lost 3kg in 6 weeks', color: '#76A8FF', progress: 75 },
];

export const ProgressScreen: React.FC<ProgressScreenProps> = ({ onBack }) => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen w-full bg-[#0E0E0E] pb-20">
      {/* Header */}
      <div className="glass border-b border-[#2A2A2A] sticky top-0 z-10">
        <div className={`flex items-center justify-between p-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <Button
            onClick={onBack}
            variant="ghost"
            size="icon"
            className="rounded-full text-white hover:bg-[#1A1A1A]"
          >
            {isRTL ? <ChevronRight className="w-6 h-6" /> : <ArrowLeft className="w-6 h-6" />}
          </Button>
          <h2 className="text-white" style={{ fontWeight: 600 }}>{t('progress')}</h2>
          <div className="w-10" />
        </div>
      </div>

      {/* Stats Overview */}
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="glass rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8F1FF] opacity-10 blur-3xl rounded-full" />
            <div className="relative">
              <div className="w-14 h-14 bg-[#B8F1FF]/10 rounded-2xl flex items-center justify-center mb-4">
                <Flame className="w-7 h-7 text-[#B8F1FF]" />
              </div>
              <p className="text-[#A0A0A0] text-xs mb-2">Total Workouts</p>
              <p className="text-white text-4xl" style={{ fontWeight: 700 }}>42</p>
            </div>
          </div>

          <div className="glass rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#76A8FF] opacity-10 blur-3xl rounded-full" />
            <div className="relative">
              <div className="w-14 h-14 bg-[#76A8FF]/10 rounded-2xl flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-[#76A8FF]" />
              </div>
              <p className="text-[#A0A0A0] text-xs mb-2">{t('daysCompleted')}</p>
              <p className="text-white text-4xl" style={{ fontWeight: 700 }}>35</p>
            </div>
          </div>
        </div>

        {/* Weight Progress Chart */}
        <div className="glass rounded-3xl p-6 space-y-6">
          <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
            <h3 className="text-white" style={{ fontWeight: 600 }}>{t('weightChart')}</h3>
            <div className="glass-light px-3 py-1.5 rounded-full">
              <p className="text-[#B8F1FF] text-xs">-3 kg</p>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={weightData}>
              <defs>
                <linearGradient id="weightGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#B8F1FF" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#B8F1FF" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" />
              <XAxis dataKey="week" stroke="#A0A0A0" fontSize={12} />
              <YAxis stroke="#A0A0A0" fontSize={12} domain={[80, 86]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1A1A1A',
                  border: '1px solid #2A2A2A',
                  borderRadius: '12px',
                  color: '#FFFFFF',
                }}
              />
              <Area
                type="monotone"
                dataKey="weight"
                stroke="#B8F1FF"
                strokeWidth={3}
                fill="url(#weightGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>

          <div className={`flex justify-between items-center pt-4 border-t border-[#2A2A2A] ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div>
              <p className="text-[#A0A0A0] text-xs mb-1">Starting Weight</p>
              <p className="text-white" style={{ fontWeight: 600 }}>85 {t('kg')}</p>
            </div>
            <div className={isRTL ? 'text-left' : 'text-right'}>
              <p className="text-[#A0A0A0] text-xs mb-1">Current Weight</p>
              <p className="text-[#B8F1FF]" style={{ fontWeight: 600 }}>82 {t('kg')}</p>
            </div>
          </div>
        </div>

        {/* Muscle Gain Progress */}
        <div className="glass rounded-3xl p-6 space-y-5">
          <h3 className="text-white" style={{ fontWeight: 600 }}>{t('muscleGain')}</h3>
          
          <div className="space-y-5">
            <div className="space-y-2">
              <div className={`flex justify-between text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-[#A0A0A0]">Chest</span>
                <span className="text-[#B8F1FF]" style={{ fontWeight: 600 }}>+2.5cm</span>
              </div>
              <div className="relative w-full h-3 bg-[#1A1A1A] rounded-full overflow-hidden">
                <div 
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#B8F1FF] to-[#76A8FF] rounded-full shadow-lg shadow-[#B8F1FF]/30"
                  style={{ width: '75%' }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className={`flex justify-between text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-[#A0A0A0]">Arms</span>
                <span className="text-[#76A8FF]" style={{ fontWeight: 600 }}>+1.8cm</span>
              </div>
              <div className="relative w-full h-3 bg-[#1A1A1A] rounded-full overflow-hidden">
                <div 
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#76A8FF] to-[#5A8CFF] rounded-full shadow-lg shadow-[#76A8FF]/30"
                  style={{ width: '60%' }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className={`flex justify-between text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-[#A0A0A0]">Legs</span>
                <span className="text-[#A5D6A7]" style={{ fontWeight: 600 }}>+3.2cm</span>
              </div>
              <div className="relative w-full h-3 bg-[#1A1A1A] rounded-full overflow-hidden">
                <div 
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#A5D6A7] to-[#81C784] rounded-full shadow-lg shadow-[#A5D6A7]/30"
                  style={{ width: '85%' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="space-y-4">
          <h3 className="text-white" style={{ fontWeight: 600 }}>{t('achievements')}</h3>
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="glass rounded-2xl p-5 relative overflow-hidden">
                <div 
                  className="absolute top-0 right-0 w-24 h-24 blur-3xl rounded-full"
                  style={{ backgroundColor: achievement.color, opacity: 0.1 }}
                />
                <div className="relative">
                  <div className="flex justify-between items-start mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${achievement.color}20` }}
                    >
                      <achievement.icon className="w-6 h-6" style={{ color: achievement.color }} />
                    </div>
                    <CircularProgress 
                      percentage={achievement.progress} 
                      size={40} 
                      strokeWidth={4}
                      color1={achievement.color}
                      color2={achievement.color}
                      showPercentage={false}
                    />
                  </div>
                  <h4 className="text-white mb-2" style={{ fontWeight: 600 }}>{achievement.title}</h4>
                  <p className="text-[#A0A0A0] text-xs leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Summary */}
        <div className="glass rounded-3xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#B8F1FF] opacity-5 blur-3xl rounded-full" />
          <div className="relative">
            <h3 className="text-white mb-6" style={{ fontWeight: 600 }}>This Week</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className={isRTL ? 'text-right' : ''}>
                <p className="text-[#A0A0A0] text-xs mb-2">Workouts</p>
                <p className="text-white text-3xl" style={{ fontWeight: 700 }}>5<span className="text-[#A0A0A0] text-lg">/7</span></p>
              </div>
              <div className={isRTL ? 'text-right' : ''}>
                <p className="text-[#A0A0A0] text-xs mb-2">Calories</p>
                <p className="text-white text-3xl" style={{ fontWeight: 700 }}>9.8k</p>
              </div>
              <div className={isRTL ? 'text-right' : ''}>
                <p className="text-[#A0A0A0] text-xs mb-2">Minutes</p>
                <p className="text-white text-3xl" style={{ fontWeight: 700 }}>240</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
