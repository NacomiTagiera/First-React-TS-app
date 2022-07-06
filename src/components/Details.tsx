import React from 'react';
import './Details.css';
import Mail from './Mail';
import Location from './Location';
import Phone from './Phone';
import Link from './Link';

function Details() {
  return (
    <div className='Details'> 
        <Mail />
        <Location />
        <Phone />
        <Link />
    </div>
  );
}

export default Details;