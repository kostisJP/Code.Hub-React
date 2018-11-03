import React from "react";
import "./StatItem.css";
import { PropTypes } from 'prop-types';

const StatItem = props => {
  return (
    <div className="relative_wrapper">
      <div className={"stat_ic stat_ic_" + props.image} />
      <h5 className="stat_header">{props.title}</h5>
      <span className="stat_numbers">{props.count}</span>
    </div>
  );
};

StatItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.number
};

export default StatItem;
