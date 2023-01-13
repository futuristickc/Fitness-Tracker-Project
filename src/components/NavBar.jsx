import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { checkUserLoggedIn } from "./User/Login";
import "./NavBar.css";


const NavBar = ({setToken, user}) => {
  const username = user?.data?.username 
    const location = useLocation();
    return (
        <header className="header">
            <NavLink to="/" className="logo">
            <div id="fitness">Fitness Tracker</div>
        </NavLink>
        <br/>
      {checkUserLoggedIn() ?
        <div className="tabs">
            <b className="welcome">Welcome, {username}!</b>
            <br/><hr/>
            <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="/myroutines">
          My Routines
        </NavLink>
        <NavLink className="navlink" to="/activities">
          Activities
        </NavLink>
        <NavLink className="navlink" to="/create-routine">
          Create Routine
        </NavLink>
          <button type="button" className="header-button logout" onClick={() => {
            localStorage.removeItem('token');
            setToken(null);
            location.pathname = "/";
          }}>Logout</button>
        </div>
        :
        <div className="tabs">
        <NavLink className="navlink" to="/">
          Home
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
        </div>
        }   
        </header>
    )
}

export default NavBar;
