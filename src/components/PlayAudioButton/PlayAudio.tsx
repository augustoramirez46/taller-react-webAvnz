import * as React from 'react';


interface PlayAudioProps {
    onPlayPause: () => void;

}

export const PlayAudio: React.FC<PlayAudioProps> = ({ onPlayPause, }) => {


    return (
        <div className={`playAudioButton`} onClick={onPlayPause}></div>
    );
}