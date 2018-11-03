import React from 'react';
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
                <a className="btn btn-float" href={`/courses/${row.id}`}>
                    View Details
                </a>
            </td>
        </tr>
    );
};
export default CourseTableRow;