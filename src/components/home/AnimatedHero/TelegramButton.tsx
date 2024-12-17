import React from 'react';
import { Send } from 'lucide-react';

interface TelegramButtonProps {
  show: boolean;
}

const TelegramButton = ({ show }: TelegramButtonProps) => {
  return (
    <div className={`text-center mt-8 space-y-4 transition-all duration-1000 ${
      show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <a
        href="https://t.me/shamanicstaff"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 bg-black/90 backdrop-blur-sm hover:border-white/40 transition-colors group"
      >
        <Send className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 telegram-button-icon" />
        <span className="text-lg text-white">Присоединяйтесь к нам в Telegram</span>
      </a>
      
      <p className="text-gray-900 text-sm bg-transparent">
        Все самое лучшее у нас в Telegram
      </p>
    </div>
  );
};

export default TelegramButton;