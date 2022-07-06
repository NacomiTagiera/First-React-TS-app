import React from 'react';
import './Header.css';
import Photo from '../components/Photo';
import Name from '../components/Name';

function Header() {
  return (
    <div className='Header'>
        <Photo />
        <Name />
    </div>
  );
}

export default Header;