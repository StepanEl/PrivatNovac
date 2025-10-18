import { Footer } from "../../Components/Footer/Footer";
import { Gallery } from "../../Components/Gallery/Gallery";
import { Header } from "../../Components/Header/Header";
import { Title } from "../../Components/title/Title";
import { Helmet } from 'react-helmet-async';
import parking from '../../../public/img/icons/parking.svg';
import pet from '../../../public/img/icons/pet.svg';
import slipper from '../../../public/img/icons/slipper.svg';
import smoking from '../../../public/img/icons/smoking.svg';
import "./RulesPage.css";
import { Hero } from "../../Components/Hero/Hero";


export function RulesPage() {
    return (
        <div className="container">
            <Helmet>
                <title>Pravidla ubytování — Privát Nováč | Informace a podmínky</title>
                <meta name="description" content="Pravidla ubytování v Privát Nováč: informace o parkování, zákazu domácích mazlíčků, přezouvání a bezpečnostních pravidlech." />
            </Helmet>
            <Header />
            <div className="mobile-rules">
                <Hero />
            </div>

            <main>
                <div className="element-na-secondary">
                    <div className="desktop-rules">
                        <Title variant="secondary">
                            <h2 className="small-title">Pravidla ubytování</h2>
                        </Title>
                        <div className="info-rules">
                            <ul>
                                <li>Parkování je na oploceném pozemku.</li>
                                <li>Na zahradě vás přivítá cvičený pes a tři přítulní kocouři. Z toho důvodu není možné ubytování domácích mazlíčků.</li>
                                <li>Vzhledem k tomu, že je celý objekt pokryt koberci, vstup je možný pouze po přezutí. Přezůvky vám rádi zapůjčíme.</li>
                                <li>V celém domě platí zákaz kouření. Pro kuřáky je vyhrazen prostor pod přístřeškem venkovní kuchyně nebo kdekoliv na zahradě.</li></ul>
                            <div className="icons-rules">
                                <img src={parking} alt="Ikona parkoviště" />
                                <img src={pet} alt="Ikona zákazu domácích mazlíčků" />
                                <img src={slipper} alt="Ikona přezůvek" />
                                <img src={smoking} alt="Ikona zákazu kouření" />
                            </div>
                        </div>
                    </div>

                    <div className="mobile-rules">
                        <Title variant="secondary">
                            <h2 className="small-title"> Vybavení pokojů</h2>
                        </Title>
                        <div className="center">
                            <p>Privá Nováč nabízí útulné ubytování v podkroví rodinného domu. K dispozici jsou 4 pokoje:<br />
                                1x čtyřlůžkový pokoj,<br />
                                2x třílůžkový pokoj,<br />
                                1x dvoulůžkový pokoj.<br />
                            </p>
                            <p>Všechny pokoje jsou vybaveny vlastním sociálním zařízením
                                s masážním sprchovým boxem, ručníky, WiFi, LCD televizí a přenosným ventilátorem.
                                Na patře je k dispozici společná kuchyňka. Ve vstupní místnosti je pro každý pokoj uzamykatelná skříňka na boty.</p>
                        </div>
                        <Gallery slides={[
                            { image: 'img/wall/1.jpg' }
                        ]} />

                        <div className="container">
                            <Title variant="secondary">
                                <h2 className="small-title">Společné prostory</h2>
                            </Title>
                            <br />
                            <Title variant="secondary-small">
                                <h3 className="small-frame">Kuchyňka</h3>
                            </Title>
                            <div className="text-content">
                                <ul><p>Plně vybavená společná kuchyňka nabízí:</p>
                                    <li>Nádobí, lednici s mrazákem.</li>
                                    <li>Rychlovarnou konvici, mikrovlnnou troubu.</li>
                                    <li>Jednoplotýnkový vařič.</li>
                                    <li>Snídaně lze připravit pomocí snídaňového setu (kávovar, toustovač).</li>
                                </ul>
                            </div>
                        </div>
                        <Gallery slides={[
                            { image: 'img/kitchen/1.jpg' },
                            { image: 'img/kitchen/2.jpg' },
                            { image: 'img/kitchen/3.jpg' }
                        ]} />

                        <div className="container">
                            <Title variant="secondary-small">
                                <h3 className="small-frame">Zahrada</h3>
                            </Title>
                            <div className="text-content">
                                <ul><p>Na zahradě je k dispozici:</p>
                                    <li> Zahradní altán s posezením.</li>
                                    <li>Relaxační lehátka u bazénu</li>
                                    <li>Po dohodě je možné grilovat ve venkovním krbu. K dospozici je dřevo i grilovací náčiní.</li>
                                </ul>
                            </div>
                        </div>
                        <Gallery slides={[
                            { image: 'img/garden/1.jpg' },
                            { image: 'img/garden/2.jpg' },
                            { image: 'img/garden/3.jpg' },
                            { image: 'img/garden/4.jpg' },
                            { image: 'img/garden/5.jpg' },
                            { image: 'img/garden/6.jpg' },
                            { image: 'img/garden/7.jpg' }
                        ]} />

                        <div className="container">
                            <div className="text-content">
                                <ul>
                                    <li>Zastřešená venkovní kuchyň s posezením a domácím kinem.</li>
                                    <li>Po dohodě s majitelem ubytování, režisérem Hugo Habrmanem je možné zhlédnout jeho přírodopisné
                                        a jiné filmy včetně nejnovější snímků uváděných v kinech.
                                        <a href="https://www.filmyhabrman.com" target="_blank" rel="noopener noreferrer">www.filmyhabrman.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <Gallery slides={[
                            { image: 'img/terase/1.jpg' },
                            { image: 'img/terase/2.jpg' },
                            { image: 'img/terase/3.jpg' },
                            { image: 'img/terase/4.jpg' },
                            { image: 'img/terase/5.jpg' }
                        ]} />

                        <div className="container">
                            <Title variant="secondary-small">
                                <h3 className="small-frame">Zázemí pro cyklisty</h3>


                            </Title>
                            <div className="text-content">
                                <ul><li>Pro cyklisty máme zastřešené, uzamykatelné parkování s možností nabíjení elektrokol.</li>
                                    <li>Nechybí ani základní nářadí na opravy a dofouknutí kol.</li></ul>

                            </div>
                        </div>
                        <Gallery slides={[
                            { image: 'img/bicykle/1.jpg' },
                            { image: 'img/bicykle/2.jpg' },
                            { image: 'img/bicykle/3.jpg' },
                            { image: 'img/bicykle/4.jpg' },
                            { image: 'img/bicykle/5.jpg' }
                        ]} />
                    </div>
                </div>

            </main >
            <Footer />
        </div >
    );
}