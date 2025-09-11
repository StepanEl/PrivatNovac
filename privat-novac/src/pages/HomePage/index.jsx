import { Gallery } from '../../Components/Gallery/Gallery';
import { Header } from '../../Components/Header/Header';
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
  { image: '/img/info/1.jpg', text: 'Nabízíme útulné podkrovní pokoje s vlastním sociálním zařízením, masážním sprchovým boxem a společnou kuchyňkou.' },
  { image: '/img/info/2.jpg', text: 'Parkování aut je na oploceném pozemku v těsné blízkosti ubytování.' },
  { image: '/img/info/3.jpg', text: 'Pro cyklisty je k dispozici zastřešené na noc uzamykatelné parkování s možností nabíjení elektrokol.' },
  { image: '/img/info/4.jpg', text: 'Na zahradě si můžete dopřát odpočinek u bazénu s lehátky, posedět v dřevěném altánu nebo si vychutnat grilování u venkovního krbu.' },
  { image: '/img/info/5.jpg', text: 'Po dohodě si můžete večer užít jedinečný zážitek - promítání filmů majitele ubytování, režiséra Hugo Habrmana v útulném domácím letním kině.' }
]} />

<Gallery slides={[
  { image: '/img/a.jpg' },
  { image: '/img/b.jpg' }

]} />
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};
