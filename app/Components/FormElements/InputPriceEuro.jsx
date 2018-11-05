import React from "react";
import PropTypes from "prop-types";

const InputPriceEuro = (props) => {
  return (
    <div>
      <label for={props.placeholder}>{props.placeholder}</label>
      <input
        type="text"
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        id={props.name}
        onChange={props.onChange}
      />
      <span>€</span>
    </div>
  );
};

InputPriceEuro.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InputPriceEuro;