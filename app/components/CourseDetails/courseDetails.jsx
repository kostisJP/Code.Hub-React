import React from "react";
import { PropTypes } from "prop-types";
import "./CourseDetails.css";

const CourseDetails = (props) => {
    const {
        id,
        title,
        imagePath,
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
    console.log(props);    
    return (  
        
        <div className="row">
            <div className="col-md-12">
                <h2>{title} <span style={{color: "grey", fontSize: 16}}>({id})</span></h2>
                <div>
                    <img src={imagePath} className="img-responsive" style={{objectFit: "cover"}} />
                </div>
            </div>
            <div className="col-md-6">
                <p>Price: {normal}</p>
                <p>Bookable: {open ? "✔" : "x"}</p>
            </div>
            <div className="col-md-6">
                <p>Duration: {duration}</p>
                <p>Dates: {startDate} - {endDate}</p>
            </div>            
            <div className="col-md-12" dangerouslySetInnerHTML={{ __html: description} } />            
            <div>
                <button className="btn btn-primary">Edit</button> &nbsp;
                <button className="btn btn-danger">Delete</button>
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