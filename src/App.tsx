import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './App.css';
import  Buttons from './components/Button';
import Info from './components/Info';
import Header from './components/Header';
import Skills from './components/Skills';

function App() {
  return (
    <Box
      sx={{
        '& > :not(style)': {
          width: 500,
          height: 500,
          boxShadow: 4,
          borderRadius: 3,
        },
      }}
    >
      <Paper variant="outlined" className='card'>        
        <Buttons />
        <Header />
        <Info />
        <Skills />
        <Skills />
      </Paper>

    </Box>
  );
}

export default App;