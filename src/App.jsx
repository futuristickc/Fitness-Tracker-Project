import React, { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import AllRoutes from "./components/Routes";
import { getMe } from "./api";



function App() {
  // const [token, setToken] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      const fetchMe = async () => {
        const data = await getMe();
        const user = await response;
        setUser(user);
      }
      fetchMe()

    }
  }, [user])



  return (
    <div className="App">
      <h1>Hello World</h1>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;