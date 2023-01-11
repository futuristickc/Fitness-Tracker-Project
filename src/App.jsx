import React, { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import AllRoutes from "./components/Routes";
import { getMe } from "./api";
import Register from "./components/User/Register";



function App() {
  // const [token, setToken] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});

  useEffect(() => {
    //   if (Object.keys(user).length === 0) {
    const fetchMe = async () => {
      const data = await getMe(token);
      console.log(data);
      //       const user = await response;
      setUser(data);
      console.log(user);
    }
    fetchMe();


  }, [token])

  return (
    <div className="App">
      <h1>Fitness Tracker</h1>
      <Navbar />
      <Register />
    </div>
  );
}

export default App;