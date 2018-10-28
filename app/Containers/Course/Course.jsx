import React, { Component } from "react";
<<<<<<< HEAD
import { getInstructors, getCourseById, getCourseInstructors } from '../../api/calls';
import CourseDetails from '../../Components/CourseDetails/CourseDetails';
import Instructor from '../../Components/Instructor/Instructor';
=======
import { getAllCourses, getInstructors } from '../../api/calls';
import CourseDetails from '../../components/CourseDetails/CourseDetails';
import Instructor from '../../components/Instructor/Instructor';
>>>>>>> 80441ecb5a1bfca39e0793a780a11af61b73601c
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
    getCourseById(this.id).then(course => { 
        this.setState({course});
        return course;
      })  
      .then(course => {              
        getCourseInstructors(course.instructors).then(instructors=>this.setState({instructors}));
      });    
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