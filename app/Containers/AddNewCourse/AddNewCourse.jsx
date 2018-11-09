import React from "react";
import CourseForm from '../CourseForm/CourseForm';
import {addCourse} from '../../api/calls';
import "./AddNewCourse.css";

class AddNewCourse extends React.Component {
  handleAddNewCourse = async (course)=>{
    const id = Math.floor((Math.random() * 100) + 1);
    const {price:{early_bird,normal}} = course;
    const data = { ...course, id};
    debugger;
    await addCourse(data);
  }

  render() {
    return (
      <div className="inner_wrapper">
        <h2>Add Course</h2>
        <CourseForm mode="add" handleCourse={this.handleAddNewCourse}></CourseForm>
        </div>
    );
  }
}

export default AddNewCourse;