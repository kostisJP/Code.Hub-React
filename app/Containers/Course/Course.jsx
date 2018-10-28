import React, { Component } from "react";
import { getInstructors, getCourseById, getCourseInstructors } from '../../api/calls';
import CourseDetails from '../../Components/CourseDetails/CourseDetails';
import Instructor from '../../Components/Instructor/Instructor';
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