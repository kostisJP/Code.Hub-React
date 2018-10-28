import React, { Component } from "react";
import { getAllCourses, getInstructors } from '../../api/calls';
import CourseDetails from '../../components/CourseDetails/CourseDetails';
import Instructor from '../../components/Instructor/Instructor';
import "./Course.css";


class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      course: {},
      instructors: []
    };

    this.id = props.id;
  }

  componentDidMount() {  
    //TODO: Make call for specific course
    getAllCourses().then(courses => this.getCourseById(courses, this.props.id)); 
    getInstructors().then(instructors=>this.setState({instructors}));      
  }

  getCourseById(courses){    
    const course = courses.filter(course=>{ return course.id == this.id; });     
    this.setState({course: course[0]});    
  }

  render() {         
    return (
      <div>           
        <CourseDetails           
          {...this.state.course}
        />
        <h3>Instructors</h3>
        {this.state.instructors.map(instructor=>
          <Instructor key={instructor.id} {...instructor} />)}        
      </div>
    );
  }
}

export default Course;