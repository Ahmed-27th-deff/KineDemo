import React, { useState, useEffect } from 'react';
import { X, Pause, SkipForward, Camera } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Button } from '../ui/button';

interface ExerciseTrackingScreenProps {
  onStop: () => void;
}

export const ExerciseTrackingScreen: React.FC<ExerciseTrackingScreenProps> = ({ onStop }) => {
  const { t, isRTL } = useLanguage();
  const [currentSet, setCurrentSet] = useState(1);
  const [currentRep, setCurrentRep] = useState(0);
  const [isResting, setIsResting] = useState(false);
  const [restTimer, setRestTimer] = useState(60);
  const [feedback, setFeedback] = useState('Great form! Keep going!');

  const totalSets = 3;
  const totalReps = 15;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isResting && restTimer > 0) {
      interval = setInterval(() => {
        setRestTimer((prev) => prev - 1);
      }, 1000);
    } else if (isResting && restTimer === 0) {
      setIsResting(false);
      setRestTimer(60);
      if (currentSet < totalSets) {
        setCurrentSet(currentSet + 1);
        setCurrentRep(0);
      }
    }
    return () => clearInterval(interval);
  }, [isResting, restTimer, currentSet]);

  const handleRepComplete = () => {
    if (currentRep < totalReps) {
      setCurrentRep(currentRep + 1);
      
      // Simulate AI feedback
      const feedbacks = [
        'Perfect! Keep it up!',
        'Great posture!',
        'Maintain that form!',
        'Excellent work!',
        'You\'re doing amazing!',
      ];
      setFeedback(feedbacks[Math.floor(Math.random() * feedbacks.length)]);
    }
    
    if (currentRep === totalReps - 1 && currentSet < totalSets) {
      setIsResting(true);
    }
  };

  return (
    <div className="h-screen w-full bg-black relative overflow-hidden">
      {/* Camera View Simulation */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <Camera className="w-32 h-32 text-white/20" />
        </div>
        
        {/* Grid Overlay for Posture Tracking */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="border border-white/10" />
          ))}
        </div>
      </div>

      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/60 to-transparent z-10">
        <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div>
            <h2 className="text-white mb-1">Push Ups</h2>
            <p className="text-white/60">Set {currentSet} of {totalSets}</p>
          </div>
          <Button
            onClick={onStop}
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 rounded-full"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Center - Rep Counter */}
      <div className="absolute inset-0 flex items-center justify-center">
        {isResting ? (
          <div className="text-center animate-in fade-in zoom-in duration-500">
            <p className="text-white/60 mb-4">Rest Time</p>
            <div className="w-32 h-32 bg-[#FF7A00] rounded-full flex items-center justify-center mb-4">
              <span className="text-white" style={{ fontSize: '48px' }}>{restTimer}</span>
            </div>
            <p className="text-white">Get ready for next set</p>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-white/60 mb-4">{t('reps')}</p>
            <button
              onClick={handleRepComplete}
              className="w-48 h-48 bg-[#0066FF] rounded-full flex items-center justify-center mb-6 hover:bg-[#0052CC] transition-colors active:scale-95"
            >
              <span className="text-white" style={{ fontSize: '72px' }}>{currentRep}</span>
            </button>
            <p className="text-white/60">of {totalReps}</p>
          </div>
        )}
      </div>

      {/* AI Feedback */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="bg-[#00C853] text-white px-6 py-3 rounded-full shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
          <p>{feedback}</p>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
        <div className="flex justify-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            className="w-16 h-16 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full"
          >
            <Pause className="w-8 h-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-16 h-16 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full"
            onClick={() => {
              if (currentSet < totalSets) {
                setCurrentSet(currentSet + 1);
                setCurrentRep(0);
                setIsResting(false);
              }
            }}
          >
            <SkipForward className="w-8 h-8" />
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#0066FF] to-[#00C853] transition-all duration-300"
            style={{ width: `${((currentSet - 1) * totalReps + currentRep) / (totalSets * totalReps) * 100}%` }}
          />
        </div>
      </div>

      {/* Body Tracking Points (Simulated) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-64 h-96">
          {/* Head */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#00C853] rounded-full animate-pulse" />
          {/* Shoulders */}
          <div className="absolute top-12 left-8 w-4 h-4 bg-[#00C853] rounded-full animate-pulse" />
          <div className="absolute top-12 right-8 w-4 h-4 bg-[#00C853] rounded-full animate-pulse" />
          {/* Elbows */}
          <div className="absolute top-24 left-4 w-4 h-4 bg-[#00C853] rounded-full animate-pulse" />
          <div className="absolute top-24 right-4 w-4 h-4 bg-[#00C853] rounded-full animate-pulse" />
          {/* Hands */}
          <div className="absolute top-32 left-0 w-4 h-4 bg-[#00C853] rounded-full animate-pulse" />
          <div className="absolute top-32 right-0 w-4 h-4 bg-[#00C853] rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};
