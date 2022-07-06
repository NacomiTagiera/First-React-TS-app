import React from 'react';
import './Info.css';
import Intro from './Intro';
import Details from './Details';

function Info() {
  return (
    <div className='Info'> 
        <Intro />
        <Details />
    </div>
  );
}

export default Info;