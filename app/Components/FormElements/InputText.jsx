import React from "react";
import PropTypes from "prop-types";

const InputText = (props) => {
  return (
    <fieldset>
      <label htmlFor={props.name}>{props.name}</label>
      <input
        type="text"
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        id={props.name}
        onChange={props.onChange}
      />
    </fieldset>
  );
};

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InputText;