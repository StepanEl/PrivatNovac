import './Footer.css';
import novac from '../../img/novac1.png';
import { Title } from '../title/Title';

export function Footer () {
  return (
    <footer>    
        <div className="element-na-primary">
          <Title variant="primary">
            <h2 className='small-title'>Kontakt</h2>
          </Title>
          <div className='contact-info'>
            <p>Tel.: +420 491 470 085</p>
            <p>Mobil: +420 739 292 523</p>
            <p>
              E-mail: <a href="mailto:hugo.habrman@gmail.com">hugo.habrman@gmail.com</a>
            </p>
          </div>
          <div className='adress-info'>
            <p className='text-underline'>Fakturační adresa:</p>
            <p>Eva Habrmanová</p>
            <p>Havlíčkova 190</p>
            <p>549 01 Nové Město nad Metují</p>
          </div>
          <div className='adress-info'>
            <p>Nejsem plátce DPH</p>
            <p>IČO: 60895284</p>
          </div>
        </div>
        <div className="hero">
          <img src={novac} alt="Obrázek města" />
          <p className='footer-copyright'> © 2025 Eliška Štěpánová. Všechna práva vyhrazena.</p>
        </div>
      </footer>
  )
}