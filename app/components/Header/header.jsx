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
        <ul className="flex_wrapper">
            <li className="btn" componentClass={Link} to="/courses">Courses</li>
            <li className="btn btn-float" componentClass={Link} to="/add-course">Add New Course</li>
        </ul>
    </div>
</div>
);
};
export default Header;