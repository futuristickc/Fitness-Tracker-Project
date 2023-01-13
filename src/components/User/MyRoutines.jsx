import React, { useEffect, useState } from "react";
import { getPublicRoutines, addRoutine, getUserRoutines, getMe } from "../../api";
import CreateRoutine from "./CreateRoutine";


const MyRoutines = ({routines, setRoutines, myRoutines, setMyRoutines}) => {
    // const [routines, setRoutines] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        const user = await getMe(token);
                setRoutines(await getUserRoutines(user.username, token))

            // const { data: { routines }, } = await response;
            setRoutines(data);
            console.log(data)
        }
        fetchData();
    }, []);

    const addRoutine = routines.filter(
        (routine) => routine.id !== routineId
      );
      setMyRoutines(addRoutine);
    
  let routinesToMap = routines.map((routine, index) => {
    if (user.id === routine.creatorId) {
    
    return (
        <>
        <CreateRoutine/>
                        return (
                            <div key={routine.id}>
                            <h2>Routines</h2>
                            <div>{routinesToMap}</div>
                            </div>

                        );
                    
                
        </>
    );
                }});
            
};
export default MyRoutines;
 