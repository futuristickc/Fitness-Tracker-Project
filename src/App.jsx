import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import { getMe, Logout } from "./api";
import Register from "./components/User/Register";
import {Login} from "./components/User/Login";
import Routines from "./components/Routines";
import Activities from "./components/Activities";
import MyRoutines from "./components/User/MyRoutines";
import CreateRoutine from "./components/User/CreateRoutine";
import { addRoutine } from "./api";

function App() {
  // const [token, setToken] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  const [myRoutines, setMyRoutines] = useState([]);
  const [addRoutine, setAddRoutine] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    //   if (Object.keys(user).length === 0) {
    const fetchMe = async (token) => {
      // console.log(token)
      const data = await getMe(token);
      // console.log(data);
      setUser(data);
      // console.log(user);
    };
    fetchMe(token);
  }, [token]);

  return (
    <div>
      <Navbar  setToken={setToken} user={user}/>
      <Routes>
        <Route
          exact
          path="/"
          element={<Routines routines={routines} setRoutines={setRoutines} />}
        />

        <Route
          path="/login"
          element={
            <Login
              token={token}
              setToken={setToken}
              user={user}
              setUser={setUser}
              setLoggedIn={setLoggedIn}
            />
          }
        />

          <Route path="/logout" element={<Logout
          />}/>

        <Route
          path="/register"
          element={
            <Register
              token={token}
              setToken={setToken}
              user={user}
              setUser={setUser}
            />
          }
        />
        <Route
          path="/activities"
          element={
            <Activities activities={activities} setActivities={setActivities} />
          }
        />
        <Route
          path="/myroutines"
          element={
            <MyRoutines
              myRoutines={myRoutines}
              setMyRoutines={setMyRoutines}
              routines={routines}
              setRoutines={setRoutines}
              token={token}
            />
          }
        />
        <Route
          path="/create-routine"
          element={
            <CreateRoutine
              addRoutine={addRoutine}
              setAddRoutine={setAddRoutine}
            />
          }
        />
      </Routes>
    </div>
  );
}

//test
export default App;
