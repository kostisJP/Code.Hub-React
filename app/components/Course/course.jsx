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
<<<<<<< 5b06241aa56d5e6fceece0d8e72ffcd499aaafd6
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
=======
      course: {},
      instructors: []
>>>>>>> fetch course and save to state
    };

    this.id = props.id;
  }

  componentDidMount() {      
    fetch("http://localhost:3000/courses")
     .then(result=>result.json())
     .then(courses=>this.getCourseById(courses, this.props.id));  

    fetch("http://localhost:3000/instructors")
      .then(result=>result.json())
<<<<<<< 5b06241aa56d5e6fceece0d8e72ffcd499aaafd6
      .then(instructors=>this.setState({instructors}));
>>>>>>> TypeChecking & eslint double quotes check
  }

  render() {
    //console.log(this.state.course);        
    return (
      <div>           
        <CourseDetails           
          {...this.state.course}
=======
      .then(instructors=>this.setState({instructors}));          
  }

  getCourseById(courses){    
    const course = courses.filter(course=>{ return course.id == this.id; });     
    this.setState({course: course[0]});    
  }

  render() {
    console.log(this.state.course);        
    return (
      <div>           
        <CourseDetails 
          id="01"
          title={this.state.course.title}
          imagePath={this.state.course.imagePath}
          price={{normal:1, early_bird:500}}
          open={this.state.course.open}
          duration={this.state.course.duration}
          //dates={this.state.course.dates} // why undefined ???
          dates={{"start_date": "2018-09-27", "end_date": "2018-09-28"}}
          description={this.state.course.description}
          //{...this.state.course}
>>>>>>> fetch course and save to state
        />
        <h3>Instructors</h3>
        {this.state.instructors.map(instructor=>
          <Instructor key={instructor.id} {...instructor} />)}        
      </div>
    );
  }
}

export default Course;