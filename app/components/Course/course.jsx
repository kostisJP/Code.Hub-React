import React, { Component } from "react";
<<<<<<< 35dabda61c986f8bab4fe1bacf844de4b4f61d26
import Instructor from "../Instructor/instructor";
=======
import Instructor from "../instructor";
>>>>>>> TypeChecking & eslint double quotes check
import CourseDetails from "../CourseDetails/courseDetails";


class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {      
<<<<<<< 35dabda61c986f8bab4fe1bacf844de4b4f61d26
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
=======
      instructors: []       
    };
  }

  componentDidMount() {    
    fetch("http://localhost:3000/instructors")
      .then(result=>result.json())
      .then(instructors=>this.setState({instructors}));
>>>>>>> TypeChecking & eslint double quotes check
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