import React from 'react'

interface TimerProps {
    time:Date;
    active:boolean;
    addSecond:()=>void;
}

export const Timer: React.FC<TimerProps> = ({time, active, addSecond}) => {
        return (
            <div>
                {active?<div>You have spent {time.getSeconds()} seconds on this skill<button onClick={addSecond}>+++</button></div>:<p></p>}
                
            </div>
        );
}