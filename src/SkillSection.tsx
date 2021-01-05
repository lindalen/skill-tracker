import React, {useState} from "react";
import "./SkillSection.css"

import {Timer} from "./Timer";
import {ProgressBar} from "./ProgressBar";
/**
 * Component Description
 * Data - total time spent on a skill, current timer value, goal time
 * Functionality - start timer, stop timer, display current timer value, display goal value
 * Sub-Components - Timer
 */
const SkillSection : React.FC = () => {
    const [time, setTime] = useState(0);
    const [goal, setGoal] = useState(0);
    return (
        <div className="skill-section">
            <Timer/>
            <ProgressBar/>
        </div>
    );
}

export default SkillSection;