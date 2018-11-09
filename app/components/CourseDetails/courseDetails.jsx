import React from "react";
import { PropTypes } from "prop-types";
import "./CourseDetails.css";

const CourseDetails = (props) => {
    const {
        id,
        title,
        imageCover,
        price: {
            normal,
            early_bird
        } = {},
        dates: {
            start_date: startDate,
            end_date: endDate
        } = {},
        duration,
        open,
        description
    } = props;    
     
    return (  
        
        <div className="course_details">
            <div>
                <h2 className={"inner_wrapper course_single_header bg-"+props.id}>{title} <span style={{color: "grey", fontSize: 16}}>({id})</span></h2>
                <div className="svg_notch"></div>
                <div>
                    <img className="cover-image" src={imageCover} style={{objectFit: "cover"}} />
                </div>
            </div>
            <div className="inner_wrapper_2 flex_wrapper stat_wrapper">
                <p className="course-para"><i className="course-icons icon-price"></i><span className="course-bold">Price :  </span> {normal}</p>
                <p className="course-para"><i className="course-icons icon-bookable"></i><span className="course-bold">Bookable :  </span> {open ? "✔" : "x"}</p>
                <p className="course-para"><i className="course-icons icon-duration"></i><span className="course-bold">Duration :  </span> {duration}</p>
                <p className="course-para"><i className="course-icons icon-dates"></i><span className="course-bold">Dates :  </span> {startDate} - {endDate}</p>
            </div>           
            <div className="inner_wrapper course-desc" dangerouslySetInnerHTML={{ __html: description} } />            
            <div className="inner_wrapper">
                <a className="btn btn-float">Edit</a> &nbsp;
                <a className="btn btn-float btn-delete">Delete</a>
            </div>
        </div>
    );
};
 
CourseDetails.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    imagePath: PropTypes.string,
    price: PropTypes.object,
    dates: PropTypes.object,
    duration: PropTypes.string,
    open: PropTypes.bool,
    description: PropTypes.string
};

export default CourseDetails;