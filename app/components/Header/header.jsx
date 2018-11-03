import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/code_logo.png';
import "./Header.css";


const Header = () => {
return (
<div className="flex_wrapper nav_wrapper">
    <div className="inner_wrapper flex_wrapper">
        <div className="theme_panel">
            <h6>Choose Theme :</h6>
            <div className="theme_btns flex_wrapper">
                <div className="theme_btn theme_white"></div>
                <div className="theme_btn theme_black"></div>
            </div>
        </div>
        <div className="flex_wrapper">
            <img className="logo" src={Logo}></img>
            <Link to="/" className="nav_bar_logo">Code.Hub <span> Dashboard </span></Link>
        </div>
        <ul className="flex_wrapper">
            <li className="btn">
                <a href="/courses">Courses</a>
            </li>
            <li className="btn btn-float">
                <a href="/add-course">Add New Course</a>
            </li>
        </ul>
    </div>
</div>
);
};
export default Header;