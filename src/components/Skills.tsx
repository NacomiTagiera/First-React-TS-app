import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Skill(props: any) {

    return (
    <Box sx={{
        display: 'inline-block',
        margin: 3
    }}> 
        <Button variant="contained" disabled>
            {props.skill}            
        </Button> 
    </Box>
    );    
}

export default Skill;