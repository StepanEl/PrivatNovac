import { Footer } from "../../Components/Footer/Footer";
import { Gallery } from "../../Components/Gallery/Gallery";
import { Header } from "../../Components/Header/Header";
import { Title } from "../../Components/title/Title";
import "./ShareAreasPage.css";

export function ShareAreasPage() {
    return (
        <div className="container share-areas-page">
            <Header />

            <main>
                <div className="element-na-secondary">

                    <Title variant="secondary">
                        Kuchyňka
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
                <div className="element-na-secondary">
                    <Title variant="secondary">
                        Zahrada
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
                <div className="container element-na-secondary">
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

                <div className="element-na-secondary">
                    <Title variant="secondary">
                        Zázemí pro cyklisty
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

            </main >

            <Footer />
        </div >
    )}