import novac1 from '../../img/novac1.webp';
import './Hero.css';

export function Hero() {
    return (

        <div className="hero">
            <img src={novac1} alt="Obrázek města" />
            <h1 className="hero-title">Privát Nováč</h1>
        </div>
    )
}