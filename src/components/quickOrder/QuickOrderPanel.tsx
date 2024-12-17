import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { useQuickOrder } from './QuickOrderContext';

const QuickOrderPanel = () => {
  const { state, dispatch } = useQuickOrder();
  const { isOpen } = state;

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity z-50 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => dispatch({ type: 'TOGGLE_QUICK_ORDER' })}
      />

      {/* Quick Order Panel */}
      <div 
        className={`fixed inset-x-0 bottom-0 h-[85vh] bg-white z-50 transform transition-transform duration-500 ease-out rounded-t-[2rem] ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Pull indicator */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2">
          <div className="w-12 h-1 bg-gray-200 rounded-full" />
        </div>

        <div className="h-full flex flex-col pt-8">
          {/* Header */}
          <div className="px-6 pb-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-xl font-medium text-gray-900">Быстрый заказ</h2>
            <button 
              onClick={() => dispatch({ type: 'TOGGLE_QUICK_ORDER' })}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Form */}
          <div className="flex-1 overflow-y-auto p-6">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
                  placeholder="Как к вам обращаться"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telegram
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">@</span>
                  <input
                    type="text"
                    className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
                    placeholder="Ваш username"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 resize-none"
                  placeholder="Опишите, что вы хотите заказать"
                />
              </div>

              {/* Promo Code Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Промо-код
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 uppercase"
                    placeholder="Введите промо-код"
                  />
                  <Sparkles className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Если у вас есть промо-код, введите его здесь
                </p>
              </div>
            </form>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 p-6">
            <button className="w-full bg-black text-white py-4 text-lg font-medium hover:bg-black/90 transition-colors rounded-lg">
              Отправить заявку
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickOrderPanel;