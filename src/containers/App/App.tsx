import React from 'react';
import { PriceSum } from '../../components/PriceSum/PriceSum';
import './App.css'

const testPedals = [
    {
        id: 0,
        name: 'siracha',
        price: '$35'
    },
    {
        id: 1,
        name: 'bigfuff',
        price: '$56'
    },
    {
        id: 2,
        name: 'metalarea',
        price: '$44'
    },
    {
        id: 3,
        name: 'flumes',
        price: '$10'
    }
];

export const App = () => {

    return (<main>

        <PriceSum name='1' price='2'></PriceSum>

    </main>
    );
}