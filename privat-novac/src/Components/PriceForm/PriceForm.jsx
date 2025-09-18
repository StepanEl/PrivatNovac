import './PriceForm.css';
import { useState } from 'react';


export const PriceForm = () => {
    const [nights, setNights] = useState(1);
    const [persons, setPersons] = useState(1);

    const price = nights * persons * 500;

    return (
        <>
            <form className="price-form">
                <div>
                    <label htmlFor="nights"> Počet nocí </label><br />
                    <input type="number" id="nights" name="nights" min={1} max={60} value={nights}
                        onChange={e => setNights(Number(e.target.value))}
                    />
                </div>
                <div>
                    <label htmlFor="persons"> Počet osob </label><br />
                    <input type="number" id="persons" name="persons" min={1} max={12} value={persons}
                        onChange={e => setPersons(Number(e.target.value))}
                    />
                </div>
                <div>
                    <label>Cena</label><br />
                    <output>{price} Kč</output>
                </div>
            </form>
            <p>Dítě ve vlastní postýlce zdarma</p>
        </>
    )
}