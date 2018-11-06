import React from 'react';
import { PropTypes } from 'prop-types';
import "./CourseCard.css";

const CourseCard = (props) => {
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

    return (
        <div className="card">
            <div className="cardHeader">
                {title}
            </div>
            <img src={imagePath} alt="Course" />
            <div className="container">
                <p>Price: {normal}&euro; | Bookable {open ? "✔" : "x"}</p>
                <p>Duration: {duration}</p> 
                <p>Dates: {startDate} - {endDate}</p> 
                <a className="btn btn-float" href={`/courses/${id}`}>
                     Details
                </a>
            </div>
        </div>
    );
};

CourseCard.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    imagePath: PropTypes.string,
    price: PropTypes.object,
    dates: PropTypes.object,
    duration: PropTypes.string,
    open: PropTypes.bool,
    description: PropTypes.string
};

export default CourseCard;