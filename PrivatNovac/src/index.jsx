import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import BackToTop from './Components/BackToTop/BackToTop';
import { HelmetProvider } from 'react-helmet-async';
import { HomePage } from './pages/HomePage/index.jsx';
import { RulesPage } from './pages/RulesPage/RulesPage';
import './global.css';
import { PricePage } from './pages/PricePage/PricePage.jsx';
import { ShareAreasPage } from './pages/ShareAreasPage/ShareAreasPage.jsx';
import { RoomsPage } from './pages/RoomsPage/RoomsPage.jsx';
import { ContactPage } from './pages/ContactPage/ContactPage.jsx';
import { TipsPage } from './pages/TipsPage/TipsPage.jsx';

createRoot(document.querySelector('#app')).render(
  <HelmetProvider>
    <BrowserRouter basename="/PrivatNovac">
      <ScrollToTop />
  <BackToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vybaveni-a-pravidla" element={<RulesPage />} />
        <Route path="/cenik" element={<PricePage />} />
        <Route path="/spolecne-prostory" element={<ShareAreasPage />} />
        <Route path="/pokoje" element={<RoomsPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/tipy-na-vylety" element={<TipsPage />} />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);
