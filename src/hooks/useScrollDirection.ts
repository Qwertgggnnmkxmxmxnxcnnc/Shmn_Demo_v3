import { useState, useEffect } from 'react';

export const useScrollDirection = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY);
      
      // Игнорируем небольшие изменения скролла (меньше 10px)
      if (scrollDelta < 10) return;
      
      // Показываем навбар в следующих случаях:
      // 1. Скролл вверх
      // 2. В начале страницы (первые 100px)
      // 3. В конце страницы
      if (
        currentScrollY < lastScrollY || // скролл вверх
        currentScrollY < 100 || // начало страницы
        currentScrollY + window.innerHeight >= document.documentElement.scrollHeight - 100 // конец страницы
      ) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Скрываем только при скролле вниз и не в начале страницы
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Используем throttle для оптимизации производительности
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY]);

  return isVisible;
};