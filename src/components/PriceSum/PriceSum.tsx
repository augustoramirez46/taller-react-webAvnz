import * as React from 'react';
import { PedalContext } from '../../utils/PedalContext';
import { PriceListItem } from '../PriceListItem/PriceListItem';


interface PriceSumProps {
    priceSum: number

}

export const PriceSum: React.FC<PriceSumProps> = ({ priceSum }) => {
    // const [pedalPrice, setpedalPrice] = React.useState(testPedals);
    // console.log(list)
    const { pedalsOnBoard, handleToStock } = React.useContext(PedalContext);

    return (<div className='PriceSum'>
        <h1 className='PriceSum__title'>Total</h1>

        {pedalsOnBoard.map(({ id, name, price }) => {
            const intermediateHandleToStock = () => {
                handleToStock(id);
            }
            return <PriceListItem
                onClickDelete={intermediateHandleToStock}
                key={id}
                name={name}
                price={price}
            >
            </PriceListItem>
        })}

        <p className={'PriceSum__total'}>{` $ ${priceSum}`}</p>


    </div>);
}
