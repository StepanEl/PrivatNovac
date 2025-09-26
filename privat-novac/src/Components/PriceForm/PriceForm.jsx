import './PriceForm.css';
import { useState } from 'react';

const priceTable = {
  1: {
    1: 800,
    2: 1200,
    3: 1650,
    4: 2120
  },
  2: {
    1: 800,
    2: 1100,
    3: 1410,
    4: 1880
  },
  3: {
    1: 700,
    2: 1000,
    3: 1350,
    4: 1800
  }
};


function getPrice (persons, nights) {
  const key = nights >= 3 ? 3 : nights;

  if (persons <= 4) {
    return priceTable[key][persons] * nights;
  } else {
    const basePricePerNight = priceTable[key][4];
    const onePersonPricePerNight = basePricePerNight / 4;
    const extraPersons = persons - 4;
    return (basePricePerNight + extraPersons * onePersonPricePerNight) * nights;
  }
};

export function PriceForm () {
  const [nights, setNights] = useState(1);
  const [persons, setPersons] = useState(1);

  const price = getPrice(persons, nights);


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
          <label htmlFor="price">Cena</label><br />
          <output id="price">{price} Kč</output>
        </div>
      </form>
      <p>Dítě ve vlastní postýlce zdarma</p>
    </>
  )
}