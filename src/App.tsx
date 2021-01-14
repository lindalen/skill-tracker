import React from 'react';
import './App.css';
import SkillSection from './SkillSection';
import SkillSectionGrid from "./SkillSectionGrid";
import "./SkillSection.tsx";
import ParticlesBg from 'particles-bg';
import Title from "./Title";

function App() {
  /*
    TODO: 
    Add settings component that appears upon clicking a settings logo. 
    A form appears which allows you to change goalTime, skillName. 
    Must be submitted with button.
    */
  return (
    <div className="App">
      <Title text="Skill Tracker"/>
      <SkillSectionGrid>
        <SkillSection skillName="Chess"/>
        <SkillSection skillName="Tennis"/>
      </SkillSectionGrid>
      <ParticlesBg type="random" bg={true} />
    </div>
  );
}

export default App;
