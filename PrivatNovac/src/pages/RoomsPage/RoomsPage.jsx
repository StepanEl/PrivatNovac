import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import { Title } from '../../Components/title/Title';
import GridGallery from '../../Components/Gallery/GridGallery';
import { rooms } from '../../Components/RoomSection/RoomSection';
import './RoomsPage.css';
import { Helmet } from 'react-helmet-async';

export function RoomsPage() {
    return (
        <div className="container share-areas-page">
            <Helmet>
                <title>Pokoje — Privát Nováč, Nové Město nad Metují | 1-4 osoby, vlastní sociální zařízení</title>
                <meta name="description" content="Popis pokojů Privát Nováč: komfortní 1-4 lůžkové pokoje s vlastním sociálním zařízením a možností přistýlky. Pohodlné ubytování blízko památek a výletních tras." />
            </Helmet>
            <Header />

            <main>
                <div className="element-na-secondary">
                    <Title variant="secondary">
                        <h2 className="small-title">Vybavení pokojů</h2>
                    </Title>
                    <div className="info-text-center">
                        <p>Privát Nováč nabízí útulné ubytování v podkroví rodinného domu.<br />
                            K dispozici jsou <strong>4 pokoje</strong>. Celková kapacita je <strong>12 lůžek</strong>.
                        </p>
                    </div>
                    <div className="text-content end-block">
                        <p>Všechny pokoje jsou vybaveny vlastním sociálním zařízením
                            s masážním sprchovým boxem, ručníky, WiFi, LCD televizí a přenosným ventilátorem.
                            Na patře je k dispozici společná kuchyňka. Ve vstupní místnosti je pro každý pokoj uzamykatelná skříňka na boty.</p>
                    </div>
                </div>

                {rooms.map((r, idx) => (
                    <div key={r.name} className="element-na-secondary">
                        <div className='element-na-primary block'>
                        <Title variant="primary">
                            <h3 className="rooms-title">{r.name}</h3>
                            <div className="text-content paragraph">
                                <p>{r.text1}</p>
                                <p>{r.text2}</p>
                                <p>{r.text3}</p>
                            </div>
                            <GridGallery slides={r.gallery} />
                        </Title>
                        </div>
                    </div>
                ))}
            </main>

            <Footer />
        </div>
    );
}