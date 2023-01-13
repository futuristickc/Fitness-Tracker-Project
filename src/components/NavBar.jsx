import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = (loggedIn, setLoggedIn) => {
  
  return (
    <>
      <nav>
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="/myroutines">
          My Routines
        </NavLink>
        <NavLink className="navlink" to="/activities">
          Activities
        </NavLink>
        <NavLink className="navlink" to="/login">
          Login
        </NavLink>
        <NavLink className="navlink" to="/register">
          Register
        </NavLink>
        <NavLink className="navlink" to="/create-routine">
          Create Routine
        </NavLink>
      </nav>
    </>
  );
};

export default NavBar;
