import * as React from 'react';
import { PedalContext } from '../../utils/PedalContext';
import { Pedal } from '../Pedal/Pedal';

interface BrowserProps {

}

export const Browser: React.FC<BrowserProps> = () => {

    const { pedalsOnStock, handleToBoard } = React.useContext(PedalContext);


    return <div className='Browser'>
        {pedalsOnStock.map(({ id, name, price }) => {
            const IntermediatePedalDragEnd = () => {
                handleToBoard(id);
            }
            return (
                <Pedal
                    onBoard={false}
                    onClickPedal={IntermediatePedalDragEnd}
                    key={id}
                    id={id}
                    name={name}
                    price={price} >

                </Pedal>
            );
        })}

    </div >;

}