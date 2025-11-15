import React from 'react';
import { ArrowLeft, ChevronRight, Filter } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { CircularProgress } from '../CircularProgress';

interface ExerciseListScreenProps {
  onBack: () => void;
  onSelectExercise: () => void;
}

const exercises = [
  { 
    name: 'Push Ups', 
    sets: 3, 
    reps: 15, 
    category: 'Chest',
    progress: 75,
    image: 'https://images.unsplash.com/photo-1634788699201-77bbb9428ab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGV4ZXJjaXNlfGVufDF8fHx8MTc2MTk0MDQ2MHww&ixlib=rb-4.1.0&q=80&w=1080' 
  },
  { 
    name: 'Squats', 
    sets: 4, 
    reps: 12, 
    category: 'Legs',
    progress: 60,
    image: 'https://images.unsplash.com/photo-1591291621060-89264efbeaed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBlcXVpcG1lbnQlMjB3ZWlnaHRzfGVufDF8fHx8MTc2MTg5NDU4MXww&ixlib=rb-4.1.0&q=80&w=1080' 
  },
  { 
    name: 'Plank', 
    sets: 3, 
    reps: '45s', 
    category: 'Core',
    progress: 85,
    image: 'https://images.unsplash.com/photo-1634788699201-77bbb9428ab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGV4ZXJjaXNlfGVufDF8fHx8MTc2MTk0MDQ2MHww&ixlib=rb-4.1.0&q=80&w=1080' 
  },
  { 
    name: 'Pull Ups', 
    sets: 3, 
    reps: 8, 
    category: 'Back',
    progress: 45,
    image: 'https://images.unsplash.com/photo-1591291621060-89264efbeaed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBlcXVpcG1lbnQlMjB3ZWlnaHRzfGVufDF8fHx8MTc2MTg5NDU4MXww&ixlib=rb-4.1.0&q=80&w=1080' 
  },
  { 
    name: 'Lunges', 
    sets: 3, 
    reps: '10 each', 
    category: 'Legs',
    progress: 90,
    image: 'https://images.unsplash.com/photo-1634788699201-77bbb9428ab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGV4ZXJjaXNlfGVufDF8fHx8MTc2MTk0MDQ2MHww&ixlib=rb-4.1.0&q=80&w=1080' 
  },
  { 
    name: 'Dumbbell Curls', 
    sets: 4, 
    reps: 12, 
    category: 'Arms',
    progress: 70,
    image: 'https://images.unsplash.com/photo-1591291621060-89264efbeaed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBlcXVpcG1lbnQlMjB3ZWlnaHRzfGVufDF8fHx8MTc2MTg5NDU4MXww&ixlib=rb-4.1.0&q=80&w=1080' 
  },
];

export const ExerciseListScreen: React.FC<ExerciseListScreenProps> = ({ onBack, onSelectExercise }) => {
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
          <h2 className="text-white" style={{ fontWeight: 600 }}>{t('exercises')}</h2>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full text-white hover:bg-[#1A1A1A]"
          >
            <Filter className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Exercise List */}
      <div className="p-6 space-y-4">
        {exercises.map((exercise, index) => (
          <button
            key={index}
            onClick={onSelectExercise}
            className="w-full group"
          >
            <div className="relative h-36 rounded-3xl overflow-hidden glass hover:border-[#B8F1FF]/30 transition-all">
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={exercise.image}
                  alt={exercise.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
              </div>
              
              {/* Category Badge */}
              <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} z-10`}>
                <div className="glass-light px-3 py-1.5 rounded-full">
                  <p className="text-[#B8F1FF] text-xs" style={{ fontWeight: 600 }}>
                    {exercise.category}
                  </p>
                </div>
              </div>

              {/* Circular Progress */}
              <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} z-10`}>
                <CircularProgress percentage={exercise.progress} size={52} strokeWidth={5} />
              </div>

              {/* Exercise Info */}
              <div className={`absolute inset-0 flex items-center ${isRTL ? 'pr-4' : 'pl-4'} z-10`}>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <h3 className="text-white text-xl mb-2" style={{ fontWeight: 600 }}>
                    {exercise.name}
                  </h3>
                  <div className={`flex gap-4 text-[#A0A0A0] text-sm ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                    <div className="flex items-center gap-1">
                      <span className="text-[#B8F1FF]">{exercise.sets}</span>
                      <span>{t('sets')}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <span className="text-[#76A8FF]">{exercise.reps}</span>
                      <span>{t('reps')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
