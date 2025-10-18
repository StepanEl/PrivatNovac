import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // If there's a hash (anchor), try to scroll to it; otherwise scroll to top
    if (location.hash) {
      // small timeout to allow element rendering
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id) || document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'auto', block: 'start' });
        return;
      }
    }

    // Fallback: scroll to top
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname, location.hash]);

  return null;
}
