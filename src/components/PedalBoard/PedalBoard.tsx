import * as React from 'react'
import { PedalInfo } from '../../utils/pedalInfo';
import { PlayAudio } from '../PlayAudioButton/PlayAudio'

interface PedalBoardProps {
    pedalOnBoard?: PedalInfo[],
    onClickPP: () => void;
}

export const PedalBoard: React.FC<PedalBoardProps> = ({ onClickPP }) => {

    return (<div className={`PedalBoard`}>
        <div className={`PedalBoard__main`}>

        </div>
        <PlayAudio onClickPP={onClickPP}></PlayAudio>
    </div>
    );
}