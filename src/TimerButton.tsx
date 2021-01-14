import React, {useState, useEffect} from 'react'
import playLogo from "./play.png";
import pauseLogo from "./pause.png";
import "./TimerButton.css";
import { url } from 'inspector';

interface TimerButtonProps {
    makeActiveOpposite:()=>void;
    active:boolean;
    addSecond:()=>void;
}

export const TimerButton: React.FC<TimerButtonProps> = ({makeActiveOpposite, active, addSecond}) => {
        const [logoUrl, setLogoUrl] = useState(playLogo);
        const [timerIntervalID, setTimerintervalID] = useState<any>(0);

        function handleClick() {
            if (active) {
                setLogoUrl(playLogo);
            } else {
                setLogoUrl(pauseLogo);
            }
            makeActiveOpposite();
        }
        function handleTimer() {
            if (active) {
                let intervalID = setInterval(function() {addSecond();}, 1000);
                setTimerintervalID(intervalID); 
            } else {
                clearInterval(timerIntervalID);
            }
            
            
        }

        useEffect(()=> {
            handleTimer();
        }, [active]);
        return (
            <button className="timer-button" style={{backgroundImage: "url(" + logoUrl + ")"}} onClick={handleClick}></button>
        );
}