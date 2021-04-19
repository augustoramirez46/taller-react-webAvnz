import * as React from 'react';
import { PedalContext } from '../../utils/PedalContext';
import { PriceListItem } from '../PriceListItem/PriceListItem';


interface PriceSumProps {

}

export const PriceSum: React.FC<PriceSumProps> = () => {
    // const [pedalPrice, setpedalPrice] = React.useState(testPedals);
    // console.log(list)
    const { pedalsOnBoard } = React.useContext(PedalContext);

    return (<div className='PriceSum'>
        <h1 className='PriceSum__title'>Total</h1>

        {pedalsOnBoard.map(({ id, name, price }) => {
            return <PriceListItem
                key={id}
                name={name}
                price={price}
            >
            </PriceListItem>
        })}

    </div>);
}
