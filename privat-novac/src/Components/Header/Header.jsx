import './Header.css';
import novac from '../../img/novac2.png';

export const Header = () => {
    return (
        <header>
            <div className="navigation" >
                <h1>Privát Nováč</h1>
                <nav>
                    <button className="hamburger">
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
        </header>
    );
};