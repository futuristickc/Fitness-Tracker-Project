import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import { getMe } from "./api";
import Register from "./components/User/Register";
import Login from "./components/User/Login";
import Routines from "./components/Routines";




function App() {
  // const [token, setToken] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const [routines, setRoutines] = useState([]);

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
    <div>
    <Navbar />
    <Routes>
      <Route path="/routines"
        element={<Routines routines={routines} setRoutines={setRoutines} />}
      />
      <Route path="/login" element={<Login 
      token={token}
      setToken={setToken}
      user={user}
      setUser={setUser}/>} />
      <Route
        path="/register"
        element={
          <Register
            token={token}
            setToken={setToken}
            user={user}
            setUser={setUser}/>} />
    </Routes>
    </div>
  );
}

//test
export default App;