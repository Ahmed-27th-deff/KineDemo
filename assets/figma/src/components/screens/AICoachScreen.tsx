import React, { useState } from 'react';
import { ArrowLeft, ChevronRight, Send, Sparkles } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface AICoachScreenProps {
  onBack: () => void;
}

const initialMessages = [
  { sender: 'ai', text: "Hello! I'm your AI Fitness Coach. How can I help you today?", time: '10:30' },
  { sender: 'user', text: "How's my progress looking?", time: '10:31' },
  { sender: 'ai', text: "You're doing great! You've completed 5 out of 7 workouts this week. Your consistency is improving. Keep up the excellent work!", time: '10:31' },
  { sender: 'user', text: "Any tips for better push-ups?", time: '10:32' },
  { sender: 'ai', text: "Absolutely! Here are key tips:\n\n1. Keep your body straight from head to heels\n2. Engage your core throughout\n3. Lower slowly - take 2-3 seconds\n4. Don't lock your elbows at the top\n5. Breathe: inhale down, exhale up\n\nWould you like me to create a push-up progression plan?", time: '10:32' },
];

export const AICoachScreen: React.FC<AICoachScreenProps> = ({ onBack }) => {
  const { t, isRTL } = useLanguage();
  const [messages, setMessages] = useState(initialMessages);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      const newMessage = {
        sender: 'user',
        text: inputText,
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMessage]);
      setInputText('');

      setTimeout(() => {
        const aiResponse = {
          sender: 'ai',
          text: "Great question! I'm analyzing your workout data and nutrition to provide personalized recommendations. Let me help you with that!",
          time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, aiResponse]);
      }, 1000);
    }
  };

  return (
    <div className="h-screen w-full bg-[#0E0E0E] flex flex-col">
      {/* Header */}
      <div className="glass border-b border-[#2A2A2A] p-6">
        <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <Button
            onClick={onBack}
            variant="ghost"
            size="icon"
            className="text-white hover:bg-[#1A1A1A] rounded-full"
          >
            {isRTL ? <ChevronRight className="w-6 h-6" /> : <ArrowLeft className="w-6 h-6" />}
          </Button>
          <div className="flex-1">
            <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-[#B8F1FF] blur-xl opacity-40 rounded-full" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-[#B8F1FF] to-[#76A8FF] rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-[#0E0E0E]" />
                </div>
              </div>
              <div className={isRTL ? 'text-right' : ''}>
                <h2 className="text-white" style={{ fontWeight: 600 }}>{t('aiCoach')}</h2>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#B8F1FF] rounded-full animate-pulse" />
                  <p className="text-[#A0A0A0] text-xs">Online</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === 'user' ? (isRTL ? 'justify-start' : 'justify-end') : (isRTL ? 'justify-end' : 'justify-start')}`}
          >
            <div className="max-w-[80%] space-y-1">
              <div
                className={`rounded-3xl px-5 py-3 ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-br from-[#B8F1FF] to-[#76A8FF] text-[#0E0E0E] rounded-br-md shadow-lg shadow-[#B8F1FF]/20'
                    : 'glass text-white rounded-bl-md'
                }`}
              >
                {message.sender === 'ai' && (
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-[#B8F1FF]" />
                    <span className="text-xs text-[#B8F1FF]" style={{ fontWeight: 600 }}>AI Coach</span>
                  </div>
                )}
                <p className="whitespace-pre-wrap leading-relaxed">{message.text}</p>
              </div>
              <p
                className={`text-xs text-[#A0A0A0] px-2 ${
                  message.sender === 'user' ? (isRTL ? 'text-left' : 'text-right') : (isRTL ? 'text-right' : 'text-left')
                }`}
              >
                {message.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Suggestions */}
      <div className="px-6 pb-3">
        <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
          <button className="flex-shrink-0 glass-light border border-[#B8F1FF]/20 rounded-full px-4 py-2 text-xs text-[#A0A0A0] hover:text-[#B8F1FF] hover:border-[#B8F1FF]/40 transition-colors">
            Show my progress
          </button>
          <button className="flex-shrink-0 glass-light border border-[#B8F1FF]/20 rounded-full px-4 py-2 text-xs text-[#A0A0A0] hover:text-[#B8F1FF] hover:border-[#B8F1FF]/40 transition-colors">
            Meal suggestions
          </button>
          <button className="flex-shrink-0 glass-light border border-[#B8F1FF]/20 rounded-full px-4 py-2 text-xs text-[#A0A0A0] hover:text-[#B8F1FF] hover:border-[#B8F1FF]/40 transition-colors">
            Modify workout
          </button>
        </div>
      </div>

      {/* Input Area */}
      <div className="glass border-t border-[#2A2A2A] p-4">
        <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 h-12 bg-[#1A1A1A] border-[#2A2A2A] rounded-full px-6 text-white placeholder:text-[#A0A0A0] focus:border-[#B8F1FF] focus:ring-[#B8F1FF]/20"
          />
          <Button
            onClick={handleSend}
            size="icon"
            className="h-12 w-12 rounded-full bg-gradient-to-br from-[#B8F1FF] to-[#76A8FF] hover:opacity-90 shadow-lg shadow-[#B8F1FF]/30"
          >
            <Send className={`w-5 h-5 text-[#0E0E0E] ${isRTL ? 'rotate-180' : ''}`} />
          </Button>
        </div>
      </div>

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
