import { Helmet } from "react-helmet-async";
import { Title } from "../../Components/title/Title";
import { Header } from "../../Components/Header/Header";
import { Hero } from "../../Components/Hero/Hero";
import { Gallery } from "../../Components/Gallery/Gallery";



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
                            <p>Dušan Jurkovič, známý svým mistrovským rukopisem, navrhl i další unikátní stavby v okolí, jako je restaurace Bartoňova útulna v malebné přírodní rezervaci Peklo, nebo Jiráskovu chatu na Dobrošově, která se nachází v blízkosti vojenských pevností.</p>
                            <p>V Novém Městě nad Metují je také letiště, kde si lze objednat vyhlídkové lety nebo seskoky padákem.</p>
                            <p>Nadšenci lezení mohou využít cvičných horolezeckých skal HIS nedaleko náměstí.</p>
                            <p>Kraj je vhodný pro rodiny s dětmi, neboť je provázaný pohádkovými bytostmi "Kačenčiny pohádkové říše".</p>
                            <p>Okolí nabízí dobré podmínky pro pěší turistiku i cyklistiku jelikož se nachází v podhůří Orlických hor.</p>
                        </div>
                        <Title variant="secondary">
                            <h2 className="small-title">Cykloturistika</h2>
                        </Title>
                        <div className="info-rules">
                            <p>Z Privátu Nováč se můžete rozhodnout, zdali zvolit roviny nebo kopce.</p>
                            <p>Na jedné straně si můžete objet po nových cyklostezkách vodní nádrž Rozkoš a cestou navštívit Českou Skalici a Ratibořice, které jsou spojené s Bobičkou Boženy Němcové.</p>
                            <p>Na druhé straně můžete vyrazit do kopců přes Pekelské údolí na pohraniční pevnosti z II. světové války (např. Dobrošov, Skutina) nebo až do Orlických hor.</p>
                            <p>Vydat se můžete také přes Pekelské údolí do Náchoda, kde najdete zámek, pivovar nebo lázně Běloves. </p>
                            <p>Přívětivá trasa vede také do pevnosti Josef z období Marie Terezie</p>
                            <p>Cyklotrasy lze naplánovat také do Dobrušky proslavené F. L. Věkem a města Opočna se zámkem a rozsáhlou expozicí. </p>
                            <p>V sezóně jezdí cyklobusy, které Vás dovezou do Orlických hor, do polských Stolových hor a mnoho dalších míst.</p>
                        </div>
                        <Gallery slides={[
                            { image: 'img/tips/dobrosov.webp', text: 'Pevnost Dobrošov z období před II. světovou válkou (10 km)' },
                            { image: 'img/tips/dobruska.webp', text: 'Dobruška, město F.L. Věka, koupaliště a krytý bazén (9 km)' },
                            { image: 'img/tips/opocno.webp', text: 'Státní zámek Opočno z 15. století s rozsáhlou expozicí (14 km)' },
                            { image: 'img/tips/nachod.webp', text: 'Státní zámek Náchod a vojenský hřbitov z r. 1866 (10 km)' },
                            { image: 'img/tips/peklo.webp', text: 'Peklo - romantické údolí řeky Metuje, stylová restaurace  (5 km)' }
                        ]} />
                        <Title variant="secondary">
                            <h2 className="small-title">Koupání</h2>
                        </Title>
                        <div className="info-rules">
                            <p>Kryté bazény s venkovním koupalištěm jsou v Náchodě (10 km), v Dobrušce (9 km) a v Jaroměři (18 km).</p>
                            <p>Nejbližší aquaparky jsou v Kudowa Zdrój (Polsko, 15 km) a v Hradci Králové (30 km).</p>
                            <p>Přírodní koupání nabízí koupaliště Broumar v Opočně, přehrada Rozkoš včetně rybaření a windsurfing (4 km) a také koupaliště Bystré v Orlických horách.</p>
                        </div>
                        <Title variant="secondary">
                            <h2 className="small-title">Lyžování</h2>
                        </Title>
                        <div className="info-rules">
                            <p>Ski centrum Deštné v Orlických horách je vzdáleno 22 km a nabízí několik sjezdových a běžeckých tratí.</p>
                            <p>Další lyžařské vleky se nacházejí v Sedloňově, Olešnici v Orlických horách, Orlické Záhoří nebo lze využít polský lyžařský areál Zieleniec.</p>
                        </div>
                        <Title variant="secondary">
                            <h2 className="small-title">Další místa v okolí</h2>
                        </Title>
                        <div className="info-rules">

                        </div>
                        <Gallery slides={[
                            { image: 'img/tips/aqarium.webp', text: 'Obří akvárium v Hradci Králové (30 km)' },
                            { image: 'img/tips/hanicka.webp', text: 'Pevnost Hanička z období před II. světovou válkou (40 km)'},
                            { image: 'img/tips/hronov.webp', text: 'Hronov rodiště spisovatele A. Jiráska, festival "Jiráskův Hronov" (16 km)' },
                            { image: 'img/tips/kostnice.webp', text: 'Polská Czermna kostnice na území Polské republiky (14 km)' },
                            { image: 'img/tips/kudowa.webp', text: 'Kudowa Zdrój lázeňské město, Polská republika (15 km)' },
                            { image: 'img/tips/ostas.webp', text: 'Kaple Hvězda a skalní útvary Ostaš na Broumovsku (40 km)' },
                            { image: 'img/tips/merkur.webp', text: 'Muzeum Merkur, Police muzeum známého výrobce stavebnic, Ocelové město a další z Merkuru (25 km)' },
                            { image: 'img/tips/adrsbach.webp', text: 'Teplicko-Adršpašské skály, skalní město (50 km)' }
                        ]} />


                    </div>
                </div>
            </main>
        </div>
    );
}