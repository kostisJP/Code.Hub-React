import React from "react";
import "./ThemeSwitcher.css";

const ThemeSwitcher = () => {

    const bodyTheme = document.getElementById("theme_body");

    const LightTheme = () => { 
        bodyTheme.classList.add('see-the-light');
    };

    const DarkTheme = () => { 
        bodyTheme.classList.remove('see-the-light');
    };


    return (
    <div className="theme_panel">
    <h6>Choose <br></br>Theme</h6>
    <div className="theme_btns flex_wrapper">
        <button onClick ={LightTheme} className="theme_btn theme_white"></button>
        <button onClick ={DarkTheme} className="theme_btn theme_black"></button>
    </div>
    </div>
    );
};

export default ThemeSwitcher;

