import React from "react";
import "./Hero.css";
import { PropTypes } from 'prop-types';

const Hero = props => {

  const { titlePrepend, titleCenter, titleAppend, subtitle } = props;

  return (
    <div className="jumbotron">
      <div className="inner_wrapper">
        <h2>
          <span>{titlePrepend}</span>
          <span className="grad_span">{titleCenter}</span>
          <span>{titleAppend}</span>
        </h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

Hero.propTypes = {
  supertitle: PropTypes.string,
  subtitle: PropTypes.string,
  titlePrepend: PropTypes.string,
  titleCenter: PropTypes.string,
  titleAppend: PropTypes.string
};

export default Hero;
