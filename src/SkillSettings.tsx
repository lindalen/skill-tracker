import React from 'react'
import "./SkillSettings.css";

interface SkillSettingsProps {
    show: boolean;
}

export const SkillSettings: React.FC<SkillSettingsProps> = ({show}) => {
        const settings = 
        <div className="settings show">
            SETTINGS HERE
            CHANGE GOAL
            CHANGE SKILL NAME
            CHANGE COLOR
        </div>

        const fadingSettings = 
        <div className="settings hide">
            bye bye
        </div>
        return (
            <div>
            
            {
                show ? settings : fadingSettings
            }
            </div>
        );
}