import * as React from 'react';


interface PlayAudioProps {
    onClickPP: () => void;

}

export const PlayAudio: React.FC<PlayAudioProps> = ({ onClickPP, }) => {

    const bgImage = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/resources/images/play.svg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "50%",
    }

    return (
        <div className={`playAudioButton`} onClick={onClickPP} style={bgImage}>

        </div>
    );
}