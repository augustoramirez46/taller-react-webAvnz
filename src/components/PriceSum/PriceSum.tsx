import * as React from 'react';
import './PriceSum.css'

interface PriceSumProps {
    name: string;
    price: string;


}

export const PriceSum: React.FC<PriceSumProps> = ({ price }) => {

    return (<div className='PriceSum'>'
        <h1>Total</h1>
        <li></li>

    </div>);
}
