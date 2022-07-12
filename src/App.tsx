import React from 'react';
import Paper from '@mui/material/Paper';
import Toggle from './components/Toggle';
import Info from './components/Info';
import Header from './components/Header';
import Skill from './components/Skills';

function App() {

  let skills: string[];
  skills = ['react.js', 'bootstrap'];

  return (    
    <Paper sx={{
        position: 'relative',
        width: 500,
        height: 500,
        boxShadow: 4,
        borderRadius: 3
      }} variant="outlined">        
      <Toggle label="preview" backgroundColor="red" size="sm" />
      <Header />
      <Info />
      <Skill skill={skills[0]} />
      <Skill skill={skills[1]} />
    </Paper>    
  );
}

export default App;