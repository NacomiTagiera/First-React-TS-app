import React from 'react';
import './Skills.css';
import Button from '@mui/material/Button';

function Skills() {

    const skills: string[] = ['JS', 'C#', 'C++', 'Java', 'Bootstrap', 'React.js', 'Vue.js', 'Angular', 'Next.js', 'Node.js', 'Tailwind.css', 'Scala', 'Kubernetes', 'Android', 'iOS', 'Svelte'];
    let index: number = Math.floor(Math.random()*skills.length);
    let skill = skills.splice(index, 1);

    return (
    <div className='button'> 
        <Button variant="contained" disabled>
            {skill}            
        </Button> 
    </div>
    );    
}

export default Skills;