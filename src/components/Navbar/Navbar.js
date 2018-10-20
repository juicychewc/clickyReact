import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar navbar-expand-lg fixed-top">
        <h3 className="navbarName navbar-left">Stroop Effect Game</h3>
        <h3 className="navbarScore navbar-right">Current Score: {props.currentScore}   |   Highest Score: {props.highScore}</h3>
    </nav>
);

export default Navbar;