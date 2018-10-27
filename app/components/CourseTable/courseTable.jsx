import React from "react";
import {Table,Button, Panel} from 'react-bootstrap';
import CourseTableRow from '../CourseTableRow/CourseTableRow';
import "./CourseTable.css";

const CourseTable = ({title, courses}) => {
    
    return (
        <div className="row">
        <div className="col-md-10 col-md-offset-1">
            <Panel bsStyle="primary"> 
                    <Panel.Heading>
                        <Panel.Title componentClass="h4">{title}</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <Table responsive striped bordered condensed hover>
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
                                    return <CourseTableRow key={course.id} row={course}/>
                            })}
                        </tbody>
                        </Table>
                    </Panel.Body>
                    <Panel.Footer>
                        <Button className="pull-right">view All</Button>
                    </Panel.Footer>
                </Panel>
        </div>
        </div>
        
    );
};
export default CourseTable;