import React from 'react'
import startLogo from "./play.jpg";
import pauseLogo from "./pause.jpg";

interface TimerButtonProps {
    changeTimerState:() => void;
}

export const TimerButton: React.FC<TimerButtonProps> = ({changeTimerState}) => {
        return (
            <button className="timer-button" onClick={changeTimerState}>Hello</button>
        );
}