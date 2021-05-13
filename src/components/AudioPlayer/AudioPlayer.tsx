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

        let prev: any = null;
        pedalsOnBoard.forEach((pedalInfo, index) => {
            let curr = null;
            switch (pedalInfo.id) {
                case 0:
                default:
                    curr = new Tone.Distortion(.5);
                    break;
                case 1:
                    curr = new Tone.Chorus({
                        frequency: undefined,
                        delayTime: 2.5,
                        depth: 1
                    });
                    break;
                case 2:
                    curr = new Tone.Phaser({
                        frequency: 15,
                        octaves: 5,
                        baseFrequency: 1000
                    });
                    break;
                case 3:
                    curr = new Tone.Reverb({
                        decay: 3
                    });
                    break;
                case 4:
                    curr = new Tone.BitCrusher(3);
                    break;
                case 5:
                    curr = new Tone.Vibrato(1, .5);
                    break;

            }

            if (index === 0) {
                sound1.connect(curr);
                prev = curr;
                console.log('init')
            }
            if (index > 0) {
                prev = prev.connect(curr);
                console.log('middle')
            }
            if (index === pedalsOnBoard.length - 1) {
                curr = curr.toDestination();
                console.log('last')
            }
        });
        if (pedalsOnBoard.length === 0) {
            sound1.toDestination();
            return;
        }
        return;

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