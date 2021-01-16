import React from 'react'
import "./SkillSettings.css";

interface SkillSettingsProps {
    show: boolean;
}

export const SkillSettings: React.FC<SkillSettingsProps> = ({show}) => {
        const settingsContent = 
            <>
                Skill: <input type="text" name="skill-name" value="x" placeholder="Enter new skillname here"/>
                Goal: 
                <div className="threeByOne"> 
                    <input className="cell" type="number" name="goal-hour" value="0" placeholder="hours"/>
                    <input className="cell" type="number" name="goal-min" value="0" placeholder="minutes"/>
                    <input className="cell" type="number" name="goal-sec" value="0" placeholder="seconds"/>
                </div>
                CHANGE SKILL NAME
                CHANGE COLOR
            </>
        
        const settings = 
            <div className="settings show">
                {settingsContent}
            </div>

        const fadingSettings = 
            <div className="settings hide">
                {settingsContent}
            </div>
        return (
            <div>
            
            {
                show ? settings : fadingSettings
            }
            </div>
        );
}