import * as React from 'react';
import { PedalInfo } from '../../utils/pedalInfo';
import { Pedal } from '../Pedal/Pedal';

interface BrowserProps {
    pedalStock: PedalInfo[],
    pedalDragStart: () => void,

}

export const Browser: React.FC<BrowserProps> = ({ pedalStock, pedalDragStart }) => {

    React.useEffect(() => {

    }, []);

    const [selectedPedal, SetSelectedPedal] = React.useState(pedalStock);


    return <div className='Browser'>
        {pedalStock.map(({ id, name, price }) => {
            return (
                <Pedal
                    pedalDragStart={pedalDragStart}
                    key={id}
                    id={id}
                    name={name}
                    price={price} >

                </Pedal>
            );
        })}

    </div >;

}