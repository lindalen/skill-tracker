import React, {useState} from 'react'
import arrow from "./reveal-arrow.png";
import "./SkillSettingsRevealer.css";

interface SkillSettingsRevealerProps {
    revealFunc: () => void;
    show: boolean;
}

export const SkillSettingsRevealer: React.FC<SkillSettingsRevealerProps> = ({revealFunc, show}) => {

        let transformVal = show ? "scale(-1)" : "scale(1)";
        return (
            
            <button className="settings-button" style={{backgroundImage: "url(" + arrow + ")", transform: transformVal}} onClick={revealFunc}></button>
        );
}