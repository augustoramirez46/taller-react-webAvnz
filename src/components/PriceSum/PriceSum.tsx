import * as React from 'react';
import { PedalInfo } from '../../utils/pedalInfo';
import { PriceListItem } from '../PriceListItem/PriceListItem';


interface PriceSumProps {
    list: PedalInfo[],
}

export const PriceSum: React.FC<PriceSumProps> = ({ list }) => {
    // const [pedalPrice, setpedalPrice] = React.useState(testPedals);
    console.log(list)
    return (<div className='PriceSum'>
        <h1 className='PriceSum__title'>Total</h1>

        {list.map(({ id, name, price }) => {
            return <PriceListItem
                key={id}
                name={name}
                price={price}
            >
            </PriceListItem>;
        })}

    </div>);
}
