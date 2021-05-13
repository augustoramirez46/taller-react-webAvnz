import React from 'react';
import { PedalContext } from '../../utils/PedalContext';
import { Pedal } from '../Pedal/Pedal';
import { PlayAudio } from '../PlayAudioButton/PlayAudio';


interface PedalBoardProps {

    onClickPP: () => void;

}

export const PedalBoard: React.FC<PedalBoardProps> = ({ onClickPP }) => {


    const { pedalsOnBoard, handleToStock } = React.useContext(PedalContext);

    return (
        <div className={`PedalBoard`}>
            <div className={`PedalBoard__main`} >
                {pedalsOnBoard.map(({ id, name, price, url }) => {
                    const IntermediateOnClickPedal = () => {
                        handleToStock(id);
                    }

                    return (<Pedal
                        onBoard={true}
                        onClickPedal={IntermediateOnClickPedal}
                        key={id}
                        id={id}
                        url={url}
                        name={name}
                        price={price} >

                    </Pedal>
                    );


                })}

            </div>

            <PlayAudio onClickPP={onClickPP}></PlayAudio>
        </div>
    );
}