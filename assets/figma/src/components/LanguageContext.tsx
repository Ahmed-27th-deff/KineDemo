import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    appName: 'AI Fitness Coach',
    login: 'Login',
    signUp: 'Sign Up',
    email: 'Email',
    phone: 'Phone',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    forgotPassword: 'Forgot your password?',
    createAccount: 'Create New Account',
    fullName: 'Full Name',
    male: 'Male',
    female: 'Female',
    gender: 'Gender',
    height: 'Height',
    weight: 'Weight',
    selectGoal: 'Select Your Goal',
    loseFat: 'Lose Fat',
    gainWeight: 'Gain Weight',
    buildMuscle: 'Build Muscle',
    improveFitness: 'Improve Fitness',
    activityLevel: 'Activity Level',
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
    equipment: 'Available Equipment',
    home: 'Home',
    gym: 'Gym',
    startPlan: 'Start My Plan',
    hello: 'Hello',
    todayExercises: "Today's Exercises",
    todayMeals: "Today's Meals",
    exercises: 'Exercises',
    nutrition: 'Nutrition',
    progress: 'Progress',
    settings: 'Settings',
    aiCoach: 'AI Coach',
    sets: 'Sets',
    reps: 'Reps',
    rest: 'Rest',
    startExercise: 'Start Exercise',
    breakfast: 'Breakfast',
    lunch: 'Lunch',
    dinner: 'Dinner',
    snack: 'Snack',
    calories: 'Calories',
    protein: 'Protein',
    carbs: 'Carbs',
    viewRecipe: 'View Recipe',
    weightChart: 'Weight Progress',
    muscleGain: 'Muscle Gain',
    daysCompleted: 'Days Completed',
    achievements: 'Achievements',
    editProfile: 'Edit Profile',
    changeGoal: 'Change Goal',
    notifications: 'Notifications',
    privacy: 'Privacy & Terms',
    logout: 'Logout',
    next: 'Next',
    skip: 'Skip',
    stop: 'Stop',
    age: 'Age',
    cm: 'cm',
    kg: 'kg',
  },
  ar: {
    appName: 'مدرب اللياقة الذكي',
    login: 'تسجيل الدخول',
    signUp: 'إنشاء حساب',
    email: 'البريد الإلكتروني',
    phone: 'رقم الهاتف',
    password: 'كلمة المرور',
    confirmPassword: 'تأكيد كلمة المرور',
    forgotPassword: 'نسيت كلمة المرور؟',
    createAccount: 'إنشاء حساب جديد',
    fullName: 'الاسم الكامل',
    male: 'ذكر',
    female: 'أنثى',
    gender: 'الجنس',
    height: 'الطول',
    weight: 'الوزن',
    selectGoal: 'اختر هدفك',
    loseFat: 'خسارة الدهون',
    gainWeight: 'زيادة الوزن',
    buildMuscle: 'بناء العضلات',
    improveFitness: 'تحسين اللياقة',
    activityLevel: 'مستوى النشاط',
    beginner: 'مبتدئ',
    intermediate: 'متوسط',
    advanced: 'متقدم',
    equipment: 'المعدات المتاحة',
    home: 'منزل',
    gym: 'صالة رياضية',
    startPlan: 'ابدأ خطتي',
    hello: 'مرحباً',
    todayExercises: 'تمارين اليوم',
    todayMeals: 'وجبات اليوم',
    exercises: 'التمارين',
    nutrition: 'التغذية',
    progress: 'التقدم',
    settings: 'الإعدادات',
    aiCoach: 'المدرب الذكي',
    sets: 'مجموعات',
    reps: 'تكرارات',
    rest: 'راحة',
    startExercise: 'ابدأ التمرين',
    breakfast: 'إفطار',
    lunch: 'غداء',
    dinner: 'عشاء',
    snack: 'وجبة خفيفة',
    calories: 'سعرات',
    protein: 'بروتين',
    carbs: 'كربوهيدرات',
    viewRecipe: 'عرض الوصفة',
    weightChart: 'تقدم الوزن',
    muscleGain: 'اكتساب العضلات',
    daysCompleted: 'أيام مكتملة',
    achievements: 'الإنجازات',
    editProfile: 'تعديل الملف',
    changeGoal: 'تغيير الهدف',
    notifications: 'الإشعارات',
    privacy: 'الخصوصية والشروط',
    logout: 'تسجيل الخروج',
    next: 'التالي',
    skip: 'تخطي',
    stop: 'إيقاف',
    age: 'العمر',
    cm: 'سم',
    kg: 'كجم',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const isRTL = language === 'ar';

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL, t }}>
      <div dir={isRTL ? 'rtl' : 'ltr'} className="h-full">
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
