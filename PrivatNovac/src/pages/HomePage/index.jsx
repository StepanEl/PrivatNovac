import { Link } from 'react-router';
import { Button } from '../../Components/Button/Button';
import { Footer } from '../../Components/Footer/Footer';
import { Gallery } from '../../Components/Gallery/Gallery';
import { Header } from '../../Components/Header/Header';
import { PriceForm } from '../../Components/PriceForm/PriceForm';
import { RoomsSection } from '../../Components/RoomSection/RoomSection';
import { Title } from '../../Components/title/Title';

import './style.css';
import { Hero } from '../../Components/Hero/Hero';

export function HomePage() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <main>
        <div className="element-na-secondary">
          <Title variant="secondary-intro"> Náš penzion vás srdečně zve<br />
            k ubytování do Nového Města nad Metují.
          </Title>
        </div>

        <div className="desktop-homePage element-na-secondary">

          <section className="info-section">
            <div className="info-text right">
              <p>Nabízíme útulné podkrovní pokoje s vlastním sociálním zařízením, masážním sprchovým boxem a společnou kuchyňkou.</p>
              <img src="img/icons/Wifi.svg" alt="Ikona WiFi" className="info-icon" />
            </div>
            <img src="img/info/1.jpg" alt="Pokoj" className="info-image" />
          </section>

          <section className="info-section">
            <img src="img/info/2.jpg" alt="Parkoviště" className="info-image" />
            <div className="info-text left">
              <p>Parkování aut je na oploceném pozemku v těsné blízkosti ubytování.</p>
              <img src="img/icons/Vector.svg" alt="Ikona parkoviště" className="info-icon" />
            </div>
          </section>

          <section className="info-section">
            <div className="info-text right">
              <p>Pro cyklisty je k dispozici zastřešené na noc uzamykatelné parkování s možností nabíjení elektrokol.</p>
              <img src="img/icons/bicycle.svg" alt="Ikona kola" className="info-icon" />
            </div>
            <img src="img/info/3.jpg" alt="Cyklisté" className="info-image" />
          </section>

          <section className="info-section">
            <img src="img/info/4.jpg" alt="Bazén" className="info-image" />
            <div className="info-text left">
              <p>Na zahradě si můžete dopřát odpočinek u bazénu s lehátky, posedět v dřevěném altánu nebo si vychutnat grilování u venkovního krbu.</p>
              <img src="img/icons/swimming.svg" alt="Ikona bazénu" className="info-icon" />
            </div>
          </section>

          <section className="info-section">
            <div className="info-text right">
              <p>Po dohodě si můžete večer užít jedinečný zážitek - promítání filmů majitele ubytování, režiséra Hugo Habrmana v útulném domácím letním kině.</p>
              <img src="img/icons/video-camera.svg" alt="Ikona kamery" className="info-icon" />
            </div>
            <img src="img/info/5.jpg" alt="Letní kino" className="info-image" />
          </section>
        </div>



        <div className="mobile-homePage">
           <div className="element-na-secondary-intro">
          <Gallery slides={[
            { image: 'img/info/1.jpg', text: 'Nabízíme útulné podkrovní pokoje s vlastním sociálním zařízením, masážním sprchovým boxem a společnou kuchyňkou.', icon: 'img/icons/Wifi.svg' },
            { image: 'img/info/2.jpg', text: 'Parkování aut je na oploceném pozemku v těsné blízkosti ubytování.', icon: 'img/icons/Vector.svg' },
            { image: 'img/info/3.jpg', text: 'Pro cyklisty je k dispozici zastřešené na noc uzamykatelné parkování s možností nabíjení elektrokol.', icon: 'img/icons/bicycle.svg' },
            { image: 'img/info/4.jpg', text: 'Na zahradě si můžete dopřát odpočinek u bazénu s lehátky, posedět v dřevěném altánu nebo si vychutnat grilování u venkovního krbu.', icon: 'img/icons/swimming.svg' },
            { image: 'img/info/5.jpg', text: 'Po dohodě si můžete večer užít jedinečný zážitek - promítání filmů majitele ubytování, režiséra Hugo Habrmana v útulném domácím letním kině.', icon: 'img/icons/video-camera.svg' }
          ]} />
          </div>
          <div id='RoomsSection'>
            <RoomsSection />
          </div>
          <div className="element-na-secondary">
            <Title variant="secondary">
              <h2 className='small-title'>Tipy na výlety</h2>
              <p>Okolí se vybízí k turistice, výletech na kolech, windserfingu na Rozkoši nebo lyžování v nedalekých Orlických horách.</p>
              <Button text="Prozkoumat okolí" className="explore-btn" />
            </Title>
          </div>

          <div className="element-na-primary price-container">
            <h2 className='small-title'>Cena za ubytování</h2>
            <PriceForm />
            <p>Dítě ve vlastní postýlce zdarma</p>

            <Link to='/cenik'><Button text="Ceník a storno podmínky" className="explore-btn" /></Link>

          </div>

          <div id='arrival' className="element-na-secondary">
            <Title variant="secondary">
              <h2 className='small-title'>Kudy k nám</h2>
            </Title>
            <div className='arrival-address'>
              <p>V Zátiší<br />
                549 01 Nové Město nad Metují<br />
                GPS: 50.327785, 16.164823</p>
            </div>
          </div>
          <div>
            <img src="img/arrival/photomap.jpg" alt="foto mapa" className="map-image" />
            <img src="img/arrival/map.jpg" alt="mapa" className="map-image" />
          </div>
        </div>
      </main>

      <Footer />

    </div>
  );
};
