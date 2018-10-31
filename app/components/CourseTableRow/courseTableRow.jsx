import React from 'react';
import {Button} from 'react-bootstrap';
import "./CourseTableRow.css";

const CourseTableRow = ({row}) =>{
    const startDateFormatted = new Date(row.dates.start_date).toLocaleDateString("el-gr");
    const endDateFormatted = new Date(row.dates.end_date).toLocaleDateString("el-gr");
    const title = row.title;
    const price = row.price.normal;
    const bookable = row.open;
    return(
        <tr>
            <td>i</td>
            <td>{title}</td>
            <td>{bookable ? "✔" : "x"}</td>
            <td>{price} €</td>
            <td>{startDateFormatted} - {endDateFormatted}</td>
            <td>
                <Button bsSize="xsmall" bsStyle="info" href={`/courses/${row.id}`}>
                    View Details
                </Button>
            </td>
        </tr>
    );
};
export default CourseTableRow;