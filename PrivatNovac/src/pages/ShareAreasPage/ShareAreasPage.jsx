import { Footer } from "../../Components/Footer/Footer";
import { Gallery } from "../../Components/Gallery/Gallery";
import GridGallery from "../../Components/Gallery/GridGallery";
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
                        <h2 className="small-title">Společné prostory</h2>
                    </Title>
                    <br />
                    <Title variant="secondary">
                        <h3 className="rooms-title">Kuchyňka</h3>

                        <div className="text-content paragraph">
                            <p>Na patře je společná plně vybavená kuchyňka.</p>
                            <p>Kuchyně nabízí:</p>
                            <ul>
                                <li>kuchyňské a stolní nádobí,</li>
                                <li>lednici s mrazákem,</li>
                                <li>jednoplotýnkový vařič,</li>
                                <li>rychlovarnou konvici, mikrovlnnou troubu, snídaňový set (kávovar, toustovač),</li>
                                <li>potřeby na mytí nádobí.</li>
                            </ul>
                        </div>
                        <GridGallery slides={[
                            { image: 'img/kitchen/1.jpg' },
                            { image: 'img/kitchen/2.jpg' },
                            { image: 'img/kitchen/3.jpg' }
                        ]} />
                    </Title>
                </div>

                <div className="element-na-secondary">
                    <Title variant="secondary">
                        <h3 className="rooms-title">Vchod a schodiště</h3>
                        <div className="text-content paragraph">
                            <p>Ve vstupní místnosti je pro každý pokoj uzamykatelná škříňka na boty.</p>
                            <GridGallery slides={[
                                { image: 'img/wall/1.jpg' }
                            ]} />
                        </div>
                    </Title>
                </div>

                <div className="element-na-secondary">
                    <Title variant="secondary">
                        <h3 className="rooms-title">Zahrada</h3>
                        <div className="text-content paragraph">
                            <p>Na zahradě je k dispozici zahradní altán s posezením a relaxační lehátka u bazénu</p>
                            <p>Po dohodě je možné grilovat ve venkovním krbu. K dispozici je dřevo i grilovací náčiní.</p>
                        </div>
                        <GridGallery slides={[
                            { image: 'img/garden/1.jpg' },
                            { image: 'img/garden/2.jpg' },
                            { image: 'img/garden/3.jpg' },
                            { image: 'img/garden/4.jpg' },
                            { image: 'img/garden/5.jpg' },
                            { image: 'img/garden/6.jpg' },
                            { image: 'img/garden/7.jpg' }
                        ]} />

                        <div className="text-content paragraph">

                            <p>Využít můžete také zastřešenou venkovní kuchyň s posezením a domácím kinem.</p>
                            <p>Kuchyň je vybavena nádobím pro stolování, umyvadlem a WC.</p>
                            <p>Po dohodě s majitelem ubytování, režisérem Hugo Habrmanem je možné zhlédnout jeho přírodopisné
                                a jiné filmy včetně nejnovější snímků uváděných v kinech. 
                                <a href="https://www.filmyhabrman.com" target="_blank" rel="noopener noreferrer"> www.filmyhabrman.com</a></p>
                        </div>
                        <GridGallery slides={[
                            { image: 'img/terase/1.jpg' },
                            { image: 'img/terase/2.jpg' },
                            { image: 'img/terase/3.jpg' },
                            { image: 'img/terase/4.jpg' },
                            { image: 'img/terase/5.jpg' }
                        ]} />
                    </Title>
                </div>


                <div className="element-na-secondary">
                    <Title variant="secondary">
                        <h3 className="rooms-title">Zázemí pro cyklisty</h3>
                        <div className="text-content paragraph">
                            <p>Pro cyklisty máme zastřešené, uzamykatelné parkování s možností nabíjení elektrokol.</p>
                            <p>Nechybí ani základní nářadí na opravy a dofouknutí kol.</p>
                        </div>
                        <GridGallery slides={[
                            { image: 'img/bicykle/1.jpg' },
                            { image: 'img/bicykle/2.jpg' },
                            { image: 'img/bicykle/3.jpg' },
                            { image: 'img/bicykle/4.jpg' },
                            { image: 'img/bicykle/5.jpg' }
                        ]} />
                    </Title>
                </div>
            </main >

            <Footer />
        </div >
    )
}