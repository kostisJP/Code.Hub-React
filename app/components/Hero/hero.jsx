import React from "react";
import "./Hero.css";
import { PropTypes } from 'prop-types';

const Hero = props => {

  const { supertitle, subtitle } = props;

  return (
    <div className="jumbotron">
      <div className="inner_wrapper">
        <h2>{supertitle}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

Hero.propTypes = {
  supertitle: PropTypes.string,
  subtitle: PropTypes.string
};

export default Hero;
