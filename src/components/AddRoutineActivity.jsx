// import React, { useState, useEffect } from "react";
// import { addRoutineActivity, getActivities } from "../api";

// const AddRoutineActivity = ({ routineId, allActivities, setAllActivities }) => {
//   const [countInput, setCountInput] = useState("");
//   const [durationInput, setDurationInput] = useState("");
//   const [selectActivity, setSelectActivity] = useState("");
//   const [activityList, setActivityList] = useState([]);

//   useEffect(() => {
//     Promise.all([getActivities()]).then(([activities]) => {
//       setActivityList(activities);
//     });
//   }, []);

//   async function handleSubmit(event) { event.preventDefault();
//     const attachActivity = await addRoutineActivity(
//       selectActivity,
//       countInput,
//       durationInput,
//       routineId
//     );
//     if (attachActivity.error){
//       alert("Failed To Add Activity. Please Try Again Later.");
//     }else {
//       setCountInput("");
//       setDurationInput("");
//       setSelectActivity("");
//     setAllActivities([...allActivities, attachActivity]);
//   }}

//   return (
//     <div className="AddRoutineActivity">
//       <form className="AddRoutineActivityContainer" onSubmit={handleSubmit}>
//         <fieldset>
//           <label htmlFor="select-activity">
//             Add Activity{" "}
//             <span className="activity-count">({activityList.length})</span>
//           </label>
//           <select
//             name="activity"
//             id="select-activity"
//             value={selectActivity}
//             onChange={function (event) {
//               setSelectActivity(event.target.value);
//             }}
//           >
//             <option value="any">Any</option>
//             {activityList.map((value) => {
//               return (
//                 <option key={value.id} value={value.id}>
//                   {value.name}
//                 </option>
//               );
//             })}
//           </select>
//         </fieldset>
//         <div>
//           <input
//             id="Count"
//             placeholder="Count"
//             value={countInput}
//             onChange={(event) => {
//               setCountInput(event.target.value);
//             }}
//           />
//         </div>
//         <div>
//           <input
//             id="Duration"
//             placeholder="Duration"
//             value={durationInput}
//             onChange={(event) => {
//               setDurationInput(event.target.value);
//             }}
//           />
//         </div>
//         <button id="AddButton" type="Submit">
//           ADD ACTIVITY
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddRoutineActivity;