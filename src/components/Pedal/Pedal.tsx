import * as React from 'react';

interface PedalProps {
    id: number,
    name: string,
    price: number,
    pedalDragStart: () => void;
}

export const Pedal: React.FC<PedalProps> = ({ name, id, pedalDragStart }) => {

    const pedalDragEnd = () => {
        console.log('me dropiaron pedal');
        console.log(id);
    }

    return <div className={`Pedal`} draggable onDragStart={console.log} onDrag={console.log} onDragOver={console.log} onDragEnd={pedalDragEnd}>
        <p className={`Pedal__id`}>{id}</p>
        <p className={`Pedal__title`}>{name}</p>
    </div>
}