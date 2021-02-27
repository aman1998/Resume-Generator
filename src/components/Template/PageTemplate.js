import React, {useEffect} from 'react';

import Header from '../Layout/Header';
import Footer from "../Layout/Footer";

import { BackTop } from 'antd';

// Обертка для всего сайта
const PageTemplate = (props) => {

  const style = {
    height: 50,
    width: 50,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#6aa6d1',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
  };

  return (
    <div className='page'>
      <Header />
      <main>
        {props.children}
        <BackTop>
          <div style={style}>Вверх</div>
        </BackTop>
      </main>
      <Footer />
    </div>
  )
}

export default PageTemplate