import React from 'react'

interface TimerProps {
    time:number;
    active:boolean;
    increment:()=>void;
}

export const Timer: React.FC<TimerProps> = ({time, active, increment}) => {
        return (
            <div>
                {active?<div>{time}</div>:<p>Time no here</p>}
                <button onClick={increment}>+++</button>
            </div>
        );
}