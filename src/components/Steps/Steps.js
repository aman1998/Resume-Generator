import React from 'react';

import Icon1 from '../../assets/images/form.svg';
import Icon2 from '../../assets/images/resume.svg';
import Icon3 from '../../assets/images/download.svg';

const Steps = () => {
  const steps = [
    {id: 1, title: 'Введите данные', icon: Icon1},
    {id: 2, title: 'Выберите шаблон', icon: Icon2},
    {id: 3, title: 'Скачайте резюме', icon: Icon3}
  ]

  return (
    <section className='block container'>
      <h1 className='title'>Процесс создания резюме</h1>
      <p className='text'>Для этого достаточно выполнить три простых действия:</p>
      <div className='steps'>
        {
          steps.map(item => (
            <div className='step' key={item.id}>
              <img src={item.icon} alt='icon' className='icon'/>
              <div className='step-title'>{item.title}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Steps