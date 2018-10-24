import React from "react";
import { PropTypes } from "prop-types";

const CourseDetails = (props) => {
    const {
        id,
        title,
        imagePath,
        price: {
            normal,
            early_bird
<<<<<<< 5b06241aa56d5e6fceece0d8e72ffcd499aaafd6
        } = {},
=======
        },
>>>>>>> fetch course and save to state
        dates: {
            start_date: startDate,
            end_date: endDate
        } = {},
        duration,
        open,
        description
    } = props;    
<<<<<<< 5b06241aa56d5e6fceece0d8e72ffcd499aaafd6
<<<<<<< 35dabda61c986f8bab4fe1bacf844de4b4f61d26
    console.log(props);    
=======

>>>>>>> TypeChecking & eslint double quotes check
=======
    
>>>>>>> fetch course and save to state
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
<<<<<<< 5b06241aa56d5e6fceece0d8e72ffcd499aaafd6
<<<<<<< 35dabda61c986f8bab4fe1bacf844de4b4f61d26
    id: PropTypes.string,
=======
    id: PropTypes.number,
>>>>>>> TypeChecking & eslint double quotes check
=======
    id: PropTypes.string,
>>>>>>> fetch course and save to state
    title: PropTypes.string,
    imagePath: PropTypes.string,
    price: PropTypes.object,
    dates: PropTypes.object,
    duration: PropTypes.string,
    open: PropTypes.bool,
    description: PropTypes.string
};

export default CourseDetails;