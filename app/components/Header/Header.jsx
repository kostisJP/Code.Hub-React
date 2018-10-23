import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
    const {
        title        
    } = props;

    return (
        <div>
            <div>{title}</div>
            <nav className={styles.viewStyle}>
                <NavLink to="/" activeClassName="active">Courses</NavLink>
                <a href="#">Courses</a> 
                &nbsp;               
                <a href="#">Add New Course</a>
            </nav>            
        </div>
    );
};

Header.propTypes = {
    title: PropTypes.string   
};

const styles = {
    viewStyle: {
      //flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF",
      height: 60,
      paddingTop: 15,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2},
      shadowOpacity: 0.2,
      elevation: 2,
      position: "relative"
    },
    TextStyle: {
      fontSize: 20
    }
  };

export default Header;