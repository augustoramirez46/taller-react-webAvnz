import * as React from 'react';


interface PriceListItemProps {
    key: number,
    name: string,
    price: number,
}

export const PriceListItem: React.FC<PriceListItemProps> = ({ key, name, price }) => {

    return <div className={`PriceListItem`}>
        <h3 className={`PriceListItem__title`}>{name}</h3>
        <p className={`PriceListItem__price`}>{price}</p>
    </div>

}