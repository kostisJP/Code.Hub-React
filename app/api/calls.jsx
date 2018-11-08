import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const getData = path => {
  return axios.get(`${BASE_URL}${path}`).then(({ data }) => data);
};


export const getAllCourses = () => getData("/courses");
export const getDashboardStats = () => getData("/stats");
export const getInstructors = () => getData("/instructors");
export const getCourseById = (id) => getData(`/courses/${id}`);
export const addCourse = (data) => axios.post(`${BASE_URL}/courses`, data);

export const getCourseInstructors = (instructorId) => {
  return getData("/instructors").then(instructors => {   
    let courseInstructors = [];

    instructorId.forEach(id => {      
      courseInstructors.push(instructors.filter(instructor => instructor.id == id)[0]);
    });

    return courseInstructors;
  });  
};