import React, { Component } from "react";
import { getCourseById, getCourseInstructors, deleteCourse} from '../../api/calls';
import CourseDetails from '../../Components/CourseDetails/CourseDetails';
import Instructor from '../../Components/Instructor/Instructor';
import Modal from '../../Components/Modal/Modal';
import CourseForm from '../CourseForm/CourseForm';
import "./Course.css";



class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      course: {},
      instructors: [],
      showDeleteModal: false,
      showEditModal: false
    };

    this.id = props.match.params.id;
  }

  handleDeleteCourse = async () => {
    console.log('course delete');
    const { course } = this.state;
    const { history } = this.props;
    debugger;
    await deleteCourse(course.id);
    
    history.push("/courses");
  }

  handleUpdateCourse = async (course) => {
    const { history } = this.props;
    const { price: { early_bird, normal } } = course;
    const newPrice = {
      early_bird: parseInt(early_bird, 10),
      normal: parseInt(normal, 10),
    };
    const data = { ...course, price: newPrice };

    await updateCourse(data);
    history.push("/courses");
  }

  componentDidMount() {
    getCourseById(this.id).then(course => { 
        this.setState({course});        
        return course;
      })  
      .then(course =>              
        getCourseInstructors(course.instructors).then(instructors => this.setState({instructors}))
      );    
  }

  render() {             
    return (
        
        // <Modal show={this.state.showEditModal} handleClose={this.toggleEditModal} >
        //   <CourseForm course={this.state.course} handleCourse={this.handleUpdateCourse}/>
        // </Modal>
      <div>               
        <CourseDetails           
          {...this.state.course}
          handleDelete={this.handleDeleteCourse}
          handleEdit={this.handleUpdateCourse}
        />
        <div className="inner_wrapper">
          <h3 className="header-backdrop">Instructors</h3>
          {this.state.instructors.map(instructor=>
            <Instructor key={instructor.id} {...instructor} />)}  
        </div>      
      </div>
    );
  }
}

export default Course;