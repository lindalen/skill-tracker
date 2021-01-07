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
    const [time, setTime] = useState<Date>(new Date());
    const [active, setActive] = useState<boolean>(false);

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
                    <p className="title">{skillName}</p>
                    <Timer addSecond={addSecond} time={time} active={active}/>
                </div>
            </div>

            <div className="cell">
                <TimerButton makeActiveOpposite={makeActiveOpposite} active={active}/>
            </div>
        </div>
        
    )
}

export default SkillSection;