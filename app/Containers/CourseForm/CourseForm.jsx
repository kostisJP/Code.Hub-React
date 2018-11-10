import React, { Component } from "react";
import PropTypes from "prop-types";
import { getInstructors } from "../../api/calls";
import InputText from "../../Components/FormElements/InputText";
import CheckBoxGroup from "../../Components/FormElements/CheckBoxGroup";
import InputTextArea from "../../Components/FormElements/InputTextArea";
import InputPriceEuro from "../../Components/FormElements/InputPriceEuro";
import "./CourseForm.css";

class CourseForm extends Component {
    state = {
        course: {
            title: "",
            imagePath: "",
            dates: {
                end_date: "",
                start_date: ""
            },
            description: "",
            duration: "",
            instructors: [],
            open: false,
            price: {
                early_bird: "0",
                normal: "0"
            }
        },
        instructors: []
    };

    constructor(props) {
        super(props);
        if (props.course) {
        }
    }

    //we no longer have any individual handleChange 
    //function for each type of input change. We now have ONE handleChange function 
    //that handles each type of input and its respective change event.
    //https://medium.com/@bretdoucette/understanding-this-setstate-name-value-a5ef7b4ea2b4

    handleInputFieldChange = event => {
        const target = event.target;
        let name = target.name;
        let value = target.value;
        const newCourse = { ...this.state.course };


        //If you know you’re going to use setState to update your component and you know you’re going to need the current state 
        //or the current props of your component to calculate the next state, passing in a function as the first parameter of 
        //this.setState instead of an object is the recommended solution.
        //https://medium.com/@wisecobbler/using-a-function-in-setstate-instead-of-an-object-1f5cfd6e55d1

        this.setState(oldState => {

            // define some special cases
            if (name == "open") {
                debugger;
                // toggle open
                value = !oldState.course.open;
            }

            if (name == "start_date") {
                name = "dates";
                value = {
                    start_date: value,
                    end_date: oldState.course.dates.end_date
                };
            }

            if (name == "end_date") {
                name = "dates";
                value = {
                    start_date: oldState.course.dates.start_date,
                    end_date: value
                };
            }

            if (name == "early_bird") {
                name = "price";
                value = {
                    early_bird: value,
                    price:oldState.course.price.normal
                }
            }

            if (name == "normal") {
                name = "price";
                value = {
                    early_bird: oldState.course.price.early_bird,
                    normal: value
                }
            }
            return {
                course: { ...oldState.course, [name]: value }
            };
        });
    };

    handleInstructorsChange = (checked, id) => {
        console.log(checked, id);
        
        this.setState((oldState)=>{
            let newInstructors = this.state.course.instructors;
            if(checked){
                newInstructors.push(id);
            }
            else{
                let index = newInstructors.indexOf(id);
                newInstructors.splice(index,1);
            }
            return {course:
                    {...oldState.course, instructors:newInstructors}
                };
        });
    };

    onHandleCourse = (event) => {
        event.preventDefault();
        //console.log(this.state.course);
        this.props.handleCourse(this.state.course);
        this.setState({course:null});
    };

    async componentDidMount() {
        getInstructors().then(data => {
            this.setState({ instructors: data });
        });

        //console.log(this.state.instructors);
    }

    render() {
        const mode = this.props.mode;

        return (
            <form onSubmit={this.onHandleCourse}>
                <InputText
                    name="title"
                    placeholder="ex: React Course"
                    value={this.state.course.title}
                    onChange={this.handleInputFieldChange}
                />

                <InputText
                    name="duration"
                    placeholder="ex: 1 week"
                    value={this.state.course.duration}
                    onChange={this.handleInputFieldChange}
                />

                <InputText
                    name="imagePath"
                    placeholder="ex: https://tinyurl.com/react.jpg"
                    value={this.state.course.imagePath}
                    onChange={this.handleInputFieldChange}
                />

                <div className="flex_wrapper max_wrapper">
                    <input
                        type="checkbox"
                        name="open"
                        checked={this.state.course.open}
                        onChange={this.handleInputFieldChange}
                        
                    />
                    <label className="no-margin" htmlFor="bookable">Bookable</label>
                </div>

                <CheckBoxGroup
                    name="instructors"
                    title="Instructors"
                    dataSource={this.state.instructors}
                    selectedValues={this.state.course.instructors}
                    onChange={this.handleInstructorsChange}
                />

                <h5>Project Description</h5>
                <InputTextArea
                    name="description"
                    placeholder="ex: This is a project about react"
                    value={this.state.course.description}
                    onChange={this.handleInputFieldChange}
                />

                <h5>Dates</h5>

                <InputText
                    name="start_date"
                    placeholder="Start Date"
                    value={this.state.course.dates.start_date}
                    onChange={this.handleInputFieldChange}
                />

                <InputText
                    name="end_date"
                    placeholder="End Date"
                    value={this.state.course.dates.end_date}
                    onChange={this.handleInputFieldChange}
                />

                <h5>Price</h5>
                <InputPriceEuro
                    name="early_bird"
                    placeholder="Early Bird"
                    value={this.state.course.price.early_bird}
                    onChange={this.handleInputFieldChange}
                />
                <InputPriceEuro
                    name="normal"
                    placeholder="Normal"
                    value={this.state.course.price.normal}
                    onChange={this.handleInputFieldChange}
                />
                <div>
                    <button className="btn btn-float btn-extreme grad_span btn-margin" type="submit">
                        {this.props.mode == "add" ? "Add Course" : "Edit Course"}
                    </button>
                </div>
            </form>
        );
    }
}

CourseForm.PropTypes = {
    course: PropTypes.object,
    mode: PropTypes.oneOf(["add", "edit"])
};

export default CourseForm;
