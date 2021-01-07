import React, {useState} from 'react'
import playLogo from "./play.png";
import pauseLogo from "./pause.png";
import "./TimerButton.css";
import { url } from 'inspector';

interface TimerButtonProps {
    makeActiveOpposite:()=>void;
    active:boolean;
}



export const TimerButton: React.FC<TimerButtonProps> = ({makeActiveOpposite, active}) => {
        const [logoUrl, setLogoUrl] = useState(playLogo);

        function handleClick() {
            if (active) {
                setLogoUrl(playLogo);
            } else {
                setLogoUrl(pauseLogo);
            }
            makeActiveOpposite();
        }
        return (
            <button className="timer-button" style={{backgroundImage: "url(" + logoUrl + ")"}} onClick={handleClick}></button>
        );
}