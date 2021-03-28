import * as React from 'react'
import { PlayAudio } from '../PlayAudioButton/PlayAudio'

interface PedalBoardProps {
    onPlayPause: () => void;
}

export const PedalBoard: React.FC<PedalBoardProps> = ({ onPlayPause }) => {

    return (<div className={`PedalBoard`}>
        <div className={`PedalBoard__main`}></div>
        <PlayAudio onPlayPause={onPlayPause}></PlayAudio>
    </div>
    );
}