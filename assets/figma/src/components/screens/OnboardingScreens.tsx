import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Sparkles, Activity, Apple, TrendingUp, MessageCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface OnboardingScreensProps {
  onComplete: () => void;
}

export const OnboardingScreens: React.FC<OnboardingScreensProps> = ({ onComplete }) => {
  const { t, isRTL } = useLanguage();
  const [step, setStep] = useState(0);

  const onboardingSlides = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: isRTL ? 'مدرب الذكاء الاصطناعي الشخصي' : 'Your Personal AI Coach',
      description: isRTL 
        ? 'احصل على خطط تمرين وإرشادات مخصصة مدعومة بالذكاء الاصطناعي المتقدم'
        : 'Get personalized workout plans and guidance powered by advanced AI technology',
      image: 'https://images.unsplash.com/photo-1614049026175-d2acb96c6a81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwQUklMjB0ZWNobm9sb2d5JTIwaG9sb2dyYW0lMjBmdXR1cmlzdGljfGVufDF8fHx8MTc3MjI4ODI2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-[#B8F1FF]/20 to-[#76A8FF]/20'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: isRTL ? 'تتبع التمارين بالكاميرا' : 'AI Camera Tracking',
      description: isRTL
        ? 'تتبع تمارينك وحركاتك في الوقت الفعلي باستخدام تقنية الكاميرا الذكية'
        : 'Track your exercises and movements in real-time with intelligent camera technology',
      image: 'https://images.unsplash.com/photo-1644492097455-d5f39f458fcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjB3b3Jrb3V0JTIwY29hY2hpbmclMjBtb2JpbGV8ZW58MXx8fHwxNzcyMjg4MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-[#76A8FF]/20 to-[#B8F1FF]/20'
    },
    {
      icon: <Apple className="w-8 h-8" />,
      title: isRTL ? 'خطط التغذية الذكية' : 'Smart Nutrition Plans',
      description: isRTL
        ? 'احصل على خطط وجبات مخصصة تتناسب مع أهدافك وتفضيلاتك الغذائية'
        : 'Get customized meal plans tailored to your goals and dietary preferences',
      image: 'https://images.unsplash.com/photo-1641301547846-2cf73f58fdca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXRyaXRpb24lMjBtZWFsJTIwcGxhbm5pbmclMjBoZWFsdGh5JTIwZm9vZHxlbnwxfHx8fDE3NzIyODgyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-[#B8F1FF]/20 to-[#76A8FF]/20'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: isRTL ? 'تتبع التقدم والتحليلات' : 'Progress & Analytics',
      description: isRTL
        ? 'راقب تقدمك مع رؤى وتحليلات تفصيلية لتحسين أدائك'
        : 'Monitor your progress with detailed insights and analytics to optimize performance',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwcHJvZ3Jlc3MlMjB0cmFja2luZyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzIyODgyNjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-[#76A8FF]/20 to-[#B8F1FF]/20'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: isRTL ? 'دردشة مع مدربك الذكي' : 'Chat with Your AI Coach',
      description: isRTL
        ? 'احصل على إجابات فورية ونصائح من مدربك الذكي المتاح على مدار الساعة'
        : 'Get instant answers and advice from your AI coach available 24/7',
      image: 'https://images.unsplash.com/photo-1614049026175-d2acb96c6a81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBmaXRuZXNzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzIyODgyNjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-[#B8F1FF]/20 to-[#76A8FF]/20'
    }
  ];

  const currentSlide = onboardingSlides[step];

  const nextStep = () => {
    if (step < onboardingSlides.length - 1) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const skipToEnd = () => {
    onComplete();
  };

  return (
    <div className="min-h-screen w-full bg-[#0E0E0E] flex flex-col relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#76A8FF]/5 via-transparent to-[#B8F1FF]/5 pointer-events-none" />
      
      {/* Skip button */}
      <div className="absolute top-6 right-6 z-10">
        <Button
          onClick={skipToEnd}
          variant="ghost"
          className="text-white/60 hover:text-white/90 hover:bg-white/5"
        >
          {isRTL ? 'تخطي' : 'Skip'}
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-12 relative z-10">
        <div className="w-full max-w-md mx-auto space-y-8">
          {/* Hero Image with glassmorphic frame */}
          <div className="relative animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="relative rounded-3xl overflow-hidden">
              {/* Glassmorphic border effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/5 rounded-3xl p-[2px]">
                <div className="w-full h-full bg-[#1A1A1A]/80 backdrop-blur-xl rounded-3xl" />
              </div>
              
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <ImageWithFallback
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${currentSlide.gradient}`} />
              </div>
            </div>

            {/* Floating icon */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#B8F1FF] to-[#76A8FF] flex items-center justify-center shadow-lg shadow-[#76A8FF]/30">
                <div className="text-[#0E0E0E]">
                  {currentSlide.icon}
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="text-center space-y-4 pt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            <h1 className="text-white text-3xl tracking-tight">
              {currentSlide.title}
            </h1>
            <p className="text-white/60 text-base leading-relaxed px-4">
              {currentSlide.description}
            </p>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 pt-4">
            {onboardingSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setStep(index)}
                className="transition-all duration-300"
              >
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === step
                      ? 'w-8 bg-gradient-to-r from-[#B8F1FF] to-[#76A8FF]'
                      : 'w-2 bg-white/20 hover:bg-white/30'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className={`p-6 flex gap-4 relative z-10 ${isRTL ? 'flex-row-reverse' : ''}`}>
        {step > 0 && (
          <Button
            onClick={prevStep}
            variant="outline"
            className="h-14 w-14 rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-xl text-white"
          >
            {isRTL ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </Button>
        )}
        <Button
          onClick={nextStep}
          className="flex-1 h-14 bg-gradient-to-r from-[#B8F1FF] to-[#76A8FF] hover:opacity-90 text-[#0E0E0E] rounded-2xl shadow-lg shadow-[#76A8FF]/20 transition-all duration-300"
        >
          <span className="font-medium">
            {step === onboardingSlides.length - 1 
              ? (isRTL ? 'ابدأ الآن' : 'Get Started')
              : (isRTL ? 'التالي' : 'Next')
            }
          </span>
        </Button>
      </div>
    </div>
  );
};