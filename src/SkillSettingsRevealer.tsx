import React from 'react'
import arrow from "./reveal-arrow.png";
import "./SkillSettingsRevealer.css";

interface SkillSettingsRevealerProps {
    revealFunc: () => void;
}

export const SkillSettingsRevealer: React.FC<SkillSettingsRevealerProps> = ({revealFunc}) => {
        return (
            <button className="settings-button" style={{backgroundImage: "url(" + arrow + ")"}} onClick={revealFunc}></button>
        );
}