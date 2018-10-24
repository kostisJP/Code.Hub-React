import React, { Component } from "react";
import Instructor from "../Instructor/instructor";
import CourseDetails from "../CourseDetails/courseDetails";


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
    fetch("http://localhost:3000/courses")
     .then(result=>result.json())
     .then(courses=>this.getCourseById(courses, this.props.id));  

    fetch("http://localhost:3000/instructors")
      .then(result=>result.json())
      .then(instructors=>this.setState({instructors}));          
  }

  getCourseById(courses){    
    const course = courses.filter(course=>{ return course.id == this.id; });     
    this.setState({course: course[0]});    
  }

  render() {
    //console.log(this.state.course);        
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