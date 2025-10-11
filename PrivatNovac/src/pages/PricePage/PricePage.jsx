import './PricePage.css';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import { Title } from '../../Components/title/Title';
import { PriceForm } from '../../Components/PriceForm/PriceForm';

export function PricePage() {
    return (
        <div className="container">
            <Header />
            <main>
                <div className="element-na-secondary price-page-title">
                    <Title variant="secondary">
                        <h2 className='small-title'>Ceník</h2>
                    </Title>
                    <table className="price-table">
                        <thead><tr>
                            <th></th>
                            <th>1 noc</th>
                            <th>2 noci</th>
                            <th>3 a více nocí</th>
                        </tr></thead>
                        <tbody>
                            <tr>
                                <td>1 osoba</td>
                                <td>800,-</td>
                                <td>800,-</td>
                                <td>700,-</td>
                            </tr>
                            <tr>
                                <td>2 osoby</td>
                                <td>1200,-</td>
                                <td>1100,-</td>
                                <td>1000,-</td>
                            </tr>
                            <tr>
                                <td>3 osoby</td>
                                <td>1650,-</td>
                                <td>1410,-</td>
                                <td>1350,-</td>
                            </tr>
                            <tr>
                                <td>4 osoby</td>
                                <td>2120,-</td>
                                <td>1880,-</td>
                                <td>1800,-</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className='childrenBed'>Dítě ve vlastní postýlce zdarma.</p>
                </div>
                <div className="element-na-primary price-container">
                    <h2 className='small-title'>Cena za ubytování</h2>
                    <PriceForm />
                </div>
                <div className="element-na-secondary price-page-title">
                    <Title variant="secondary">
                        <h2 className='small-title'>Storno podmínky a zálohy</h2>
                    </Title>

                    <div className="price-info">
                        <ul>
                            <li>Záloha činí cenu 1 noci z ceny kalkulované za rezervovaný pobyt. </li>
                            <li>Není-li záloha uhrazena do dohodnutého termínu, rezervace zaníka.</li>
                            <li>Doplatek ceny za ubytování je uhrazen při příjezdu na pobyt.</li>
                            <li>V případě storna pobytu více než 20 dní před nástupem vracíme 100 % výše zálohy.</li>
                            <li>V případě storna pobytu méně než 20 dní před nástupem činí poplatek 50 % výše zálohy.</li>
                            <li>V případě storna pobytu méně než 5 dní před nástupem činí poplatek 100 % výše zálohy.</li>
                            <li>V případě zkrácení pobytu ze strany návštěvníka se částka za nevyčerpané dny nevrací.</li>
                        </ul>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};
