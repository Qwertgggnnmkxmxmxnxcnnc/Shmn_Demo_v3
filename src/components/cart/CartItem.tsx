import React from 'react';
import { Minus, Plus, X } from 'lucide-react';
import { useCart } from './CartContext';
import { Product } from '../../pages/Products/types';

interface CartItemProps {
  item: Product & { quantity: number };
}

const CartItem = ({ item }: CartItemProps) => {
  const { dispatch } = useCart();

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity < 1) {
      dispatch({ type: 'REMOVE_ITEM', payload: item.id });
    } else {
      dispatch({
        type: 'UPDATE_QUANTITY',
        payload: { id: item.id, quantity: newQuantity },
      });
    }
  };

  return (
    <div className="flex gap-4">
      {/* Image */}
      <div className="w-24 h-24 flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-gray-900 font-medium">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.category}</p>
          </div>
          <button
            onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
            className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => updateQuantity(item.quantity - 1)}
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="text-gray-900 min-w-[20px] text-center">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.quantity + 1)}
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <span className="text-gray-900 font-medium">
            {(item.price * item.quantity).toLocaleString()} ₽
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;