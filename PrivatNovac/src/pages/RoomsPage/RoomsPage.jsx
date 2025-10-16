import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import { Title } from '../../Components/title/Title';
import GridGallery from '../../Components/Gallery/GridGallery';
import { rooms } from '../../Components/RoomSection/RoomSection';
import './RoomsPage.css';

export function RoomsPage() {
    return (
        <div className="container share-areas-page">
            <Header />

            <main>
                <div className="element-na-secondary">
                    <Title variant="secondary">
                        <h2 className="small-title">Vybavení pokojů</h2>
                    </Title>
                    <div className="info-text-center">
                        <p>Privát Nováč nabízí útulné ubytování v podkroví rodinného domu.<br />
                            K dispozici jsou 4 pokoje. Celková kapacita je 12 lůžek
                        </p>
                        <p>Všechny pokoje jsou vybaveny vlastním sociálním zařízením
                            s masážním sprchovým boxem, ručníky, WiFi, LCD televizí a přenosným ventilátorem.
                            Na patře je k dispozici společná kuchyňka. Ve vstupní místnosti je pro každý pokoj uzamykatelná skříňka na boty.</p>
                    </div>
                </div>

                {rooms.map((r, idx) => (
                    <div key={r.name} className="element-na-secondary">
                        <Title variant="secondary">
                            <h3 className="rooms-title">{r.name}</h3>
                            <div className="text-content paragraph">
                                <p>{r.text1}</p>
                                <p>{r.text2}</p>
                                <p>{r.text3}</p>
                            </div>
                            <GridGallery slides={r.gallery} />
                        </Title>
                    </div>
                ))}
            </main>

            <Footer />
        </div>
    );
}