import React from "react";
import './StatItem.css';

const StatItem = (props) => {
return (
  <div className="relative_wrapper">
    <div className={'stat_ic stat_ic_'+props.image}></div>
    <h5 className="stat_header">{props.title}</h5> 
    <span className="stat_numbers">{props.count}</span>
  </div>
);
};
export default StatItem;