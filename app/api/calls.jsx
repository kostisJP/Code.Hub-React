import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const getData = path => {
  return axios.get(`${BASE_URL}${path}`).then(({ data }) => data);
};

export const getAllCourses = () => getData("/courses");
export const getDashboardStats = () => getData("/stats");
export const getInstructors = () => getData("/instructors");
