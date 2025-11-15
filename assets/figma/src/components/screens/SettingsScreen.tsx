import React from 'react';
import { ArrowLeft, ChevronRight, Globe, User, Target, Bell, Camera, Volume2, Shield, LogOut, Users, UserPlus, Activity } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { Separator } from '../ui/separator';

interface SettingsScreenProps {
  onBack: () => void;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({ onBack }) => {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [notifications, setNotifications] = React.useState(true);
  const [cameraPermission, setCameraPermission] = React.useState(true);
  const [aiVoice, setAiVoice] = React.useState(false);

  const settingsSections = [
    {
      title: 'Account',
      items: [
        {
          icon: User,
          label: t('editProfile'),
          subtitle: 'Update your personal information',
          action: 'edit-profile',
        },
        {
          icon: Target,
          label: t('changeGoal'),
          subtitle: 'Modify your fitness goals',
          action: 'change-goal',
        },
      ],
    },
    {
      title: 'Preferences',
      items: [
        {
          icon: Globe,
          label: 'Language',
          subtitle: language === 'en' ? 'English' : 'العربية',
          action: 'language',
          toggle: true,
        },
        {
          icon: Bell,
          label: t('notifications'),
          subtitle: 'Workout and meal reminders',
          toggle: true,
          value: notifications,
          onChange: setNotifications,
        },
        {
          icon: Camera,
          label: 'Camera Permissions',
          subtitle: 'Enable AI posture tracking',
          toggle: true,
          value: cameraPermission,
          onChange: setCameraPermission,
        },
        {
          icon: Volume2,
          label: 'AI Voice Guidance',
          subtitle: 'Voice feedback during workouts',
          toggle: true,
          value: aiVoice,
          onChange: setAiVoice,
        },
      ],
    },
    {
      title: 'Legal',
      items: [
        {
          icon: Shield,
          label: t('privacy'),
          subtitle: 'Privacy policy and terms',
          action: 'privacy',
        },
      ],
    },
  ];

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <div className="min-h-screen w-full bg-[#0E0E0E] pb-20">
      {/* Header with Profile Hero */}
      <div className="relative pb-16">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] to-[#0E0E0E]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8F1FF] opacity-5 blur-[120px] rounded-full" />
        
        <div className="relative z-10">
          {/* Header Bar */}
          <div className={`flex items-center gap-4 p-6 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Button
              onClick={onBack}
              variant="ghost"
              size="icon"
              className="glass-light hover:bg-white/20 text-white rounded-full"
            >
              {isRTL ? <ChevronRight className="w-6 h-6" /> : <ArrowLeft className="w-6 h-6" />}
            </Button>
            <h2 className="text-white" style={{ fontWeight: 600 }}>{t('settings')}</h2>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col items-center">
            {/* Avatar with glow */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-[#B8F1FF] blur-2xl opacity-30 rounded-full" />
              <div className="relative w-28 h-28 glass-light rounded-full flex items-center justify-center border-2 border-[#B8F1FF]/30">
                <User className="w-14 h-14 text-[#B8F1FF]" />
              </div>
            </div>

            <h2 className="text-white text-2xl mb-2" style={{ fontWeight: 700 }}>Ahmad Ali</h2>
            <p className="text-[#A0A0A0] mb-6">Premium Member</p>

            {/* Stats */}
            <div className="flex gap-8 mb-6">
              <div className="text-center">
                <p className="text-white text-xl mb-1" style={{ fontWeight: 700 }}>245</p>
                <p className="text-[#A0A0A0] text-xs">Friends</p>
              </div>
              <div className="w-px h-12 bg-[#2A2A2A]" />
              <div className="text-center">
                <p className="text-white text-xl mb-1" style={{ fontWeight: 700 }}>189</p>
                <p className="text-[#A0A0A0] text-xs">Following</p>
              </div>
              <div className="w-px h-12 bg-[#2A2A2A]" />
              <div className="text-center">
                <p className="text-white text-xl mb-1" style={{ fontWeight: 700 }}>42</p>
                <p className="text-[#A0A0A0] text-xs">Exercises</p>
              </div>
            </div>

            {/* Edit Profile Button */}
            <Button className="glass-light border-[#B8F1FF]/30 text-[#B8F1FF] hover:bg-[#B8F1FF]/10 rounded-full px-8 h-12">
              Edit Profile
            </Button>
          </div>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="px-6 space-y-6">
        {settingsSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="glass rounded-3xl overflow-hidden">
            <div className="px-5 py-3 bg-[#1A1A1A]/50">
              <h4 className="text-[#A0A0A0] text-xs uppercase tracking-wider" style={{ fontWeight: 600 }}>
                {section.title}
              </h4>
            </div>
            <div>
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <button
                    onClick={item.action === 'language' ? handleLanguageToggle : undefined}
                    className={`w-full p-5 hover:bg-[#1A1A1A]/50 transition-colors ${isRTL ? 'text-right' : 'text-left'}`}
                  >
                    <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className="w-11 h-11 bg-[#B8F1FF]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-[#B8F1FF]" />
                      </div>
                      <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                        <p className="text-white mb-1" style={{ fontWeight: 500 }}>{item.label}</p>
                        <p className="text-[#A0A0A0] text-xs">{item.subtitle}</p>
                      </div>
                      {item.toggle ? (
                        <Switch
                          checked={item.action === 'language' ? language === 'ar' : item.value}
                          onCheckedChange={
                            item.action === 'language'
                              ? handleLanguageToggle
                              : item.onChange
                          }
                          className="data-[state=checked]:bg-[#B8F1FF]"
                        />
                      ) : (
                        isRTL ? (
                          <ChevronRight className="w-5 h-5 text-[#A0A0A0] rotate-180" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-[#A0A0A0]" />
                        )
                      )}
                    </div>
                  </button>
                  {itemIndex < section.items.length - 1 && (
                    <Separator className="mx-5 bg-[#2A2A2A]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Logout Button */}
        <button className="w-full glass rounded-3xl p-5 hover:bg-[#FF4D4D]/10 transition-colors group border border-[#FF4D4D]/20">
          <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="w-11 h-11 bg-[#FF4D4D]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#FF4D4D]/20">
              <LogOut className="w-5 h-5 text-[#FF4D4D]" />
            </div>
            <p className="text-[#FF4D4D] flex-1" style={{ fontWeight: 500 }}>{t('logout')}</p>
            {isRTL ? (
              <ChevronRight className="w-5 h-5 text-[#FF4D4D]/60 rotate-180" />
            ) : (
              <ChevronRight className="w-5 h-5 text-[#FF4D4D]/60" />
            )}
          </div>
        </button>

        {/* App Version */}
        <div className="text-center py-6">
          <p className="text-[#A0A0A0] text-xs">
            AI Fitness Coach v1.0.0
          </p>
          <p className="text-[#2A2A2A] text-xs mt-1">
            Made with 💙 for fitness enthusiasts
          </p>
        </div>
      </div>
    </div>
  );
};
