import React from 'react';
import { PriceSum } from '../../components/PriceSum/PriceSum';
import './App.css'
import { HashRouter, Route } from 'react-router-dom';
import { Home } from '../Home/Home';

const testPedals = [
    {
        id: 0,
        name: 'siracha',
        price: 35
    },
    {
        id: 1,
        name: 'bigfuff',
        price: 56
    },
    {
        id: 2,
        name: 'metalarea',
        price: 44,
    },
    {
        id: 3,
        name: 'flumes',
        price: 10
    }
];

export const App = () => {

    return (<main>

        <HashRouter basename={process.env.PUBLIC_URL}>

            <Route path="/home" component={Home} />

            <PriceSum list={testPedals}></PriceSum>

        </HashRouter>

    </main>

    );
}