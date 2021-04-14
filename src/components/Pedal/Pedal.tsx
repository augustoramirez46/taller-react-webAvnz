import * as React from 'react';



interface PedalProps {
    id: number,
    name: string,
    price: number,
}

export const Pedal: React.FC<PedalProps> = ({ name, id }) => {

    return <div className={`Pedal`}  >
        <p className={`Pedal__id`}>{id}</p>
        <p className={`Pedal__title`}>{name}</p>
    </div>
}