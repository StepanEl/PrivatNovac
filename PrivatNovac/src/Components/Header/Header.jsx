import './Header.css';
import novac1 from '../../img/novac1.png';
import { Link } from 'react-router';

import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header>
            <div className="navigation">
                <Link to="/" className="logo-link">
                    <h1 onClick={() => setMenuOpen(false)}>Privát Nováč</h1>
                </Link>

                {/* Desktop navigation */}
                <nav className="desktop-nav">
                    <Link to="/pokoje">Pokoje</Link>
                    <Link to="/spolecne-prostory">Společné prostory</Link>
                    <Link to="/vybaveni-a-pravidla">Pravidla ubytování</Link>
                    <a href="#tipy">Tipy na výlety</a>
                    <Link to="/cenik">Ceník</Link>
                    <a href="#contact">Kontakt</a>
                </nav>

                {/* Mobile hamburger */}
                <nav className="mobile-nav">
                    <button
                        className={`hamburger${menuOpen ? ' open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Otevřít menu"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </nav>
            </div>
           
            {/* Mobile menu overlay */}
            {menuOpen && (
                <div className="menu-overlay">
                    <div className="menu-content">
                        <img src={novac1} alt="Obrázek města" className="menu-img" />
                        <nav className="menu-nav">
                            <HashLink smooth to="/#RoomsSection" onClick={() => setMenuOpen(false)}>Pokoje</HashLink>
                            <Link to='/vybaveni-a-pravidla'> Vybavení a pravidla ubytování</Link>
                            <a href="#">Tipy na výlety</a>
                             <Link to='/cenik'>Ceník</Link>
                            <HashLink smooth to="/#arrival" onClick={() => setMenuOpen(false)}>Kudy k nám</HashLink>
                            <a href="#mobile-contact" onClick={() => setMenuOpen(false)}>Kontakt</a>
                        </nav>
                        <div className="menu-contact">
                            <p>V Zátiší, 549 01 Nové Město nad Metují<br />
                            hugo.habrman@gmail.com<br />
                            +420 491 470 085, +420 739 292 523</p>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}