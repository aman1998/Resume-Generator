import React, {useState} from 'react'
import { Modal, Button, DatePicker, Table } from 'antd';

import { setExperienceList } from '../../store/actions/info';

import {  useDispatch, useSelector } from 'react-redux';

const { RangePicker } = DatePicker;

const Experience = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [company, setCompany] = useState('')
  const [position, setPosition] = useState('')
  const [date, setDate] = useState('')
  const [validate, setValidate] = useState(false)

  const {experience} = useSelector(state => ({
    experience: state.info.experience,
  }))

  const dispatch = useDispatch()


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    if(date && company && position) {
      await dispatch(setExperienceList({company, position, date}))
      setValidate(false)
      setCompany('')
      setPosition('')
      setIsModalVisible(false);
    }
    else {
      setValidate(true)
    }
  };

  const handleCancel = () => {
    setCompany('')
    setPosition('')
    setIsModalVisible(false);
    setValidate(false)
  };

  const handleDate = (dateLocale, dateString) => {
    console.log(dateLocale)
    const dateBefore = dateString[0]
    const dateAfter = dateString[1]
    setDate(`${dateBefore} - ${dateAfter}`)
  }

  const columns = [
    {
      title: 'Место работы',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Должность',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Период',
      dataIndex: 'date',
      key: 'date',
    }
  ];

  return (
    <section className='experience container'>
      <h1 className='title'>Опыт работы</h1>
      <Table columns={columns} dataSource={experience} key={company} rowKey='company' />
      <div className='btn'>
        <Button onClick={showModal} className='btn'>
          Добавить работу
        </Button>
      </div>
      <Modal title="Работа" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} className='modal'>
        <div className='modal-form'>
          <div className='name'>Компания</div>
          <input className='input' onChange={(e) => setCompany(e.target.value)} value={company}/>
        </div>
        <div className='modal-form'>
          <div className='name'>Должность</div>
          <input className='input' onChange={(e) => setPosition(e.target.value)} value={position}/>
        </div>
        <div className='modal-form'>
          <div className='name'>Период</div>
          <RangePicker picker="year" className='input' onChange={handleDate} />
        </div>
        {validate ? <div className='validate'>Заполните данные!</div> : null}
      </Modal>
    </section>
  );
};

export default Experience