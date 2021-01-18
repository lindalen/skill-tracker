import React from 'react'
import "./SkillSettings.css";
import {ColorResult, GithubPicker} from "react-color";

interface SkillSettingsProps {
    show: boolean;
    bgColor: string;
    handleColorChange: (color : ColorResult) => void;
    handleGoalChange: (minutes : number) => void;
    handleNameChange: (name : string) => void;
}

export const SkillSettings: React.FC<SkillSettingsProps> = ({show, bgColor, handleColorChange, handleGoalChange, handleNameChange}) => {
        const handleChangeComplete = (color: ColorResult, e: React.ChangeEvent<HTMLInputElement>) => handleColorChange(color);
        const handleGoalInput = (e: React.ChangeEvent<HTMLInputElement>) => handleGoalChange(parseInt(e.target.value));
        const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => handleNameChange(e.target.value);
        const settingsContent = 
            <>
                Skill: <input onChange={handleNameInput} type="text" name="skill-name" placeholder="Enter new skillname here"/>
                Goal: <input onChange={handleGoalInput} type="number" name="goal-min" placeholder="minutes"/> minutes.
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