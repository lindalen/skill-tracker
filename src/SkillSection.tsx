import React, {useState} from "react";
import "./SkillSection.css";
import {TimerButton} from "./TimerButton";
import {Timer} from "./Timer";
/**
 * Component Description
 * Data - total time spent on a skill, current timer value, goal time
 * Functionality - start timer, stop timer, display current timer value, display goal value
 * Sub-Components - Timer
 */

/**
 * Planning
 * SkillSection
- SkillName
- TimerButton (hasStarted, setHasStarted, startTime, setStartTime) [also needs to swap logo on click]
- ProgressBar (time, goaltime)
- Timer (setTime?, time)
 */

type SkillSectionProps = {
    skillName: string;
}


const SkillSection: React.FC<SkillSectionProps> = ({skillName}) => {
    const startDate = new Date(); /* ensures both current time and start time are initially the same */
    const goalDate = new Date(startDate.getTime() + (25*60*1000));

    const [startTime, setStartTime] = useState<Date>(startDate);
    const [time, setTime] = useState<Date>(startDate);
    const [active, setActive] = useState<boolean>(false);
    const [msToReachGoal, setMsToReachGoal] = useState<number>(Math.abs(goalDate.getTime() - startDate.getTime()));

    function addSecond() {
        setTime(currentTime => new Date(currentTime.getTime() + 1000));
    }

    function makeActiveOpposite() {
        setActive(c => !c);
    }
    
    return (
        <div className="section">
            <div className="cell">
                <div className="content-grid">
                    <div className="cell">
                        <p className="title">{skillName}</p>
                    </div>
                    <div className="cell centered">
                        <Timer time={time} startTime={startTime} msToReachGoal={msToReachGoal}/>
                    </div>
                </div>
            </div>

            <div className="cell">
                <TimerButton makeActiveOpposite={makeActiveOpposite} active={active} addSecond={addSecond}/>
            </div>
        </div>
        
    )
}

export default SkillSection;