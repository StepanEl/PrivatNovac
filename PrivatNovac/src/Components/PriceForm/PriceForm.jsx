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


function getPrice(persons, nights) {
  const validPersons = Number(persons) || 1;
  const validNights = Number(nights) || 1;
  const key = validNights >= 3 ? 3 : validNights;

  if (validPersons <= 4) {
    return priceTable[key][validPersons] * validNights;
  } else {
    const basePricePerNight = priceTable[key][4];
    const onePersonPricePerNight = basePricePerNight / 4;
    const extraPersons = validPersons - 4;
    return (basePricePerNight + extraPersons * onePersonPricePerNight) * validNights;
  }
};

export function PriceForm() {
  const [nights, setNights] = useState(1);
  const [persons, setPersons] = useState(1);

  const price = getPrice(persons, nights);


  return (
    <>
      <form className="price-form">
        <div>
          <label htmlFor="nights">Počet nocí</label><br />
          <input
            type="number"
            id="nights"
            name="nights"
            min={1}
            max={60}
            value={nights}
            onChange={(e) => {
              let value = e.target.value;

              if (value === "") {
                setNights("");
                return;
              }

              value = value.replace(/^0+/, "") || "0";

              setNights(Number(value));
            }}
            onBlur={() => {
              if (!nights || nights < 1) {
                setNights(1);
              }
            }}
          />
        </div>

        <div>
          <label htmlFor="persons">Počet osob</label><br />
          <input
            type="number"
            id="persons"
            name="persons"
            min={1}
            max={12}
            value={persons}
            onChange={(e) => {
              let value = e.target.value;

              if (value === "") {
                setPersons("");
                return;
              }

              value = value.replace(/^0+/, "") || "0";
              setPersons(Number(value));
            }}
            onBlur={() => {
              if (!persons || persons < 1) {
                setPersons(1);
              }
              if (persons > 12) {
                setPersons(12);
              };
            }}
          />
        </div>

        <div>
          <label htmlFor="price">Cena</label><br />
          <output id="price">{price} Kč</output>
        </div>
      </form>
    </>
  )
}