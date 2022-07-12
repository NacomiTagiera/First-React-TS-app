import React from 'react';
import Box from '@mui/material/Box';
import Intro from './Intro';
import Details from './Details';

function Info() {
  const description: string = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero incidunt, dicta consequatur aspernatur maxime nesciunt!';

  return (
    <Box sx={{
      borderTop: 1,
      borderColor: 'grey.500',
      padding: 3,
      marginTop: 1,
      fontSize: 20,
    }}> 
        <Intro description={description} />
        <Details />
    </Box>
  );
}

export default Info;