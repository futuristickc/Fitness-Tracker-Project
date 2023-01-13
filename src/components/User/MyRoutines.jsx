import React, { useEffect, useState } from "react";
import {getMe, getUserRoutines, deleteRoutine} from "../../api"

function userRoutines({ isLoggedIn }) {
    const [userRoutines, setUserRoutines] = useState([]);
    const token = localStorage.getItem('userToken');

    useEffect(() => {
        async function fetchData() {
            if (isLoggedIn) {
                const user = await getMe(token);
                setUserRoutines(await getUserRoutines(user.username, token))
            }
        }
        fetchData();
    }, [isLoggedIn, token]);

    async function handleDelete(id) {
        const deletedRoutine = await deleteRoutine(id, token);
        const removedRoutine = userRoutines.filter(x => x.id !== deletedRoutine.id);
        setUserRoutines(removedRoutine);
    }

    const userRoutinesHtml = userRoutines?.map((routine) =>
        <div key={routine.id} className="info">
            <h2>{routine.name} <a href="#" onClick={() => handleDelete(routine.id)}>X</a></h2>
            <p>By <b>{routine.creatorName}</b></p>
            <p>{routine.goal}</p>
            <p><i>This routine is {routine.isPublic} public if true</i></p>
            {routine.activities?.map((activity) => {
                return (
                    <div key={activity.id} className="info">
                        <h4>{activity.name} ({activity.count} reps/{activity.duration} minutes)</h4>
                        <p>{activity.description}</p>
                    </div>
                );
            })}
        </div>
    );

    if (userRoutines.length === 0) {
        return (
            <div>
                <h1>My Routines</h1>
                <span>Looks like you don't have any routines yet!</span>
            </div>
        );
    }
    else {
        return (
            <div>
                <h1>My Routines</h1>
                {userRoutinesHtml}
            </div>
        );
    }
}


export default userRoutines;
 