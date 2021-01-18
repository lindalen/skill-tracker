import React, {useState} from "react";
import "./SkillSection.css";
import {TimerButton} from "./TimerButton";
import {Timer} from "./Timer";
import {SkillSettings} from "./SkillSettings";
import {SkillSettingsRevealer} from "./SkillSettingsRevealer";
import { ColorResult } from "react-color";

const SkillSection: React.FC = () => {
    const startDate = new Date(); /* ensures both current time and start time are initially the same */

    const [startTime, setStartTime] = useState<Date>(startDate);
    const [time, setTime] = useState<Date>(startDate);
    const [active, setActive] = useState<boolean>(false);

    const [minToReachGoal, setMinToReachGoal] = useState<number>(25);

    const [showSettings, setShowSettings] = useState<boolean>(false);
    const [bgColor, setBgColor] = useState<ColorResult>({hex: '#333', rgb: {r: 51,g: 51,b: 51,a: 1,},hsl: {h: 0,s: 0,l: .20,a: 1,}});
    const [skillName, setSkillName] = useState<string>("Skill Name");

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

    function updateMinToReachGoal(minutes : number) {
        if (isNaN(minutes)) return;
        setMinToReachGoal(minutes);
    }

    function updateSkillName(name : string) {
        if (name=="") {
            setSkillName("Skill Name");
        } else {
            setSkillName(name);
        }
        
    }
    

    return (
        <div className="section" style={{backgroundColor: bgColor.hex}}>
            <div className="cell">
                <div className="content-grid">
                    <div className="cell">
                        <p className="title">{skillName}</p>
                    </div>
                    <div className="cell centered">
                        <Timer time={time} startTime={startTime} minToReachGoal={minToReachGoal}/>
                    </div>
                </div>
            </div>

            <div className="cell">
                <TimerButton makeActiveOpposite={makeActiveOpposite} active={active} addSecond={addSecond}/>
            </div>
            <SkillSettingsRevealer revealFunc={updateSettingsVisibility} show={showSettings}/>
            <SkillSettings show={showSettings} bgColor={bgColor.hex} handleColorChange={updateBackgroundColor} handleGoalChange={updateMinToReachGoal} handleNameChange={updateSkillName}/>       
        </div>
    );
}

export default SkillSection;