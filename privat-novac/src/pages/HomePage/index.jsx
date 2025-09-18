import { Button } from '../../Components/Button/Button';
import { Gallery } from '../../Components/Gallery/Gallery';
import { Header } from '../../Components/Header/Header';
import { PriceForm } from '../../Components/PriceForm/PriceForm';
import { RoomsSection } from '../../Components/RoomSection/RoomSection';
import { Title } from '../../Components/title/Title';
import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <div className="element-na-secondary">
          <Title> Náš penzion vás srdečně zve<br />
            do Nového Města nad Metují.
          </Title>
        </div>

        <Gallery slides={[
          { image: '/img/info/1.jpg', text: 'Nabízíme útulné podkrovní pokoje s vlastním sociálním zařízením, masážním sprchovým boxem a společnou kuchyňkou.', icon: '/img/icons/Wifi.svg' },
          { image: '/img/info/2.jpg', text: 'Parkování aut je na oploceném pozemku v těsné blízkosti ubytování.', icon: '/img/icons/Vector.svg' },
          { image: '/img/info/3.jpg', text: 'Pro cyklisty je k dispozici zastřešené na noc uzamykatelné parkování s možností nabíjení elektrokol.', icon: '/img/icons/bicycle.svg' },
          { image: '/img/info/4.jpg', text: 'Na zahradě si můžete dopřát odpočinek u bazénu s lehátky, posedět v dřevěném altánu nebo si vychutnat grilování u venkovního krbu.', icon: '/img/icons/swimming.svg' },
          { image: '/img/info/5.jpg', text: 'Po dohodě si můžete večer užít jedinečný zážitek - promítání filmů majitele ubytování, režiséra Hugo Habrmana v útulném domácím letním kině.', icon: '/img/icons/video-camera.svg' }
        ]} />

        <RoomsSection />

        <div className="element-na-secondary">
          <Title>
            <h2 className='small-title'>Tipy na výlety</h2>
            <p>Okolí se vybízí k turistice, výletech na kolech, windserfingu na Rozkoši nebo lyžování v nedalekých Orlických horách.</p>
            <Button text="Prozkoumat okolí" className="explore-btn" />
          </Title>
        </div>

        <div className="element-na-primary price-container">
          <h2 className='small-title'>Cena za ubytování</h2>
          <PriceForm />
        </div>


      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};
