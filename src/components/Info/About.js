import React from 'react'

import { Input } from 'antd';

const { TextArea } = Input;

const About = () => {
  return (
    <section className='about-me container'>
      <h1 className='title'>О себе</h1>
      <TextArea rows={6} />
    </section>
  )
}

export default About