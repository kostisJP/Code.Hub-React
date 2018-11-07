import React from "react";
import CourseTableRow from '../CourseTableRow/CourseTableRow';
import "./CourseTable.css";

const CourseTable = ({title, courses}) => {
    
    return (
        <div className="flex_wrapper">

            <div className="panel_wrapper "> 
                        <h4 className="panel_header stat_wrapper">{title}</h4>
                        <table className="table_wrapper">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Bookable</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                courses.map(course=>{
                                    return <CourseTableRow key={course.id} row={course}/>;
                            })}
                        </tbody>
                     
                        </table>
                        <div className="btn-area">
                         <a className="btn btn-float btn-extreme grad_span">View All Courses</a>
                        </div>
                </div>
        </div>
        
    );
};
export default CourseTable;