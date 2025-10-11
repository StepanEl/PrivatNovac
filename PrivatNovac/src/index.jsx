import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router'; 
import { HomePage } from './pages/HomePage/index.jsx';
import { RulesPage } from './pages/RulesPage/RulesPage'; 
import './global.css';
import { PricePage } from './pages/PricePage/PricePage.jsx';

createRoot(document.querySelector('#app')).render(
  <BrowserRouter basename="/PrivatNovac">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/vybaveni-a-pravidla" element={<RulesPage />} />
    <Route path="/cenik" element={<PricePage />} />
    </Routes>
  </BrowserRouter>
);
