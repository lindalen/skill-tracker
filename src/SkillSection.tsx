import React, {useState} from "react";
import { addSyntheticLeadingComment, createIncrementalCompilerHost } from "typescript";
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
    const [time, setTime] = useState<number>(0);
    const [active, setActive] = useState<boolean>(false);

    function increment() {
        setTime(currentTime => currentTime+1);
    }

    function changeTimerState() {
        setActive(c => true);
    }

    
    return (
        <div className="section">
            <p className="title">{skillName}</p>
            
            <Timer increment={increment} time={time} active={active}/>
            <p>You have spent {time} seconds on this skill.</p>
        </div>
        
    )
}

export default SkillSection;