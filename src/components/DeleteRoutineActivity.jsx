// import React from "react";
// import { deleteRoutineActivity, getActivities } from "../api";


// const DeleteRoutineActivity = ({ rAId, setAllActivities }) => {
//   async function handleDelete(event) {
//     event.preventDefault();
//     await deleteRoutineActivity(rAId);
//     const result = await getActivities();
//     setAllActivities(result);
//   }
//   return (
//     <form className="DeleteRA" onSubmit={handleDelete}>
//       <button className="ActivityButton" type="Submit">
//         Delete Activity
//       </button>
//     </form>
//   );
// };

// export default DeleteRoutineActivity;