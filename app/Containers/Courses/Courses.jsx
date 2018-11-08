import React  from "react";
import "./Courses.css";
import { getAllCourses } from "../../api/calls";
import CourseCard from "../../components/CourseCard/CourseCard";

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {      
      courses: []      
    };    
  }

  componentDidMount(){
    getAllCourses().then(courses => this.setState({courses}));
  }

  render() {
    return (
      <div className="inner_wrapper">
        <h2>Courses <span style={{color: "grey", fontSize: 16}}>(all)</span></h2>     
        <div className="flex_wrapper card_wrapper">   
        {this.state.courses.map(course=>
          <CourseCard key={course.id} {...course} />)}
        </div>
      </div>
    );
  }
}

export default Courses;