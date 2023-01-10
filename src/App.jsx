import React, { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/NavBar";



function App(){
  //   const [token, setToken] = useState(localStorage.getItem("token"));
  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   const getMe = async () => {
  //     const data = await fetchMe(token);
  //     setUser(data);

  //   };
  //   if (token) {
  //     getMe();
  //   }
  // }, [token]);



  return ( 
    <div className="App">
      <h1>Hello World</h1>
      <Navbar/>
    </div>
  );
}

export default App;