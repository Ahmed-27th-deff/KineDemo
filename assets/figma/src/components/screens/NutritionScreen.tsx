import React from 'react';
import { ArrowLeft, ChevronRight, Flame, Beef, Wheat } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { CircularProgress } from '../CircularProgress';

interface NutritionScreenProps {
  onBack: () => void;
}

const meals = [
  {
    type: 'breakfast',
    name: 'Protein Oatmeal Bowl',
    time: '8:00 AM',
    calories: 450,
    protein: 35,
    carbs: 52,
    fats: 12,
    image: 'https://images.unsplash.com/photo-1561997315-6d0610a96b9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwYnJlYWtmYXN0JTIwYm93bHxlbnwxfHx8fDE3NjIwMDA0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    type: 'lunch',
    name: 'Grilled Chicken Salad',
    time: '1:00 PM',
    calories: 380,
    protein: 42,
    carbs: 28,
    fats: 10,
    image: 'https://images.unsplash.com/photo-1708987379841-2badb0d3a95a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMGZvb2R8ZW58MXx8fHwxNzYxODkzMzcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    type: 'snack',
    name: 'Greek Yogurt & Berries',
    time: '4:00 PM',
    calories: 200,
    protein: 18,
    carbs: 24,
    fats: 4,
    image: 'https://images.unsplash.com/photo-1561997315-6d0610a96b9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwYnJlYWtmYXN0JTIwYm93bHxlbnwxfHx8fDE3NjIwMDA0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    type: 'dinner',
    name: 'Salmon with Quinoa',
    time: '7:00 PM',
    calories: 520,
    protein: 45,
    carbs: 42,
    fats: 18,
    image: 'https://images.unsplash.com/photo-1708987379841-2badb0d3a95a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMGZvb2R8ZW58MXx8fHwxNzYxODkzMzcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export const NutritionScreen: React.FC<NutritionScreenProps> = ({ onBack }) => {
  const { t, isRTL } = useLanguage();

  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);
  const totalProtein = meals.reduce((sum, meal) => sum + meal.protein, 0);
  const totalCarbs = meals.reduce((sum, meal) => sum + meal.carbs, 0);

  const dailyCalorieGoal = 2000;
  const dailyProteinGoal = 150;
  const dailyCarbsGoal = 200;

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
          <h2 className="text-white" style={{ fontWeight: 600 }}>{t('nutrition')}</h2>
          <div className="w-10" />
        </div>
      </div>

      {/* Daily Summary */}
      <div className="p-6 space-y-6">
        <div className="glass rounded-3xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8F1FF] opacity-5 blur-[100px] rounded-full" />
          <div className="relative">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-white" style={{ fontWeight: 600 }}>Today's Nutrition</h3>
              <div className="glass-light px-3 py-1.5 rounded-full">
                <p className="text-[#B8F1FF] text-xs">{totalCalories} cal</p>
              </div>
            </div>
            
            {/* Macro Rings */}
            <div className="flex justify-around items-center mb-6">
              <div className="text-center">
                <CircularProgress 
                  percentage={(totalCalories / dailyCalorieGoal) * 100} 
                  size={80}
                  strokeWidth={8}
                  color1="#FFD966"
                  color2="#FFC233"
                />
                <p className="text-[#A0A0A0] text-xs mt-2">{t('calories')}</p>
              </div>
              <div className="text-center">
                <CircularProgress 
                  percentage={(totalProtein / dailyProteinGoal) * 100} 
                  size={80}
                  strokeWidth={8}
                  color1="#B8F1FF"
                  color2="#76A8FF"
                />
                <p className="text-[#A0A0A0] text-xs mt-2">{t('protein')}</p>
              </div>
              <div className="text-center">
                <CircularProgress 
                  percentage={(totalCarbs / dailyCarbsGoal) * 100} 
                  size={80}
                  strokeWidth={8}
                  color1="#A5D6A7"
                  color2="#81C784"
                />
                <p className="text-[#A0A0A0] text-xs mt-2">{t('carbs')}</p>
              </div>
            </div>

            {/* Macro Breakdown */}
            <div className="space-y-3">
              <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-10 h-10 bg-[#FFD966]/10 rounded-xl flex items-center justify-center">
                    <Flame className="w-5 h-5 text-[#FFD966]" />
                  </div>
                  <span className="text-white">{t('calories')}</span>
                </div>
                <span className="text-[#A0A0A0]">{totalCalories} / {dailyCalorieGoal}</span>
              </div>

              <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-10 h-10 bg-[#B8F1FF]/10 rounded-xl flex items-center justify-center">
                    <Beef className="w-5 h-5 text-[#B8F1FF]" />
                  </div>
                  <span className="text-white">{t('protein')}</span>
                </div>
                <span className="text-[#A0A0A0]">{totalProtein}g / {dailyProteinGoal}g</span>
              </div>

              <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-10 h-10 bg-[#A5D6A7]/10 rounded-xl flex items-center justify-center">
                    <Wheat className="w-5 h-5 text-[#A5D6A7]" />
                  </div>
                  <span className="text-white">{t('carbs')}</span>
                </div>
                <span className="text-[#A0A0A0]">{totalCarbs}g / {dailyCarbsGoal}g</span>
              </div>
            </div>
          </div>
        </div>

        {/* Meals */}
        <div className="space-y-4">
          <h3 className="text-white" style={{ fontWeight: 600 }}>Today's Meals</h3>
          
          {meals.map((meal, index) => (
            <div key={index} className="glass rounded-2xl overflow-hidden group hover:border-[#B8F1FF]/20 transition-all">
              <div className={`flex ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="relative w-32 h-32">
                  <ImageWithFallback
                    src={meal.image}
                    alt={meal.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1A1A1A]/80" />
                </div>
                
                <div className={`flex-1 p-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <div className={`flex justify-between items-start mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div>
                      <div className="glass-light px-3 py-1 rounded-full inline-block mb-2">
                        <p className="text-[#B8F1FF] text-xs capitalize" style={{ fontWeight: 600 }}>
                          {t(meal.type)}
                        </p>
                      </div>
                      <h4 className="text-white mb-1" style={{ fontWeight: 500 }}>{meal.name}</h4>
                      <p className="text-[#A0A0A0] text-xs">{meal.time}</p>
                    </div>
                  </div>

                  <div className={`flex gap-4 mt-3 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#FFD966]" />
                      <span className="text-[#A0A0A0] text-xs">{meal.calories} cal</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#B8F1FF]" />
                      <span className="text-[#A0A0A0] text-xs">{meal.protein}g P</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#A5D6A7]" />
                      <span className="text-[#A0A0A0] text-xs">{meal.carbs}g C</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
