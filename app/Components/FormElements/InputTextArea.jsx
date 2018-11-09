import React from "react";
import PropTypes from "prop-types";

const InputTextArea = (props) => {
  return (
    <fieldset className="field-area">
      <label htmlFor={props.name}>{props.placeholder}</label>
      <textarea
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        id={props.name}
        onChange={props.onChange}
      />
    </fieldset>
  );
};

InputTextArea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InputTextArea;