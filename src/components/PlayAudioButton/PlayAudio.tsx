import * as React from 'react';


interface PlayAudioProps {
    onClickPP: () => void;

}

var play = false;

export const PlayAudio: React.FC<PlayAudioProps> = ({ onClickPP }) => {

    const images = [
        {
            backgroundImage: `url(${process.env.PUBLIC_URL}/resources/images/play.svg)`,
        },
        {
            backgroundImage: `url(${process.env.PUBLIC_URL}/resources/images/pause.svg)`,
        }

    ]

    const [bgImage, SetBgImage] = React.useState(images[0]);

    const handleOnClick = () => {
        onClickPP();
        var copy;
        if (play === false) {
            copy = images[1];
            play = true;
            SetBgImage(copy);
            return;
        }
        copy = images[0];
        play = false;
        SetBgImage(copy);
        return;
    }

    return (
        <div className={`playAudioButton`} onClick={handleOnClick} style={bgImage} >

        </div >
    );
}