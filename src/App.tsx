import React from 'react';
import './App.css';
import SkillSection from './SkillSection';
import "./SkillSection.tsx";

function App() {

  return (
    <div className="App">
      <SkillSection skillName="Chess"/>
      <SkillSection skillName="Tennis"/>
    </div>
  );
}

export default App;
