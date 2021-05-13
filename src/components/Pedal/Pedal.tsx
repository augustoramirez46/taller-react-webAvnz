import * as React from 'react';

interface PedalProps {
    id: number,
    name: string,
    price: number,
    onBoard: boolean,
    url?: string,
    onClickPedal: () => void;
}



export const Pedal: React.FC<PedalProps> = ({ url, onClickPedal, onBoard }) => {
    const pedalStyle = {
        backgroundImage: `url(${url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "200px",
        backgroundPosition: "33%"
    }


    return (
        <div className={`Pedal ${onBoard ? `Pedal--onBoard` : ""}`} onClick={onClickPedal} style={url ? pedalStyle : undefined} >

        </div>
    )

}