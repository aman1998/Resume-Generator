import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './assets/styles/styles.scss';
import 'antd/dist/antd.css';

import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MainPage} exact/>
      </Switch>
  </BrowserRouter>
  )
}

export default App
