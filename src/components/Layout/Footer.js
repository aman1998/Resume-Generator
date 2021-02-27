import React from 'react';
import Logo from '../../assets/images/logo.jpg'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='logo-wrapper'>
          <img src={Logo} alt='logo' className='logo' />
          <div className='logo-text'>ResumeWriter</div>
        </div>
        <div>
          <div className='item'>Создатель сайта: Мырзабеков Амангельди</div>
          <div className='item'>Почта: 1998-amangeldi@mail.ru</div>
          <div className='item'>Год создания: 2021</div>
        </div>
        </div>
    </footer>
  )
}

export default Footer