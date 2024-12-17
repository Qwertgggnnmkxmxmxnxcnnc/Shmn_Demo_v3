import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <Phone className="h-8 w-8 mb-4 mx-auto text-[#b7985a]" />
            <h3 className="text-xl font-semibold mb-2">Телефон</h3>
            <p className="text-gray-600">+7 (901) 22-108-88</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <Mail className="h-8 w-8 mb-4 mx-auto text-amber-700" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">Shamansstaff@gmail.com</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <Send className="h-8 w-8 mb-4 mx-auto text-amber-700" />
            <h3 className="text-xl font-semibold mb-2">Telegram</h3>
            <a 
              href="https://t.me/shamanicstaff" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#b7985a] transition-colors"
            >
              @shamanicstaff
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;