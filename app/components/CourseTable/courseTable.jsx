import React from "react";
import {Table,Button, Panel} from 'react-bootstrap';
import CourseTableRow from '../CourseTableRow/CourseTableRow';
import "./CourseTable.css";

const CourseTable = ({title, courses}) => {
    
    return (
        <div className="flex_wrapper">

            <div className="panel_wrapper "> 
                        <h4 className="panel_header stat_wrapper">{title}</h4>
                    <Panel.Body>
                        <table className="table_wrapper">
                        <div className="table_inner_wrapper">
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
                        </div>
                        </table>
                    </Panel.Body>
                    <Panel.Footer>
                        <Button className="btn btn-float">view All</Button>
                    </Panel.Footer>
                </div>
        </div>
        
    );
};
export default CourseTable;