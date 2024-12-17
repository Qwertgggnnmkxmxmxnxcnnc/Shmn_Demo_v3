
import { X } from 'lucide-react';
import { useCart } from './CartContext';
import CartItem from './CartItem';

const CartPanel = () => {
  const { state, dispatch } = useCart();
  const { items, isOpen } = state;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity z-50 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => dispatch({ type: 'TOGGLE_CART' })}
      />

      {/* Cart Panel */}
      <div 
        className={`fixed inset-x-0 bottom-0 h-[90vh] sm:h-[85vh] bg-white z-50 transform transition-transform duration-500 ease-out rounded-t-[2rem] safe-bottom ${
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
            <h2 className="text-xl font-medium text-gray-900">Корзина</h2>
            <button 
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto py-6 px-6">
            {items.length === 0 ? (
              <p className="text-center text-gray-500">Корзина пуста</p>
            ) : (
              <div className="space-y-6">
                {items.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg text-gray-900">Итого:</span>
                <span className="text-2xl font-bold text-gray-900">
                  {total.toLocaleString()} ₽
                </span>
              </div>
              <button className="w-full bg-black text-white py-4 text-lg font-medium hover:bg-black/90 transition-colors rounded-lg">
                Оформить заказ
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPanel;