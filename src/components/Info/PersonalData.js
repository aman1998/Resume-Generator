import React, {useState} from 'react';

import { getPersonalData } from '../../store/actions/info';

import { useSelector, useDispatch } from 'react-redux';

import { DatePicker, Select,  Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

const { Option } = Select;

const Info = () => {
  const [fileList, setFileList] = useState([]);

  const {personalData} = useSelector(state => ({
    personalData: state.info.personalData
  }))

  const dispatch = useDispatch()

  // const [upload, setUpload] = useState(false)

  const handleImg = async ({ fileList: newFileList }) => {
    await setFileList(newFileList);
    console.log(newFileList)
    dispatch(getPersonalData({...personalData, avatar: newFileList[0]}))
  };

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const handleCountry = (country) => {
    dispatch(getPersonalData({...personalData, country}))
  }

  const handleGender = (gender) => {
    dispatch(getPersonalData({...personalData, gender}))
  }

  const handleSurname = (surname) => {
    dispatch(getPersonalData({...personalData, surname}))
  }

  const handleName = (name) => {
    dispatch(getPersonalData({...personalData, name}))
  }

  const handlePhone = (phone) => {
    dispatch(getPersonalData({...personalData, phone}))
  }

  const handleEmail = (email) => {
    dispatch(getPersonalData({...personalData, email}))
  }
  
  const handleDate = (dateLocale, dateString) => {
    console.log(dateLocale)
    let date = dateString
    dispatch(getPersonalData({...personalData, date}))
  }

  return (
    <section className='personal container'>
      <h1 className='title'>Личные данные</h1>
      <div className='personal-content'>
        <div className='left'>
          <div className='form'>
            <div className='name'>Фамилия</div>
            <input className='input' onChange={(e) => handleSurname(e.target.value)}/>
          </div>
          <div className='form'>
            <div className='name'>Имя</div>
            <input className='input' onChange={(e) => handleName(e.target.value)}/>
          </div>
          <div className='form'>
            <div className='name'>Пол</div>
            <Select
              showSearch
              className='gender'
              placeholder="Укажите свой пол"
              onChange={handleGender}
            >
              <Option value="Мужской">Мужской</Option>
              <Option value="Женский">Женский</Option>
              <Option value="Другое">Другое</Option>
            </Select>
          </div>
          <div className='form'>
            <div className='name'>Дата рождения</div>
            <DatePicker 
              placeholder="Дата рождения"
              onChange={handleDate} 
              className='input'
            />
          </div>
          <div className='form'>
            <div className='name'>Гражданство</div>
            <Select
              showSearch
              className='country'
              placeholder="Страна проживания"
              onChange={handleCountry}
            >
              <Option value="Кыргызстан">Кыргызстан</Option>
              <Option value="Россия">Россия</Option>
              <Option value="Казахстан">Казахстан</Option>
              <Option value="Беларусь">Беларусь</Option>
              <Option value="Украина">Украина</Option>
              <Option value="Узбекистан">Узбекистан</Option>
            </Select>
          </div>
          <div className='form'>
            <div className='name'>Почта</div>
            <input className='input' type='email' onChange={(e) => handleEmail(e.target.value)}/>
          </div>
          <div className='form'>
            <div className='name'>Телефон</div>
            <input 
              className='input' 
              placeholder='+996 555 123 456' 
              onChange={(e) => handlePhone(e.target.value)}/>
          </div>
        </div>
        <div className='right'>
        <ImgCrop rotate className='upload'>
          <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onChange={handleImg}
          onPreview={onPreview}
        >
          {fileList.length < 1 && '+ Upload'}
          </Upload> 
        </ImgCrop>
        </div>
      </div>
    </section>
  )
}

export default Info