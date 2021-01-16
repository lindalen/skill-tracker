import React from 'react'
import "./SkillSettings.css";
import {ColorResult, GithubPicker} from "react-color";

interface SkillSettingsProps {
    show: boolean;
    bgColor: string;
    handleColorChange: (color : ColorResult) => void;
}

export const SkillSettings: React.FC<SkillSettingsProps> = ({show, bgColor, handleColorChange}) => {
        const handleChangeComplete = (color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => handleColorChange(color);

        const settingsContent = 
            <>
                Skill: <input type="text" name="skill-name" placeholder="Enter new skillname here"/>
                Goal: 
                <div className="threeByOne"> 
                    <input className="cell" type="number" name="goal-hour" placeholder="hours"/>
                    <input className="cell" type="number" name="goal-min" placeholder="minutes"/>
                    <input className="cell" type="number" name="goal-sec" placeholder="seconds"/>
                </div>
                Color:
                <GithubPicker color={bgColor} width="200px" colors={['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB']} onChangeComplete={handleChangeComplete} className="color-picker"/>
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