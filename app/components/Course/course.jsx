import React, { Component } from 'react';
import Instructor from "../instructor";
import CourseDetails from "../CourseDetails/courseDetails";


class Course extends Component {
  constructor() {
    super();
    this.state = {      
      instructors: []       
    }
  }  

  componentDidMount() {    
    fetch('http://localhost:3000/instructors')
      .then(result=>result.json())
      .then(instructors=>this.setState({instructors}))
  }

  render() {    
    return (
      <div>        
        <CourseDetails 
          id="01"
          title="React"
          imagePath="https://www.codehub.gr/wp-content/uploads/2018/04/ScrumMaster_FB_Post_1200x1200.jpg"
          price={{normal:1, early_bird:500}}
          open={true}
          duration="2 days"
          dates={{"start_date": "2018-09-27", "end_date": "2018-09-28"}}
          description="<p>This <strong>innovative Scrum class</strong> won’t be like any other you’ve heard of, with an unconventional focus on the deeply human foundations at work in teams building stuff together.</p><p>This two-day seminar is designed to give aspiring and beginning ScrumMasters and team members the foundations of Scrum and Agile practice. Chock full of exercises, the seminar creates lasting memories and learnings you can carry through into your team so you can avoid common Agile pitfalls. The seminar is designed and taught by <strong>Jim Coplien</strong>, <strong>author of Organizational Patterns and Lean/Agile Process and Architecture Coach</strong>.</p>"
        />
        <h3>Instructors</h3>
        {this.state.instructors.map(instructor=>
          <Instructor key={instructor.id} {...instructor} />)}
      </div>
    );
  }
}

export default Course;
