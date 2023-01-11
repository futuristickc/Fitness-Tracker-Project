import React, { useEffect, useState } from "react";
import { getPublicRoutines } from "../../api";



const MyRoutines = () => {
    const [routines, setRoutines] = useState([]);
    useEffect(() => {
        const getRoutines = async () => {
            const data = await getPublicRoutines();
            // const { data: { routines }, } = await response;
            setRoutines(data);
            console.log(data)
        }
        getRoutines();
    }, []);
    let hasRoutine = false;
    routines.forEach((routine) => {
        if (routines.creatorId) {
            hasRoutine = true;
        }
    })
    return (
        <>
            {hasRoutine ? (
                routines.map((routine) => {
                    if (routines.creatorId) {
                        return <SingleRoutine routine={routine} routines={routines} setRoutines={setRoutines} creatorId={routine.creatorId} key={routine._id} />;
                    }
                })
            ) : (
                <p>You haven't posted anything yet!</p>
            )}

        </>
    );
};
export default MyRoutines; 