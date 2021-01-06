import React, {useState} from "react";
import "./SkillSection.css"
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

interface SkillSectionProps {
    skillName: string;
}

const SkillSection : React.FC<SkillSectionProps> = ({skillName} : SkillSectionProps) => {
    const [hasStarted, setHasStarted] = useState(false);
    const [startTime, setStartTime] = useState(0);
    const [time, setTime] = useState(0);
    const [goal, setGoal] = useState(0);

    return (
        <div className="skill-section">
            
        </div>
    );
}

export default SkillSection;