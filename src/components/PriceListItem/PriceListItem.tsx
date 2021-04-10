import * as React from 'react';


interface PriceListItemProps {
    key: number,
    name: string,
    price: number,
    onClickDelete?: () => void;
}

export const PriceListItem: React.FC<PriceListItemProps> = ({ key, name, price, onClickDelete }) => {

    return <div className={`PriceListItem`}>
        <h3 className={`PriceListItem__title`}>{name}</h3>
        <p className={`PriceListItem__price`}>{`${`$`}${price}`}</p>
        <div className={`PriceListItem__delete`} onClick={onClickDelete}></div>
    </div>

}