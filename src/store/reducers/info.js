import { 
    GET_PERSONAL_DATA, 
    GET_CAREER_DATA, 
    SET_EXPERIENCE_LIST,
    SET_EDUCATION_LIST
  } from "../actionTypes"

const initialState = {
  personalData: {
    surname: '',
    name: '',
    gender: '',
    date: '',
    country: '',
    phone: '',
    email: '',
    avatar: ''
  },
  careerData: {
    position: '',
    schedule: '',
    typeWork: '',
    skills: '',
    moving: true,
    salaryMin: '100',
    salaryMax: '5000'
  },
  experience: [],
  education: []
}

const info = (state = initialState, action) => {
switch (action.type) {
case GET_PERSONAL_DATA:
  return {
    ...state,
    personalData: {
      ...state.personalData,
      surname: action.personalData.surname,
      name: action.personalData.name,
      gender: action.personalData.gender,
      date: action.personalData.date,
      country: action.personalData.country,
      phone: action.personalData.phone,
      email: action.personalData.email,
      avatar: action.personalData.avatar,
    }
  };
case GET_CAREER_DATA:
  return {
    ...state,
    careerData: {
      ...state.careerData,
      position: action.careerData.position,
      schedule: action.careerData.schedule,
      typeWork: action.careerData.typeWork,
      skills: action.careerData.skills,
       moving: action.careerData. moving,
      salaryMin: action.careerData.salaryMin,
      salaryMax: action.careerData.salaryMax,
    }
  };
  case SET_EXPERIENCE_LIST:
    return {
      ...state,
      experience: [...state.experience, action.experience]
    };
  case SET_EDUCATION_LIST:
    return {
      ...state,
      education: [...state.education, action.education]
    };
  default:
  return state
}
}

export default info