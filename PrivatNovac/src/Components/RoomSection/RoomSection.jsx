import { useState } from 'react';
import { Gallery } from '../../Components/Gallery/Gallery';
import { Button } from '../Button/Button';
import { Link } from 'react-router';

const rooms = [
    {
        name: 'Pokoj č. 1',
        gallery: [
            { image: 'img/room1/1.jpg' },
            { image: 'img/room1/2.jpg' },
            { image: 'img/room1/3.jpg' }
        ],
        text1: '1 - 4 osoby',
        text2: '1x manželské dvoulůžko',
        text3: '1 rozkládací lůžko s možností přistýlky'
    },
    {
        name: 'Pokoj č. 2',
        gallery: [
            { image: 'img/room2/1.jpg' },
            { image: 'img/room2/2.jpg' },
            { image: 'img/room1/3.jpg' }
        ],
        text1: '1 - 3 osoby',
        text2: '3x jednolůžko',
        text3: 'bez možnosti přistýlky'
    },
    {
        name: 'Pokoj č. 3',
        gallery: [
            { image: 'img/room3/1.jpg' },
            { image: 'img/room3/2.jpg' }
        ],
        text1: '1 - 3 osoby',
        text2: '1x manželské dvoulůžko',
        text3: '1x jednolůžko'
    },
    {
        name: 'Pokoj č. 4',
        gallery: [
            { image: 'img/room4/1.jpg' },
            { image: 'img/room4/2.jpg' },
            { image: 'img/room4/3.jpg' }
        ],
        text1: '1 - 2 osoby',
        text2: '1x manželské lůžko',
        text3: 'bez možnosti přistýlky'
    }
];

export function RoomsSection() {
    const [active, setActive] = useState(0);

    return (
        <div style={{ background: '#2957A4', color: 'white', paddingTop: '0.5rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', marginInline: '0.5rem' }}>
                {rooms.map((room, idx) => (
                    <button
                        key={room.name}
                        onClick={() => setActive(idx)}
                        style={{
                            padding: '1rem 0.4rem',
                            background: idx === active ? '#112951' : '#2957A4',
                            color: 'white',
                            border: 'white 1px solid',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '1.1rem',
                            fontFamily: 'Andika New Basic, Arial, sans-serif',
                        }}
                    >
                        {room.name}
                    </button>
                ))}
            </div>
            <div>
                <div style={{ margin: '1rem' }}>
                    <div >{rooms[active].text1}</div>
                    <div >{rooms[active].text2}</div>
                    <div >{rooms[active].text3}</div>
                </div>
                <Gallery slides={rooms[active].gallery} />
            </div>
            <Link to='/vybaveni-a-pravidla'><Button text={
                <>
                    Vybavení<br />
                    a pravidla ubytování
                </>
            } /> </Link>
        </div>
    );
};