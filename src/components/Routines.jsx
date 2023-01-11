import { de } from "faker/lib/locales";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPublicRoutines } from "../api";

const Routines = ({ routines, setRoutines}) => {


  useEffect(() => {
   const getRoutines = async () => {
    const data = await getPublicRoutines()

    setRoutines(data)
   }
   getRoutines()
  }, []);
  return (
    <div id="RoutineBox">
    <h1 className="PageHeader" id="ProfileHeader">
      Routines
    </h1>

    <div className="Container">
      <div className="centerBox">
        {routines?.length ? (
          routines?.map((element) => {
            const { id, name, isPublic, goal, creatorName, activities } =
              element;
            if (isPublic) {
              return (
                <div className="Routines" key={id}>
                  <h2 id="Name">{name}</h2>
                  <p id="Goal">Goal: {goal}</p>
                  <p id="creatorName">Creator Name: {creatorName}</p>

                  <div className="activityBox">
                    {activities.map(
                      ({ id, name, description, count, duration }) => {
                        return (
                          <div key={id} className="Activity">
                            <h4 id="activityName">{name}</h4>
                            <p id="Description">Description: {description}</p>
                            <p id="Count">Count: {count}</p>
                            <p id="Duration">Duration: {duration}</p>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              );
            }
          })
        ) : (
          <div> Loading your routines... </div>
        )}
      </div>
    </div>
  </div>
  );
}

export default Routines;














// const Routines = (props) => {
//     const { routines, setRoutines } = props;
//     const [searchTerm, setSearchTerm] = useState('');
//     const routinesMatches = (routines, text) => {
//       // return true if any of the fields you want to check against include the text
//       // strings have an .includes() method
//       return Object.values(routine).some(value => typeof value === 'string' && value.includes(text));
//     }
//     // const filteredRoutines = routines.filter(routine => routinesMatches(routine, searchTerm));
//     const routinesToDisplay = searchTerm.length ? filteredRoutines : routines;
//     return (
//       <>
//         <input className="searchBar" type="text" placeholder="Search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}></input>
        
//           return <SingleRoutine routines={routines} setRoutines={setRoutines}  />;
        
//       </>
//     );
//   };
//   export default Routines;


  
  
  // As any user on the Routines tab, I want to:
  
  // see a list of all public routines showing:
  // The routine name, goal, and creator's username
  // A list of activities for the routine, including their name, description, and duration and/or count
  // be able to click on a username (shown as a Routine creator), and see a list of all of their public routines
  // be able to click on an activity name (shown in a list of activities on a routine), and see a list of all public routines which feature it
  
  // As a registered user on the My Routines tab, I want to:
  
  // be shown a form to create a new routine
  
  // the form should have text fields for name and goal
  // for each routine which is owned by me I should
  
  // be able to update the name and goal for the routine
  // be able to delete the entire routine
  // be able to add an activity to a routine via a small form which has a dropdown for all activities, an inputs for count and duration
  // be able to update the duration or count of any activity on the routine
  // be able to remove any activity from the routine
  
  // expect the dropdown to add an activity to one of my routines not to include any activity which is already a part of the routine



// const routines = ({ routines }) => {
//   const [searchTerm, setSearchTerm] = useState("");
// //   const navigate = useNavigate();
//   const filteredRoutines = routines.filter((routine) => routine.title.includes(searchTerm));
//   const routinesToDisplay = searchTerm.length ? filteredRoutines : routines;
//   let routinesToMap = routinesToDisplay.map((routines) => {
//     return (
//       <div className="routines" >
//         <h2>{routines.title}</h2>
//         <h3>Username : {routines.username}</h3>
//         <p>Description : {routines.description}</p>
//         <p>Duration : {routines.duration}</p>
//         <p>Count : {routines.count}</p>
//         <button
//           onClick={() => { handleDelete(routines._id)
//           }}
//         >
//           See Routines!
//         </button>
//       </div>
//     );
//   });
//   return (
//     <>
//       <h3>Search Routines</h3>
//       <div className="routines">
//         <input
//           type="text"
//           placeholder="search"
//           value={searchTerm}
//           onChange={(event) => {
//             setSearchTerm(event.target.value);
//             console.log(searchTerm);
//           }}
//         />
//       </div>
//       <h1>Routines</h1>
//       <div>{routinesToMap}</div>
//     </>
//   );
// };
// export default routines;



