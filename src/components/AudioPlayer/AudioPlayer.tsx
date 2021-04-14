import * as React from 'react'
import * as Tone from 'tone';

interface AudioPlayerProps {
    sound1: Tone.Player,
    isPlaying: boolean,
    // handleOnPlayPause: () => void,
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ sound1, isPlaying }) => {

    React.useEffect(() => {
        const dist = new Tone.Distortion(1).toDestination();
        sound1.connect(dist);
    }, [sound1]);

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