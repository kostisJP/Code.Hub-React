import React from "react";
import PropTypes from "prop-types";

function Box(props){
    const {
        title, 
        number
    } = props;

    return (
        <div>
            {title} &nbsp; {number}
        </div>
    );
} 

Box.propTypes = {
    title: PropTypes.string,
    number: PropTypes.number
};

export default Box;