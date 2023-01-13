import React, { useEffect, useState } from "react";
import {
  getPublicRoutines,
  addRoutine,
  getUserRoutines,
  getMe,
  deleteRoutine,
} from "../../api";
import CreateRoutine from "./CreateRoutine";
import { NavLink } from "react-router-dom";

const MyRoutines = ({ token }) => {
  const [routines, setRoutines] = useState([]);
  const [myRoutines, setMyRoutines] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUser = await getMe(token);
      console.log(fetchedUser);
      setUser(fetchedUser);
      const fetchedRoutines = await getUserRoutines(
        fetchedUser.username,
        token
      );
      setRoutines(fetchedRoutines);
    };
    fetchData();
  }, []);

  async function handleDelete(id) {
    const deletedRoutine = await deleteRoutine(id, token);
    const removedRoutine = myRoutines.filter(x => x.id !== deletedRoutine.id);
    setMyRoutines(removedRoutine);
}

  useEffect(() => {
    const filteredRoutines = routines.filter(
      (routine) => routine.creatorId === user.id
    );
    setMyRoutines(filteredRoutines);
  }, [routines, user]);

  let routinesToMap = myRoutines.map((routine, index) => (
    <div key={routine.id}>
      <h2>{routine.name}
      <a href="#" onClick={() => handleDelete(routine.id)}>
        X
        </a></h2>
      <p>
        <b>{routine.creatorId}</b>
      </p>
      <p>{routine.goal}</p>
      <p>
        <i>{routine.isPublic} </i>
      </p>
      {routine.activity?.map((activity) => {
        return (
          <div key={activity.id} className="info">
            <h4>
              {activity.name} ({activity.count} reps/{activity.duration}{" "}
              minutes)
            </h4>
            <p>{activity.description}</p>
          </div>
        );
      })}
    </div>
  ));
  if (myRoutines.length === 0) {
        return (
            <div>
                <h1>My Routines <NavLink to="/create-routine">+</NavLink></h1>
                <span>Looks like you don't have any routines yet!</span>
            </div>
        );
    }
    else {
        return (
            <div>
                <h1>My Routines </h1>
                <h2>Create a New Routine <NavLink to="/create-routine">+</NavLink></h2>
                <div>{routinesToMap}</div>
            </div>
        );
    }
};
export default MyRoutines;
