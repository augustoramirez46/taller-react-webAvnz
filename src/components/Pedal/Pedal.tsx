import * as React from 'react';

interface PedalProps {
    id: number,
    name: string,
    price: number,
    onBoard: boolean,
    onClickPedal: () => void;
}

let pedalStyle = {};

export const Pedal: React.FC<PedalProps> = ({ name, id, onClickPedal, onBoard }) => {


    return (
        <div className={`Pedal ${onBoard ? `Pedal--onBoard` : ""}`} onClick={onClickPedal} style={pedalStyle} >
            <p className={`Pedal__id`}>{id}</p>
            <p className={`Pedal__title`}>{name}</p>
        </div>

    )

}