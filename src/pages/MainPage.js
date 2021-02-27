import React from 'react';

import PageTemplate from '../components/Template/PageTemplate';
import About from '../components/About/About';
import Steps from '../components/Steps/Steps';
import PersonalData from '../components/Info/PersonalData';
import Career from '../components/Info/Career';
import Experience from '../components/Info/Experience';
import Education from '../components/Info/Education';
import AboutMe from '../components/Info/About';
import Resume1 from '../components/Resums/Resume-1';
import Resume2 from '../components/Resums/Resume-2';

import { Tabs } from 'antd';

const { TabPane } = Tabs;

const MainPage = () => {
  return (
    <PageTemplate>
      <About />
      <Steps />
      <Tabs defaultActiveKey="1" centered style={{margin: '50px 0', minHeight: '100vh'}} id='info'>
        <TabPane tab="Ввод данных" key="1" >
          <PersonalData />
          <Career />
          <Experience />
          <Education />
          {/* <AboutMe /> */}
        </TabPane>
        <TabPane tab="Шаблон" key="2" className='container-2'>
          <Tabs type="card">
            <TabPane tab="Шаблон 1" key="1" >
              <Resume1 />
            </TabPane>
            <TabPane tab="Шаблон 2" key="2">
              <Resume2 />
            </TabPane>
          </Tabs>
        </TabPane>
        {/* <TabPane tab="Скачать" key="3">
          Content of Tab Pane 3
        </TabPane> */}
      </Tabs>
    </PageTemplate>
  )
}

export default MainPage