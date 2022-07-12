import React from 'react';
import Box from '@mui/material/Box';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DetailsItem from './DetailsItem';

function Details() {
  const details = [
    {icon: <ContactMailIcon />, text: 'email@email.com'},
    {icon: <LocationOnIcon />, text: 'Chrząszczyrzewoszyce'},
    {icon: <LocalPhoneIcon />, text: '123-456-789'}
  ];

  return (
    <Box sx={{    
      display: 'flex',
      justifyContent: 'space-between'
    }}> 
      
      <DetailsItem icon={details[0].icon} text={details[0].text} />
      <DetailsItem icon={details[1].icon} text={details[1].text} />
      <DetailsItem icon={details[2].icon} text={details[2].text} />
        
    </Box>
  );
}

export default Details;