import { Menu, ShoppingBag, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollDirection } from '../../../hooks/useScrollDirection';
import { useCart } from '../../cart/CartContext';
import { useQuickOrder } from '../../quickOrder/QuickOrderContext';
import { useNavigate } from 'react-router-dom';

interface AnimatedNavbarProps {
  show: boolean;
  onMenuClick: () => void;
}

const AnimatedNavbar = ({ show, onMenuClick }: AnimatedNavbarProps) => {
  const isVisible = useScrollDirection();
  const { state: cartState, dispatch: cartDispatch } = useCart();
  const { dispatch: quickOrderDispatch } = useQuickOrder();
  const itemCount = cartState.items.reduce((sum, item) => sum + item.quantity, 0);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // Если мы уже на главной - просто скроллим вверх
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Если на другой странице - переходим на главную
      navigate('/');
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out safe-top
        ${!show || !isVisible ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="h-16 sm:h-20 bg-black/90 backdrop-blur-sm">
        <div className="mobile-container h-full flex items-center justify-between">
          <button 
            onClick={onMenuClick}
            className="p-2 -ml-2 hover:opacity-70 transition-opacity"
          >
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <button 
            onClick={handleLogoClick}
            className="absolute left-1/2 -translate-x-1/2 hover:opacity-70 transition-opacity"
          >
            <h1 className="text-xl sm:text-3xl font-serif whitespace-nowrap">
              Shamanic Staff
            </h1>
          </button>

          <div className="flex items-center gap-1 sm:gap-2">
            <button 
              onClick={() => quickOrderDispatch({ type: 'TOGGLE_QUICK_ORDER' })}
              className="p-2 hover:opacity-70 transition-opacity"
              title="Быстрый заказ"
            >
              <Zap className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <button 
              onClick={() => cartDispatch({ type: 'TOGGLE_CART' })}
              className="p-2 hover:opacity-70 transition-opacity relative"
            >
              <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#b7985a] text-white text-xs w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AnimatedNavbar;