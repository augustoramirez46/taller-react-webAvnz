import React from 'react';
import { PriceSum } from '../../components/PriceSum/PriceSum';
import './App.css'
import { HashRouter, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import * as Tone from 'tone';
import { PlayAudio } from '../../components/PlayAudioButton/PlayAudio';
import { PedalBoard } from '../../components/PedalBoard/PedalBoard';

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

let playing = false;

export const App = () => {

    const synth = new Tone.Synth().toDestination();
    // const now = Tone.now();


    const handleOnPlayPause = () => {


        switch (playing) {
            case false:
                const now = Tone.now();

                synth.triggerAttack("C4", now);
                synth.triggerAttack("G4", now + .3);
                synth.triggerAttack("E4", now + .5);

                playing = true;
                break;

            case true:
                synth.triggerRelease();

                playing = false;
                break;
        }

        console.log(playing);


    }

    const intermediatePlayPause = () => {
        handleOnPlayPause();
    }

    return (<main>

        <HashRouter basename={process.env.PUBLIC_URL}>


            <Route path="/home" component={Home} />

            <PedalBoard onPlayPause={intermediatePlayPause} />
            <PriceSum list={testPedals} ></PriceSum>

        </HashRouter>

    </main>

    );
}