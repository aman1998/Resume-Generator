import React from 'react';
import Logo from '../../assets/images/logo.jpg';

const Header = () => {
  return (
    <header className='header'>
      <img src={Logo} alt='logo' className='logo'/>
      <div className='text'>ResumeWriter</div>
    </header>
  )
}

export default Header