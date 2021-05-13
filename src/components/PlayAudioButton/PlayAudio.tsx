import * as React from 'react';


interface PlayAudioProps {
    onClickPP: () => void;

}

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
        var copy = bgImage;
        if (copy === images[0]) {
            copy = images[1];
            SetBgImage(copy);
            return;
        }
        copy = images[0];
        SetBgImage(copy);
    }

    return (
        <div className={`playAudioButton`} onClick={handleOnClick} style={bgImage} >

        </div >
    );
}