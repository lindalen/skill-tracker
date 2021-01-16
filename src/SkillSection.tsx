import React, {useState} from "react";
import "./SkillSection.css";
import {TimerButton} from "./TimerButton";
import {Timer} from "./Timer";
import {SkillSettings} from "./SkillSettings";
import {SkillSettingsRevealer} from "./SkillSettingsRevealer";
import { ColorResult } from "react-color";
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

    const [showSettings, setShowSettings] = useState<boolean>(false);
    const [bgColor, setBgColor] = useState<ColorResult>({hex: '#333', rgb: {r: 51,g: 51,b: 51,a: 1,},hsl: {h: 0,s: 0,l: .20,a: 1,}});

    function addSecond() {
        setTime(currentTime => new Date(currentTime.getTime() + 1000));
    }

    function makeActiveOpposite() {
        setActive(c => !c);
    }

    function updateSettingsVisibility() {
        setShowSettings(c => !c);
    }

    function updateBackgroundColor(color : ColorResult) {
        setBgColor(color);
    }
    
    return (
        <div className="section" style={{backgroundColor: bgColor.hex}}>
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
            <SkillSettingsRevealer revealFunc={updateSettingsVisibility} show={showSettings}/>
            <SkillSettings show={showSettings} bgColor={bgColor.hex} handleColorChange={updateBackgroundColor}/>       
        </div>
    );
}

export default SkillSection;