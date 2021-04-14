import * as React from 'react';
import { PedalInfo } from '../../utils/pedalInfo';
import { Pedal } from '../Pedal/Pedal';

interface BrowserProps {
    pedalStock: PedalInfo[],
}

export const Browser: React.FC<BrowserProps> = ({ pedalStock }) => {
    console.log(pedalStock)

    return <div className='Browser'>
        {pedalStock.map(({ id, name, price }) => {



            return <Pedal key={id} id={id} name={name} price={price}></Pedal>;
        })}

    </div>;

}