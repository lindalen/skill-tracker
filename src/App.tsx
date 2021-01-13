import React from 'react';
import './App.css';
import SkillSection from './SkillSection';
import SkillSectionGrid from "./SkillSectionGrid";
import "./SkillSection.tsx";
import ParticlesBg from 'particles-bg';
import Title from "./Title";

function App() {

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
