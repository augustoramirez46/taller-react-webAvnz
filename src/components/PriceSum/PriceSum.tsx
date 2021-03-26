import * as React from 'react';
import { PedalInfo } from '../../utils/pedalInfo';


interface PriceSumProps {
    list: PedalInfo[],
}

export const PriceSum: React.FC<PriceSumProps> = ({ list }) => {
    // const [pedalPrice, setpedalPrice] = React.useState(testPedals);
    console.log(list)
    return (<div className='PriceSum'>'
        <h1>Total</h1>

        <li>{list[1].name}</li>

    </div>);
}
