import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-stone-900/50 p-8 rounded-2xl space-y-8">
      <h3 className="text-xl font-semibold text-white mb-8">Контактная информация</h3>
      
      <div className="space-y-6">
        <a href="tel:+15551234567" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
          <div className="p-3 rounded-lg bg-black/30 border border-white/10">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Телефон</p>
            <p className="text-base">+7 (999) 999-99-99</p>
          </div>
        </a>

        <a href="mailto:info@shamanicstaff.com" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
          <div className="p-3 rounded-lg bg-black/30 border border-white/10">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-base">info@shamanicstaff.com</p>
          </div>
        </a>

        <a 
          href="https://t.me/shamanicstaff" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors"
        >
          <div className="p-3 rounded-lg bg-black/30 border border-white/10">
            <Send className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Telegram</p>
            <p className="text-base">@shamanicstaff</p>
          </div>
        </a>

        <div className="flex items-center gap-4 text-gray-400">
          <div className="p-3 rounded-lg bg-black/30 border border-white/10">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Адрес</p>
            <p className="text-base">г. Москва, ул. Примерная, д. 1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;