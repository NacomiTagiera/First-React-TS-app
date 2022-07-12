import React from 'react';
import Box from '@mui/material/Box';
import Photo from '../components/Photo';
import Name from '../components/Name';

function Header() {

  const myName: string = "Jakub Pawlak";
  const myJob: string = "Front-end Dev";

  return (
    <Box sx={{
      my: 3,
      ml: 5,
    }}>
      <Photo />
      <Name myName={myName} myJob={myJob} />
    </Box>
  );
}

export default Header;