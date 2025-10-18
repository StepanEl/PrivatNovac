import { Helmet } from "react-helmet-async";
import { Title } from "../../Components/title/Title";
import { Header } from "../../Components/Header/Header";
import { Hero } from "../../Components/Hero/Hero";



export function TipsPage() {
    return (
        <div className="container">
            <Helmet>
                <title>Tipy na výlety — Privát Nováč | Turistika, cyklistika, koupání, lyžování.</title>
                <meta name="description" content="Tipy na výlety v okolí Privát Nováč: Turistika, cyklistika, koupání, lyžování." />
            </Helmet>
            <Header />
            <div className="mobile-rules">
                <Hero />
            </div>

            <main>
                <div className="element-na-secondary">
                    <div className="desktop-rules">
                        <Title variant="secondary">
                            <h2 className="small-title">Tipy na výlety</h2>
                        </Title>
                        <div className="info-rules"></div>

                        <p>Zde najdete tipy na zajímavé výlety v okolí našeho ubytování.</p>
                        
                    </div>
                </div>
            </main>
        </div>
    );
}