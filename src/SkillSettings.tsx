import React from 'react'
import "./SkillSettings.css";
interface SkillSettingsProps {
    show: boolean;
}

export const SkillSettings: React.FC<SkillSettingsProps> = ({show}) => {
        return (
            <div>
            
            {
                // if show -> make class show class, if not, hide class
                show && <div className="settings show">SETTINGS HERE</div>
            }
            </div>
        );
}