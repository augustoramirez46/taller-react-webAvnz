import React from 'react';
import { PriceSum } from '../../components/PriceSum/PriceSum';
import './App.css'
import { HashRouter, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import * as Tone from 'tone';
// import { PlayAudio } from '../../components/PlayAudioButton/PlayAudio';
import { PedalBoard } from '../../components/PedalBoard/PedalBoard';
import { Browser } from '../../components/Browser/Browser';


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

let playing = false;

const sound1 = new Tone.Player({
    url: `${process.env.PUBLIC_URL}/resources/sounds/guitarPhrase.wav`,
    loop: true,
    fadeIn: .2,
    fadeOut: .9,
})

export const App = () => {


    //const synth = new Tone.Synth(); /*.toDestination();*/
    //const dist = new Tone.Distortion(15).toDestination();
    // const now = Tone.now();
    //synth.connect(dist);



    const dist = new Tone.Distortion(1).toDestination();
    sound1.connect(dist);

    const handleOnPlayPause = () => {


        switch (playing) {
            case false:
                //const now = Tone.now();

                sound1.start(0, 1);


                //synth.triggerAttack("C4", now);
                //synth.triggerAttack("G4", now + .3);
                //synth.triggerAttack("E4", now + .5);

                playing = true;
                break;

            case true:
                //synth.triggerRelease();

                sound1.stop();

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
            <Browser />

        </HashRouter>

    </main>

    );
}