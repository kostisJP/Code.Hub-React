import React from "react";
import CourseForm from '../CourseForm/CourseForm';
import addCourse from '../../api/calls';
import "./AddNewCourse.css";

class AddNewCourse extends React.Component {
  handleAddNewCourse = async (course)=>{
    await addCourse(course)
  }

  render() {
    return (
      <div className="inner_wrapper">
        <h2>Add Course</h2>
        <CourseForm mode="add"></CourseForm>
        </div>
    );
  }
}

export default AddNewCourse;