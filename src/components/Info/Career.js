import React from 'react';
import { Select, Switch, InputNumber, Input } from 'antd';

import { getCareerData, setExperienceList } from '../../store/actions/info';

import { useSelector, useDispatch } from 'react-redux';

const { Option } = Select;
const { TextArea } = Input;

const Career = () => {

  const {careerData} = useSelector(state => ({
    careerData: state.info.careerData,
  }))

  const dispatch = useDispatch()

  const handlePosition= (position) => {
    dispatch(getCareerData({...careerData, position}))
  }

  const handleSchedule = (schedule) => {
    dispatch(getCareerData({...careerData, schedule}))
  }

  const handleTypeWork = (typeWork) => {
    dispatch(getCareerData({...careerData, typeWork}))
  }

  const handleMoving = (moving) => {
    dispatch(getCareerData({...careerData, moving}))
  }

  const handleSalaryMin = (salaryMin) => {
    dispatch(getCareerData({...careerData, salaryMin}))
  }

  const handleSkills = (skills) => {
    dispatch(getCareerData({...careerData, skills}))
  }

  const handleSalaryMax = (salaryMax) => {
    dispatch(getCareerData({...careerData, salaryMax}))
  }

  return (
    <section className='career container'>
      <h1 className='title'>Карьера</h1>
      <div className='career-content'>
        <div className='left'>
          <div className='form'>
            <div className='name'>Должность</div>
            <input className='input' onChange={(e) => handlePosition(e.target.value)}/>
          </div>
          <div className='form'>
            <div className='name'>График работы</div>
            <Select
              showSearch
              className='schedule'
              placeholder="График работы"
              onChange={handleSchedule}
            >
              <Option value="Полный день">Полный день</Option>
              <Option value="Сменный график">Сменный график</Option>
              <Option value="Гибкий график">Гибкий график</Option>
            </Select>
          </div>
          <div className='form'>
            <div className='name'>Тип работы</div>
            <Select
              showSearch
              className='typeWork'
              placeholder="Типы Работы"
              onChange={handleTypeWork}
            >
              <Option value="Офис">Офис</Option>
              <Option value="Удаленная работа">Удаленная работа</Option>
            </Select>
          </div>
          <div className='form'>
          <div className='name'>Ваши навыки</div>
            <TextArea rows={4} className='skills' onChange={(e) => handleSkills(e.target.value)}/>
          </div>
        </div>
        <div className='right'>
          <div className='form form-moving'>
            <div className='name'>Переезд</div>
            <Switch defaultChecked onChange={handleMoving} />
          </div>
          <div className='form form-moving'>
            <div className='name'>Зарплата</div>
            <div>
              <InputNumber
                defaultValue={100}
                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                onChange={handleSalaryMin}
              />
                -
              <InputNumber
                defaultValue={5000}
                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                onChange={handleSalaryMax}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Career