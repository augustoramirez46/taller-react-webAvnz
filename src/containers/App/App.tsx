import React from 'react';
import { PriceSum } from '../../components/PriceSum/PriceSum';
import './App.css'
import { HashRouter, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import * as Tone from 'tone';
import { PedalBoard } from '../../components/PedalBoard/PedalBoard';
import { Browser } from '../../components/Browser/Browser';
import { AudioPlayer } from '../../components/AudioPlayer/AudioPlayer';
import { PedalContext } from '../../utils/PedalContext';
import { PedalInfo } from '../../utils/pedalInfo';



const testPedals = [
    {
        id: 0,
        name: 'siracha',
        price: 35,
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
    },
    {
        id: 4,
        name: 'la sonora',
        price: 13
    },
    {
        id: 5,
        name: 'voodoo',
        price: 16
    },
    {
        id: 6,
        name: 'apretadito',
        price: 28
    },
    {
        id: 7,
        name: 'el menor',
        price: 5
    },
    {
        id: 8,
        name: 'el mayor',
        price: 6
    },
];

const pedalOnBoard = new Array<PedalInfo>();

const sound1 = new Tone.Player({
    url: `${process.env.PUBLIC_URL}/resources/sounds/guitarPhrase.wav`,
    loop: true,
    fadeIn: .2,
    fadeOut: .9,
})

export const App = () => {
    const [isPlaying, setIsPlaying] = React.useState(false);

    const intermediatePlayPause = () => {
        const newState = !isPlaying;
        setIsPlaying(newState);
    }

    const [pedalsStocked, setPedalsStocked] = React.useState(testPedals);

    const handleToStock = (id: number) => {
        const copyStock = pedalsStocked.slice();
        const copyBoard = pedalsOnBoard.slice();
        const index = copyBoard.findIndex((elem) => {
            return elem.id === id;
        });

        copyStock.push(copyBoard[index]);
        copyBoard.splice(index, 1);

        setPedalsStocked(copyStock);
        setPedalsOnBoard(copyBoard);

    }

    const [pedalsOnBoard, setPedalsOnBoard] = React.useState(pedalOnBoard);

    const handleToBoard = (id: number) => {
        const copyStock = pedalsStocked.slice();
        const copyBoard = pedalsOnBoard.slice();
        const index = copyStock.findIndex((elem) => {
            return elem.id === id;
        });

        copyBoard.push(copyStock[index]);
        copyStock.splice(index, 1);

        setPedalsOnBoard(copyBoard);
        setPedalsStocked(copyStock);

    }

    const [pedalsSum, setPedalsSum] = React.useState(0);
    React.useEffect(() => {
        if (pedalsOnBoard.length === 0) {
            setPedalsSum(0);
            return;
        }

        var sum = 0;
        pedalsOnBoard.forEach(({ price }) => {
            sum = sum + price
        })
        setPedalsSum(sum);
    }, [pedalsOnBoard]);

    return (<main>

        <HashRouter basename={process.env.PUBLIC_URL}>
            <PedalContext.Provider value={{ pedalsOnStock: pedalsStocked, pedalsOnBoard: pedalsOnBoard, handleToStock: handleToStock, handleToBoard: handleToBoard }}>

                <Route path="/home" component={Home} />
                <AudioPlayer sound1={sound1} isPlaying={isPlaying} />
                <PedalBoard onClickPP={intermediatePlayPause} />
                <PriceSum priceSum={pedalsSum} ></PriceSum>
                <Browser />

            </PedalContext.Provider>
        </HashRouter>

    </main>

    );
}