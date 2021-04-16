import React from 'react';
import { PriceSum } from '../../components/PriceSum/PriceSum';
import './App.css'
import { HashRouter, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import * as Tone from 'tone';
// import { PlayAudio } from '../../components/PlayAudioButton/PlayAudio';
import { PedalBoard } from '../../components/PedalBoard/PedalBoard';
import { Browser } from '../../components/Browser/Browser';
import { AudioPlayer } from '../../components/AudioPlayer/AudioPlayer';
import { PedalContext } from '../../utils/PedalContext';


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

    const intermediateDragStart = () => {
        console.log('drag starting');
    }
    return (<main>

        <HashRouter basename={process.env.PUBLIC_URL}>
            <PedalContext.Provider value={{ list: testPedals }}>
                <Route path="/home" component={Home} />
                <AudioPlayer sound1={sound1} isPlaying={isPlaying} />
                <PedalBoard onClickPP={intermediatePlayPause} />
                <PriceSum list={testPedals} ></PriceSum>
                <Browser pedalStock={testPedals} pedalDragStart={intermediateDragStart} />
            </PedalContext.Provider>
        </HashRouter>

    </main>

    );
}