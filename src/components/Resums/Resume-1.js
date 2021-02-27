import React, {useRef} from 'react'
import { useSelector } from 'react-redux';

import ReactToPrint from 'react-to-print';

import Avatar from '../../assets/images/unnamed.png'

export class ComponentToPrint extends React.PureComponent {
  render() {
    return (
    <section className='resume-1'>
      <img src={this.props.personalData.avatar ? this.props.personalData.avatar.thumbUrl : Avatar} alt='avatar' className='avatar'/> 
      <div>
        {this.props.personalData.surname && this.props.personalData.name ?
        <div className='name'>{`${this.props.personalData.surname} ${this.props.personalData.name}`}</div> :
        <div className='empty fullname-empty'>Фио</div>
        }
      </div>
      <div>
        {this.props.careerData.position ?
          <div className='position'>{this.props.careerData.position}</div> :
          <div className='empty'>Должность</div>
          }
      </div>
      <div className='info'>
        <div className='title'>Личная информация</div>
        <div className='text'>
          <div className='left'>Гражданство:</div>
          <div className='right'>
            {this.props.personalData.country ?
            `${this.props.personalData.country}` :
            <div className='empty'>Не указано</div>
            }
          </div>
        </div>
        <div className='text'>
          <div className='left'>Дата рождения:</div>
          <div className='right'>
            {this.props.personalData.date ?
            `${this.props.personalData.date.split('-').reverse().join('.')}` :
            <div className='empty'>Не указано</div>
            }
          </div>
        </div>
        <div className='text'>
          <div className='left'>Пол:</div>
          <div className='right'>
            {this.props.personalData.gender ?
            `${this.props.personalData.gender}` :
            <div className='empty'>Не указано</div>
            }
          </div>
        </div>
        <div className='text'>
          <div className='left'>Почта:</div>
          <div className='right'>
            {this.props.personalData.email ?
            `${this.props.personalData.email}` :
            <div className='empty'>Не указано</div>
            }
          </div>
        </div>
        <div className='text'>
          <div className='left'>Пол:</div>
          <div className='right'>
            {this.props.personalData.phone ?
            `${this.props.personalData.phone}` :
            <div className='empty'>Не указано</div>
            }
          </div>
        </div>
      </div>
      <div className='info'>
        <div className='title'>Карьера</div>
        <div className='text'>
          <div className='left'>Должность:</div>
          <div className='right'>
            {this.props.careerData.position ?
            `${this.props.careerData.position}` :
            <div className='empty'>Не указано</div>
            }
          </div>
        </div>
        <div className='text'>
          <div className='left'>Зарплата:</div>
          <div className='right'>
          ${`${this.props.careerData.salaryMin} - ${this.props.careerData.salaryMax}`}
          </div>
        </div>
        <div className='text'>
          <div className='left'>График:</div>
          <div className='right'>
            {this.props.careerData.schedule ?
            `${this.props.careerData.schedule}` :
            <div className='empty'>Не указано</div>
            }
          </div>
        </div>
        <div className='text'>
          <div className='left'>Тип:</div>
          <div className='right'>
            {this.props.careerData.typeWork ?
            `${this.props.careerData.typeWork}` :
            <div className='empty'>Не указано</div>
            }
          </div>
        </div>
        <div className='text'>
          <div className='left'>Переезд:</div>
          <div className='right'>
            {this.props.careerData.moving ?
            'Возможен' : 'Невозможен' 
            }
          </div>
        </div>
        <div className='skills'>
            <div className='skills-title'>Ваши навыки:</div>
            <div className='skills-text'>
              {this.props.careerData.skills ?
              `${this.props.careerData.skills}` :
              <div className='empty'>Навыки</div>
              }
            </div>
        </div>
      </div>
      <div className='info'>
        <div className='title'>Опыт работы</div>
        {
          this.props.experience.map((item, id) => (
            <div className='text' key={id}>
              <div className='left'>{item.company}, {item.position}</div>
              <div className='right'>{item.date}</div>
            </div>
          ))
        }
      </div>
      <div className='info'>
        <div className='title'>Образование</div>
        {
          this.props.education.map((item, id) => (
            <div className='text' key={id}>
              <div className='left'>{item.collage}, {item.profession}</div>
              <div className='right'>{item.date}</div>
            </div>
          ))
        }
      </div>
    </section>
    );
  }
}

const Resume = () => {
  const {personalData, careerData, experience, education} = useSelector(state => ({
    personalData: state.info.personalData,
    careerData: state.info.careerData,
    experience: state.info.experience,
    education: state.info.education
  }))

  const componentRef = useRef();

  return (
    <section className='print'>
      <ComponentToPrint 
        personalData={personalData}
        careerData={careerData}
        experience={experience}
        education={education}
        ref={componentRef} 
      />
      <div className='btn-wrapper'>
        <ReactToPrint
          trigger={() => <button className='btn'>Скачать</button>}
          content={() => componentRef.current}
        />
      </div>
    </section>
  )
}



export default Resume

