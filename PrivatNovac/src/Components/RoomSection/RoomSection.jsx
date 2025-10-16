import { useState } from 'react';
import { Gallery } from '../../Components/Gallery/Gallery';
import { Button } from '../Button/Button';
import { Link } from 'react-router';
import './RoomSection.css';

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
        <div className="rooms-section">
            <div className="rooms-tabs">
                {rooms.map((room, idx) => (
                    <button
                        key={room.name}
                        onClick={() => setActive(idx)}
                        className={`rooms-tab ${idx === active ? 'active' : ''}`}
                    >
                        {room.name}
                    </button>
                ))}
            </div>
            <div>
                <ul className="rooms-info">
                    <li>{rooms[active].text1}</li>
                    <li>{rooms[active].text2}</li>
                    <li>{rooms[active].text3}</li>
                </ul>
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