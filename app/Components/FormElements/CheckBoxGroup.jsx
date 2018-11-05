import React from "react";
import PropTypes from "prop-types";

const CheckBoxGroup = (props) => {
  return (
    <div>
        <h5>{props.title}</h5>
        {
            (props.dataSource) && props.dataSource.map(({id, name}) => 
            <label htmlFor={props.name}>
                <input type="checkbox" 
                       name={props.name} 
                       key={id} 
                       checked={props.selectedValues.includes(id)} 
                       onChange={(e) => props.onChange(e.target.checked, id)}/>
                {name.first} {name.last}
            </label>   
            )
        }
    </div>
  );
};

CheckBoxGroup.propTypes = {
  
};

export default CheckBoxGroup;