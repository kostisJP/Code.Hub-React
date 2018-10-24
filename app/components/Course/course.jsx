import React, { Component } from "react";
import Instructor from "../instructor";
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
        />
        <h3>Instructors</h3>
        {this.state.instructors.map(instructor=>
          <Instructor key={instructor.id} {...instructor} />)}        
      </div>
    );
  }
}

export default Course;
