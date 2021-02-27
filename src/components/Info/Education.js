import React, {useState} from 'react'
import { Modal, Button, DatePicker, Table } from 'antd';

import { setEducationList } from '../../store/actions/info';

import {  useDispatch, useSelector } from 'react-redux';

const { RangePicker } = DatePicker;

const Education = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [collage, setCollege] = useState('')
  const [profession, setProfession] = useState('')
  const [date, setDate] = useState('')
  const [validate, setValidate] = useState(false)

  const {education} = useSelector(state => ({
    education: state.info.education,
  }))

  const dispatch = useDispatch()


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    if(date && collage && profession) {
      await dispatch(setEducationList({collage, profession, date}))
      setValidate(false)
      setCollege('')
      setProfession('')
      setIsModalVisible(false);
    }
    else {
      setValidate(true)
    }
  };

  const handleCancel = () => {
    setCollege('')
    setProfession('')
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
      title: 'Место учебы',
      dataIndex: 'collage',
      key: 'collage',
    },
    {
      title: 'Факультет',
      dataIndex: 'profession',
      key: 'profession',
    },
    {
      title: 'Период',
      dataIndex: 'date',
      key: 'date',
    }
  ];

  return (
    <section className='experience container'>
      <h1 className='title'>Образование</h1>
      <Table columns={columns} dataSource={education} key={collage} rowKey='collage' />
      <div className='btn'>
        <Button onClick={showModal} className='btn'>
          Добавить учебу
        </Button>
      </div>
      <Modal title="Работа" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} className='modal'>
        <div className='modal-form'>
          <div className='name'>Место учебы</div>
          <input className='input' onChange={(e) => setCollege(e.target.value)} value={collage}/>
        </div>
        <div className='modal-form'>
          <div className='name'>Факультет</div>
          <input className='input' onChange={(e) => setProfession(e.target.value)} value={profession}/>
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

export default Education