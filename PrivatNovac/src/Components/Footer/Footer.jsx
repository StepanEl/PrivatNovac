import './Footer.css';
import novac from '../../img/novac1.png';
import { Title } from '../title/Title';

export function Footer() {
  return (
    <footer id='contact'>
      <div className="element-na-primary">
        <Title variant="primary">
          <h2 className='small-title'>Kontakt</h2>
        </Title>
        <div className='contact-info'>
          <p>Tel.: +420 491 470 085<br />
            Mobil: +420 739 292 523<br />
            E-mail: <a href="mailto:hugo.habrman@gmail.com">hugo.habrman@gmail.com</a>
          </p>
        </div>
        <div className='adress-info'>
          <p>
            <span className='text-underline'>Fakturační adresa:</span> <br />
            Eva Habrmanová<br />
            Havlíčkova 190<br />
            549 01 Nové Město nad Metují<br />
          </p>
        </div>
        <div className='adress-info'>
          <p>Nejsem plátce DPH<br />
            IČO: 60895284</p>
        </div>
      </div>
      <div className="hero">
        <img src={novac} alt="Obrázek města" />
        <p className='footer-copyright'> © 2025 Eliška Štěpánová. Všechna práva vyhrazena.</p>
      </div>
    </footer>
  )
}