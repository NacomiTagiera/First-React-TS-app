import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function DetailsItem(props: { icon: React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal; text: string }) {
  return (    
      <Box sx={{
        textAlign: 'center',
      }}>
        <Typography>{props.icon}</Typography>
        <Typography>{props.text}</Typography>
      </Box>
  );
}

export default DetailsItem;