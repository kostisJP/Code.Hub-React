import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/code_logo.png';
import "./Header.css";


const Header = () => {

return (
<div className="flex_wrapper nav_wrapper">
    <div className="inner_wrapper flex_wrapper">
        <div className="flex_wrapper">
            <img className="logo" src={Logo}></img>
            <Link to="/" className="nav_bar_logo">Code.Hub <span> Dashboard </span></Link>
        </div>
        <div className="flex_wrapper">
            <a href="/courses" className="btn">Courses</a>
            <a href="/add-course" className="btn btn-float">Add New Course</a>
        </div>
    </div>
</div>
);
};
export default Header;