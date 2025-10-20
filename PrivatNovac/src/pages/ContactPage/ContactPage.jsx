import { Footer } from "../../Components/Footer/Footer";
import { Title } from "../../Components/title/Title";
import { Header } from "../../Components/Header/Header";
import "./ContactPage.css";
import GridGallery from "../../Components/Gallery/GridGallery";
import { Helmet } from 'react-helmet-async';

export function ContactPage() {
    return (
        <div className="container">
            <Helmet>
                {(() => {
                    const pageTitle = 'Kontakt — Privát Nováč | Rezervace a adresa';
                    const pageDescription = 'Kontaktujte Privát Nováč — telefon, e-mail a přesná adresa v Novém Městě nad Metují. Rezervace a dotazy rychle vyřídíme.';
                    const origin = typeof window !== 'undefined' && window.location ? window.location.origin : 'https://your-domain.example';
                    const pageUrl = origin + '/PrivatNovac/kontakt';
                    const ogImage = origin + '/PrivatNovac/img/novac1.png';

                    const jsonLd = {
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "url": pageUrl,
                        "name": pageTitle,
                        "description": pageDescription,
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+420 739 292 523",
                            "contactType": "customer service",
                            "email": "hugo.habrman@gmail.com"
                        }
                    };

                    return (
                        <>
                            <title>{pageTitle}</title>
                            <meta name="description" content={pageDescription} />
                            <meta property="og:title" content={pageTitle} />
                            <meta property="og:description" content={pageDescription} />
                            <meta property="og:type" content="website" />
                            <meta property="og:url" content={pageUrl} />
                            <meta property="og:image" content={ogImage} />
                            <meta name="twitter:card" content="summary_large_image" />
                            <meta name="twitter:title" content={pageTitle} />
                            <meta name="twitter:description" content={pageDescription} />
                            <meta name="twitter:image" content={ogImage} />
                            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
                        </>
                    );
                })()}
            </Helmet>
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

                    <Title variant="secondary-small">
                        <h2 className='small-title'>Kudy k nám</h2>
                        </Title>
                        <div className="contact-text arrival">
                            <p>V Zátiší<br />
                                549 01 Nové Město nad Metují<br />
                                GPS: 50.327785, 16.164823</p>
                            <GridGallery slides={[
                                { image: 'img/arrival/photomap.webp' },
                                { image: 'img/arrival/map.webp' },
                            ]} />
                        </div>
                    
            </div>
            <Footer />
        </div>
    )
}