import React from 'react';

const CartButton = () => {
  const cartItemCount = 0; // This would be managed by your state management solution

  return (
    <button className="text-gray-700 text-sm uppercase tracking-wider font-medium flex items-center gap-2">
      Cart
      {cartItemCount > 0 && (
        <span className="bg-[#b7985a] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {cartItemCount}
        </span>
      )}
    </button>
  );
};

export default CartButton;