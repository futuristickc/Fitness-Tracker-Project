import React from "react";
import { Routes, Route } from "react-router-dom";
import { Logout } from "../api";
import App from "../App";
import Navbar from "./NavBar";
import "./Home.css";


const Home = () => {

    // const []

    return (
        <div className="app" >
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

        </div>
    );

    return (
        <>
          <h1>Home</h1>
          <form onSubmit={Logout}>
            <button type="submit">Logout</button>
          </form>
          <h2>Posts</h2>
          <div>{postsToMap}</div>
          <h2>Messages</h2>
          <div>{messagesToMap}</div>
        </>
      );

}

export default Home;