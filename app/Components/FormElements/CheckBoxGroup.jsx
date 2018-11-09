import React from "react";
import PropTypes from "prop-types";

const CheckBoxGroup = (props) => {
  return (
    <div>
        <h5>{props.title}</h5>
        <div className="flex_wrapper flex_start">
        {
            (props.dataSource) && props.dataSource.map(({id, name}) => 
            <div className="flex_wrapper margin_wrapper">
            <label htmlFor={props.name}>
                <input className="inline-block" type="checkbox" 
                       name={props.name} 
                       key={id} 
                       checked={props.selectedValues.includes(id)} 
                       onChange={(e) => props.onChange(e.target.checked, id)}/>
                {name.first} {name.last}
            </label>   
            </div>
            )
        }
        </div>
    </div>
  );
};

CheckBoxGroup.propTypes = {
  
};

export default CheckBoxGroup;