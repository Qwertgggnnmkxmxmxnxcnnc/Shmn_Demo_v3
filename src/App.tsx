import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/cart/CartContext';
import { QuickOrderProvider } from './components/quickOrder/QuickOrderContext';
import CartPanel from './components/cart/CartPanel';
import QuickOrderPanel from './components/quickOrder/QuickOrderPanel';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <CartProvider>
      <QuickOrderProvider>
        <Router>
          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
            </Routes>
            <CartPanel />
            <QuickOrderPanel />
          </div>
        </Router>
      </QuickOrderProvider>
    </CartProvider>
  );
}

export default App;