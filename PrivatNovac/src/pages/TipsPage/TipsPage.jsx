import { Helmet } from "react-helmet-async";
import { Title } from "../../Components/title/Title";
import { Header } from "../../Components/Header/Header";
import { Hero } from "../../Components/Hero/Hero";
import { Gallery } from "../../Components/Gallery/Gallery";
import { Footer } from "../../Components/Footer/Footer";



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
                        <div className="info-rules">

                            <p>Nové Město nad Metují a jeho okolí je plné historických památek a přírodních krás. Každý kout skrývá něco jedinečného. Za jeden týden je téměř nemožné navštívit všechny skvosty tohoto regionu. Každý den, bez ohledu na počasí, nabízí nové zážitky a možnosti objevování.</p>
                            <p>V Novém Městě nad Metují se nachází renesanční náměstí a zámek s areálem zámecké zahrady, jejíž dřevěný most, navržený proslulým architektem Dušanem Jurkovičem, byl zařazen mezi top 7 mostů v ČR.</p>
                            <p>Dušan Jurkovič, známý svým mistrovským rukopisem, navrhl i další unikátní stavby v okolí, jako je restaurace Bartoňova útulna v malebné přírodní rezervaci Peklo nebo Jiráskova chata na Dobrošově, která se nachází v blízkosti vojenských pevností.</p>
                            <p>Krásné výhledy na město prožijete z Juránkovy nebo Dvořáčkovy vyhlídky.</p>
                            <p>V Novém Městě nad Metují je také letiště, kde si lze objednat vyhlídkové lety nebo seskoky padákem.</p>
                            <p>Nadšenci lezení mohou využít cvičných horolezeckých skal HIS nedaleko náměstí.</p>
                            <p>Kraj je vhodný pro rodiny s dětmi, neboť je provázaný pohádkovými bytostmi "Kačenčiny pohádkové říše".</p>
                            <p>Okolí nabízí dobré podmínky pro pěší turistiku i cyklistiku jelikož se nachází v podhůří Orlických hor.</p>
                        </div>
                        <Gallery slides={[
                            { image: 'img/tips/nmnm3.webp', text: 'Nové Město nad Metují zvané Město na skále' },
                            { image: 'img/tips/novac.webp', text: 'Renesanční náměstí v Novém Městě nad Metují' },
                            { image: 'img/tips/nmnm.webp', text: 'Zámek s dřevěným mostem od architekta Dušana Jurkoviče' },
                            { image: 'img/tips/his.webp', text: 'Nadšenci lezení mohou využít cvičných horolezeckých skal HIS nedaleko náměstí.' },
                            { image: 'img/tips/klopotov.webp', text: 'Obůrka Klopotov' },
                            { image: 'img/tips/peklo2.webp', text: 'Restaurace Bartoňova útulna v malebné přírodní rezervaci Peklo (6 km)' },
                            { image: 'img/tips/slavonov.webp', text: 'Slavoňov, dřevěný kostel - památka UNESCO (6 km)' },
                            { image: 'img/tips/rokole1.webp', text: 'Marianské poutní místo Rokole (8 km)' },
                            { image: 'img/tips/kacencina-rise.webp', text: 'V rámci "Kačenčiny pohádkové říše" můžete hledat trasy vhodné pro děti.' },


                        ]} />
                        <Title variant="secondary">
                            <h2 className="small-title">Cykloturistika</h2>
                        </Title>
                        <div className="info-rules">
                            <p>Z Privátu Nováč se můžete rozhodnout, zdali zvolit roviny nebo kopce.</p>
                            <p>Na jedné straně si můžete objet po nových cyklostezkách vodní nádrž Rozkoš a cestou navštívit Českou Skalici a Ratibořice, které jsou spojené se spisovatelkou Boženou Němcovou.</p>
                            <p>Na druhé straně můžete vyrazit do kopců přes Pekelské údolí na pohraniční pevnosti z II. světové války (např. Dobrošov, Březinka), vyhlídku na Novém Hrádku nebo až do Orlických hor.</p>
                            <p>Vydat se můžete také přes Pekelské údolí do Náchoda, kde najdete zámek, pivovar nebo Malé lázně Běloves. </p>
                            <p>Přívětivá trasa vede také do pevnosti Josef z období Marie Terezie a na polabskou cyklostezku vedoucí do Kuksu.</p>
                            <p>Cyklotrasy lze naplánovat také do Dobrušky proslavené F. L. Věkem a města Opočna se zámkem a rozsáhlou expozicí. </p>
                            <p>V sezóně jezdí cyklobusy, které Vás dovezou do Orlických hor, do polských Stolových hor a mnoho dalších míst.</p>
                        </div>
                        <Gallery slides={[
                            { image: 'img/tips/cyklo-rozkos.webp', text: 'Cyklo okruh Česká Skalice, který si můžete rozšířit přes Dubno až do Ratibořic' },
                            { image: 'img/tips/ratiborice1.webp', text: 'Ratibořice barokní zámek ze 16. století a místa z knih Boženy Němcové (12 km)' },
                            { image: 'img/tips/dobrosov.webp', text: 'Pevnost Dobrošov z období před II. světovou válkou (12 km)' },
                            { image: 'img/tips/novy-hradek.webp', text: 'Rozhledna Nový Hrádek (15 km)' },
                            { image: 'img/tips/brezinka.webp', text: 'Březinka, pevnostní skanzen nedaleko lázní Běloves (13 km)' },
                            { image: 'img/tips/nachod.webp', text: 'Státní zámek Náchod a vojenský hřbitov z r. 1866 (13 km)' },
                            { image: 'img/tips/beloves.webp', text: 'Malé lázně Běloves v Náchodě (13 km)' },
                            { image: 'img/tips/josefov.webp', text: 'Pevnost Josefov z období Marie Terezie, katakomby (18 km)' },
                            { image: 'img/tips/kuks.webp', text: 'Hospital Kuks (30 km)' },
                            { image: 'img/tips/dobruska.webp', text: 'Dobruška, město F.L. Věka, koupaliště a krytý bazén (10 km)' },
                            { image: 'img/tips/opocno2.webp', text: 'Státní zámek Opočno z 15. století s rozsáhlou expozicí (15 km)' },
                            { image: 'img/tips/destna.webp', text: 'Rozhlednana nejvyšším vrcholu Orlických hor - Velká Deštná (35 km)' },
                            { image: 'img/tips/stolove-hory.webp', text: 'Národní Park Stolových hor, Polsko (32 km)' },
                            { image: 'img/tips/kudowa.webp', text: 'Kudowa Zdrój lázeňské město, Polská republika (20 km)' },

                        ]} />
                        <Title variant="secondary">
                            <h2 className="small-title">Koupání</h2>
                        </Title>
                        <div className="info-rules">
                            <p>Kryté bazény s venkovním koupalištěm jsou v Náchodě (10 km), v Dobrušce (9 km) a v Jaroměři (18 km).</p>
                            <p>Nejbližší aquaparky jsou v Kudowa Zdrój (Polsko, 15 km) a v Hradci Králové (30 km).</p>
                            <p>Přírodní koupání nabízí koupaliště Broumar v Opočně, přehrada Rozkoš včetně rybaření a windsurfing (4 km) a také koupaliště Bystré v Orlických horách.</p>
                        </div>
                        <Gallery slides={[
                            { image: 'img/tips/broumar.webp', text: 'Koupaliště Broumar' },

                        ]} />
                        <Title variant="secondary">
                            <h2 className="small-title">Lyžování</h2>
                        </Title>
                        <div className="info-rules">
                            <p>Ski centrum Deštné v Orlických horách je vzdáleno 22 km a nabízí několik sjezdových a běžeckých tratí.</p>
                            <p>Další lyžařské vleky se nacházejí v Sedloňově, Olešnici v Orlických horách, Orlické Záhoří nebo lze využít polský lyžařský areál Zieleniec.</p>
                        </div>
                        <Gallery slides={[
                            { image: 'img/tips/destne.webp', text: 'Deštné v Orlický horách' },

                        ]} />
                        <Title variant="secondary">
                            <h2 className="small-title">Další místa v okolí</h2>
                        </Title>
                        <div className="info-rules">

                        </div>
                        <Gallery slides={[
                            { image: 'img/tips/family-park.webp', text: 'Family park Česká Skalice - ZOO (12 km)' },
                            { image: 'img/tips/kostnice.webp', text: 'Polská Czermna kostnice na území Polské republiky (20 km)' },
                            { image: 'img/tips/hronov.webp', text: 'Hronov rodiště spisovatele A. Jiráska, festival "Jiráskův Hronov" (22 km)' },
                            { image: 'img/tips/merkur.webp', text: 'Muzeum stavebnice Merkur, Police nad Metují (26 km)' },
                            { image: 'img/tips/braunuv-betlem.webp', text: 'Sochařská rezervace Braunův Betlém (30km)' },
                            { image: 'img/tips/zoo-dvur.webp', text: 'Safari park Dvůr Králové nad Labem -ZOO (32 km)' },
                            { image: 'img/tips/aquarium.webp', text: 'Obří akvárium v Hradci Králové (32 km)' },
                            { image: 'img/tips/ostas.webp', text: 'Skalní město Ostaš na Broumovsku (30 km)' },
                            { image: 'img/tips/adrspach.webp', text: 'Teplicko-Adršpašské skály, skalní město (42 km)' },
                        ]} />


                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}