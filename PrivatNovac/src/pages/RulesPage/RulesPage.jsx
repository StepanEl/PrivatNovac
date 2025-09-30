import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { Title } from "../../Components/title/Title";



export function RulesPage() {
    return (
        <div className="container">
            <Header />

            <main>
                <div className="element-na-secondary">
                    <Title variant="secondary"> Náš penzion vás srdečně zve<br />
                        do Nového Města nad Metují.
                    </Title>
                </div>
            </main>
            <Footer />
        </div>
    );
}