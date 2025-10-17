import { Footer } from "../../Components/Footer/Footer";
import { Title } from "../../Components/title/Title";
import { Header } from "../../Components/Header/Header";
import "./ContactPage.css";
import GridGallery from "../../Components/Gallery/GridGallery";

export function ContactPage() {
    return (
        <div className="container">
            <Header />
            <div className="element-na-secondary">
                <Title variant="secondary">
                    <h2 className='small-title'>Kontakt</h2>
                </Title>
                <div className="contact-text">
                    <p>Tel.: +420 491 470 085<br />
                        Mobil: +420 739 292 523<br />
                        E-mail: <a href="mailto:hugo.habrman@gmail.com">hugo.habrman@gmail.com</a>
                    </p>
                </div>
                <div className="contact-text">
                    <p>
                        <span className='text-underline'>Fakturační adresa:</span> <br />
                        Eva Habrmanová<br />
                        Havlíčkova 190<br />
                        549 01 Nové Město nad Metují<br />
                    </p>
                </div>
                <div className="contact-text">
                    <p>Nejsem plátce DPH<br />
                        IČO: 60895284</p>
                </div>

                <Title variant="secondary">
                    <h2 className='small-title'>Kudy k nám</h2>
                </Title>
                <div className="contact-text">
                    <p>V Zátiší<br />
                        549 01 Nové Město nad Metují<br />
                        GPS: 50.327785, 16.164823</p>
                

                <GridGallery slides={[
                    { image: 'img/arrival/photomap.jpg' },
                    { image: 'img/arrival/map.jpg' },
                ]} />
                </div>
            </div>
            <Footer />
        </div>
    )
}