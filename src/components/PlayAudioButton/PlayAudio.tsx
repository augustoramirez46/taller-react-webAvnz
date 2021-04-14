import * as React from 'react';


interface PlayAudioProps {
    onClickPP: () => void;

}

export const PlayAudio: React.FC<PlayAudioProps> = ({ onClickPP, }) => {

    return (
        <div className={`playAudioButton`} onClick={onClickPP}></div>
    );
}