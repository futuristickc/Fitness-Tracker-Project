import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./Home";
import Login from "./User/Login";

const AllRoutes = ({ token, setToken, user }) => {
    return (
        <div>
            <Routes>
                <Route path="*" element={<Home />}></Route>
                <Route path="/login" element={<Login setToken={setToken} />}></Route>
            </Routes>
        </div>
    )
}
export default AllRoutes;

