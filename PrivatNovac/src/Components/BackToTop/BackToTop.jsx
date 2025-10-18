import { useEffect, useState } from 'react';
import './BackToTop.css';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY || document.documentElement.scrollTop;
      const nearBottom = window.innerHeight + scrolled >= (document.documentElement.scrollHeight - 100);
      setVisible(scrolled > 300 || nearBottom);
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }

  return (
    <button
      className={`back-to-top${visible ? ' visible' : ''}`}
      onClick={handleClick}
      type="button"
      aria-label="Zpět na začátek stránky"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 4l-8 8h5v8h6v-8h5l-8-8z" fill="currentColor" />
      </svg>
    </button>
  );
}
