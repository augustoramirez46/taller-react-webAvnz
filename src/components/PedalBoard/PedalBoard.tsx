import * as React from 'react'
import { PedalInfo } from '../../utils/pedalInfo';
import { PlayAudio } from '../PlayAudioButton/PlayAudio'

interface PedalBoardProps {
    pedalOnBoard?: PedalInfo[],
    onClickPP: () => void;
}

export const PedalBoard: React.FC<PedalBoardProps> = ({ onClickPP }) => {

    const prevent = (event: any) => {
        event.preventDefault();
        console.log(event);
    }

    const prevent2 = (event: any) => {
        event.preventDefault();
    }

    return (
        <div className={`PedalBoard`}>
            <div className={`PedalBoard__main`} onDrop={prevent} onDragOver={prevent2} onDragEnter={prevent2}>

            </div>
            <PlayAudio onClickPP={onClickPP}></PlayAudio>
        </div>
    );
}