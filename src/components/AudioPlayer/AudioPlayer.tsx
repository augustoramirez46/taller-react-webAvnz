import * as React from 'react'
import * as Tone from 'tone';
import { PedalContext } from '../../utils/PedalContext';

interface AudioPlayerProps {
    sound1: Tone.Player,
    isPlaying: boolean,
    // handleOnPlayPause: () => void,
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ sound1, isPlaying }) => {

    const { pedalsOnBoard } = React.useContext(PedalContext);

    // Escucha cambios de la variable, no cambia nada
    React.useEffect(() => {
        sound1.disconnect();
        if (pedalsOnBoard.length === 0) {
            sound1.toDestination();
            return;
        }

        if (pedalsOnBoard.length === 1) {
            const dist = new Tone.Distortion(1).toDestination();
            sound1.connect(dist);
            return;
        }

        if (pedalsOnBoard.length === 2) {
            const wahWah = new Tone.AutoWah(50, 6, -5).toDestination();
            wahWah.Q.value = 8;
            sound1.connect(wahWah);
            return;
        }

        if (pedalsOnBoard.length === 3) {
            const chorus = new Tone.Chorus(4, 2.5, 0.5).toDestination();
            sound1.connect(chorus);
            return;
        }

        if (pedalsOnBoard.length === 4) {

            const phaser = new Tone.Phaser({
                frequency: 15,
                octaves: 5,
                baseFrequency: 1000
            }).toDestination();
            sound1.connect(phaser);
            return;
        }

        if (pedalsOnBoard.length === 5) {

            const reverb = new Tone.Reverb({
                decay: 3
            }).toDestination();
            sound1.connect(reverb);
            return;
        }

        if (pedalsOnBoard.length === 6) {

            const crusher = new Tone.BitCrusher(3).toDestination();
            sound1.connect(crusher);
            return;
        }


    }, [sound1, pedalsOnBoard]);

    React.useEffect(() => {
        switch (isPlaying) {
            case true:
                sound1.start(0, 1);
                break;

            case false:

                sound1.stop();

                break;
        }
    }, [isPlaying, sound1]);


    return (null);
}