import { 
    GET_PERSONAL_DATA, 
    GET_CAREER_DATA, 
    SET_EXPERIENCE_LIST,
    SET_EDUCATION_LIST
  } from "../actionTypes";

export const getPersonalData = (personalData) => ({
  type: GET_PERSONAL_DATA,
  personalData,
})

export const getCareerData = (careerData) => ({
  type: GET_CAREER_DATA,
  careerData,
})

export const setExperienceList = (experience) => ({
  type: SET_EXPERIENCE_LIST,
  experience
})

export const setEducationList = (education) => ({
  type: SET_EDUCATION_LIST,
  education
})

