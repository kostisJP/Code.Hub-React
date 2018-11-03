import React from "react";
import './Hero.css';

const Hero = (props) => {
return(
<div className="jumbotron">
  <div className="inner_wrapper">
    <h2>{props.supertitle}</h2>
    <p>{props.subtitle}</p>
  </div>
</div>
);
};
export default Hero;