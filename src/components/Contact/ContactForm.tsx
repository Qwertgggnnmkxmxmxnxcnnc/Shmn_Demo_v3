import React from 'react';
import { ChevronDown } from 'lucide-react';

const ContactForm = () => {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Как к Вам обращаться"
            className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 transition-all text-white placeholder-gray-400"
          />
        </div>

        {/* Phone */}
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <img 
              src="https://flagcdn.com/w20/ru.png" 
              alt="RU" 
              className="w-5 h-auto"
            />
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="tel"
            placeholder="+7 (999) 999-99-99"
            className="w-full pl-16 pr-4 py-3 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 transition-all text-white placeholder-gray-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Напишите Ваш E-mail"
            className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 transition-all text-white placeholder-gray-400"
          />
        </div>

        {/* Telegram */}
        <div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">@</span>
            <input
              type="text"
              placeholder="Ваш Telegram"
              className="w-full pl-8 pr-4 py-3 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 transition-all text-white placeholder-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Contact Method */}
      <div>
        <select className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 transition-all text-white appearance-none">
          <option value="" disabled selected className="text-gray-400">Удобный способ связи</option>
          <option value="whatsapp" className="text-black">WhatsApp</option>
          <option value="telegram" className="text-black">Telegram</option>
          <option value="phone" className="text-black">Телефон</option>
          <option value="email" className="text-black">Email</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <textarea
          rows={4}
          placeholder="Какой у Вас вопрос?"
          className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 transition-all text-white placeholder-gray-400 resize-none"
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full bg-[#556B2F] text-white py-4 rounded-lg hover:bg-[#4c612a] transition-colors text-lg font-medium"
        >
          Отправить
        </button>
        <p className="text-xs text-gray-500 text-center mt-4">
          Нажимая на 'Отправить', вы даете согласие на обработку персональных данных<br />
          и соглашаетесь с политикой конфиденциальности.<br />
          <a href="#" className="text-blue-600 hover:underline">
            Ознакомиться с правилами политики конфиденциальности нашего сайта
          </a>.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;