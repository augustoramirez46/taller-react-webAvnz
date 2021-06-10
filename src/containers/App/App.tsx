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

const PUBLIC_URL = process.env.PUBLIC_URL;

const testPedals = [
    {
        id: 0,
        name: 'Boss Distortion',
        price: 35,
        url: `${PUBLIC_URL}/resources/images/pedals/Distortion.png`
    },
    {
        id: 1,
        name: 'Boss Tremolo',
        price: 56,
        url: `${PUBLIC_URL}/resources/images/pedals/Tremolo.png`
    },
    {
        id: 2,
        name: 'Boss Phaser',
        price: 44,
        url: `${PUBLIC_URL}/resources/images/pedals/Phaser.png`
    },
    {
        id: 3,
        name: 'Boss Reverb',
        price: 75,
        url: `${PUBLIC_URL}/resources/images/pedals/DigitalDelay.png`
    },
    {
        id: 4,
        name: 'Boss MetalZone',
        price: 35,
        url: `${PUBLIC_URL}/resources/images/pedals/MetalZone.png`
    },
    {
        id: 5,
        name: 'Boss Flanger',
        price: 80,
        url: `${PUBLIC_URL}/resources/images/pedals/Flanger.png`,
    } /*,
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
    */
];

const mainBg = {
    backgroundImage: `url(${PUBLIC_URL}/resources/images/wood_background.png)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}



const pedalOnBoard = new Array<PedalInfo>();

const sound1 = new Tone.Player({
    url: `${PUBLIC_URL}/resources/sounds/guitarPhrase.wav`,
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

    return (<main style={mainBg}>

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