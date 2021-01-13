import React from "react";
import "./SkillSectionGrid.css";

const SkillSectionGrid: React.FC = ({children}) => {


    return (
        <div className="skill-section-grid">
            {children}
        </div>
    );

}

export default SkillSectionGrid;