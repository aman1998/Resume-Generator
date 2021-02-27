import React from 'react';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
          <h1 className='title'>Онлайн конструктор резюме</h1>
          <p className='text'>
          Resume Writer — это сервис, задача которого — создание CV абсолютно бесплатно без регистрации. Присуствует несколько разных шаблонов на разный вкус.
          </p>
          <p className='text'>
          Создание эффективного резюме это один из главных факторов к нахождению работы твоей мечты. Без хорошего резюме найти работу будет очень сложно.
          </p>
          <Link className='btn' to='info' smooth={true} duration={1500}>Создать резюме</Link>
      </div>
    </section>
  )
}

export default About