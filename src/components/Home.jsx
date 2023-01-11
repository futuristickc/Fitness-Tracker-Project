import React from "react";
import { Routes, Route } from "react-router-dom";

import App from "../App";
import Navbar from "./NavBar";


const Home = () => {
    return (
        <div className="app" >
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

        </div>
    );
}

export default Home;