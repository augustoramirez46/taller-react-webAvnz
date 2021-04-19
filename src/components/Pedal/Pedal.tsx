import * as React from 'react';

import ITEM_TYPE from '../../utils/Types';



interface PedalProps {
    id: number,
    name: string,
    price: number,
    onBoard: boolean,
    onClickPedal: () => void;
}

export const Pedal: React.FC<PedalProps> = ({ name, id, onClickPedal, onBoard }) => {

    return (
        <div className={`Pedal ${onBoard ? `Pedal--onBoard` : ""}`} onClick={onClickPedal}>
            <p className={`Pedal__id`}>{id}</p>
            <p className={`Pedal__title`}>{name}</p>
        </div>

    )

}