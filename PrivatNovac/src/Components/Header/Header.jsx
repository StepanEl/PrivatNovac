import './Header.css';
import novac from '../../img/novac2.png';
import novac1 from '../../img/novac1.png';
import { Link } from 'react-router';

import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header>
            <div className="navigation" >
                <Link to="/" className="logo-link">
                    <h1 onClick={() => setMenuOpen(false)}>Privát Nováč</h1>
                </Link>
                <nav>
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
            <div className="hero">
                <img src={novac} alt="Obrázek města" />
                <h1 className="hero-title">Privát Nováč</h1>
            </div>
            {menuOpen && (
                <div className="menu-overlay">
                    <div className="menu-content">
                        <img src={novac1} alt="Obrázek města" className="menu-img" />
                        <nav className="menu-nav">
                            <HashLink smooth to="/#RoomsSection" onClick={() => setMenuOpen(false)}>Pokoje</HashLink>
                            <Link to='/vybaveni-a-pravidla'> Vybavení a pravidla ubytování</Link>
                            <a href="#">Tipy na výlety</a>
                            <a href="#">Ceník</a>
                            <HashLink smooth to="/#arrival" onClick={() => setMenuOpen(false)}>Kudy k nám</HashLink>
                            <a href="#contact" onClick={() => setMenuOpen(false)}>Kontakt</a>
                        </nav>
                        <div className="menu-contact">
                            <p>+420 491 470 085<br />
                                +420 739 292 523<br />
                                hugo.habrman@gmail.com<br />
                                V Zátiší, 549 01 Nové Město nad Metují</p>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};