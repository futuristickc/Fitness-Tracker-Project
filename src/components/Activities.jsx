import React, { useEffect } from "react";
import { getActivities, addActivity } from "../api/index";




// const Activities =({loggedIn,
// activities,
// setActivites }) => {

//   useEffect(() => {
//     const getActivities().then((results) => {
//       setActivites(results);
//     });
//   }, [activities])
// }








const Activities = ({
  loggedIn,
  activities,
  setActivities,
  nameInput,
  setNameInput,
  descriptionInput,
  setDescriptionInput,
}) => {
  useEffect(() => {
    getActivities().then((results) => {
      setActivities(results);
    });
  }, [activities]);

  const token = localStorage.getItem("token");
  async function handleSubmit(event) {
    event.preventDefault();
    const result = await addActivity(token, nameInput, descriptionInput);
    await getActivities();
    if (result.error) {
      alert(result.error);
    } else {
      setActivities(result);
      setNameInput("");
      setDescriptionInput("");
    }
  }

  if (loggedIn) {
    return (
      <div key={activity.id}>
        <div>
          <div className="addActivity">
            <h1 id="LoggedInToWelcomeToActivities">Activities</h1>
            <form className="AddForm" onSubmit={handleSubmit}>
              <h2 id="LoggedInToAddNewActivity">Add A New Activity!</h2>
              <div>
                <input
                  id="AddName"
                  placeholder="Name"
                  value={nameInput}
                  onChange={(event) => {
                    setNameInput(event.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  id="AddDescription"
                  placeholder="Description"
                  value={descriptionInput}
                  onChange={(event) => {
                    setDescriptionInput(event.target.value);
                  }}
                />
              </div>
              <button id="AddButton" type="Submit">
                Create Activity!
              </button>
            </form>
          </div>
          <div className="activityBox">
            {activities.length ? (
              activities.map((element) => {
                const { id, name, description } = element;
                const activityId = id;
                return (
                  <div key={activityId} className="Activity">
                    <h4 id="activityName">{name}</h4>
                    <p id="Description">Description: {description}</p>
                  </div>
                );
              })
            ) : (
              <div> Loading Your Activities... Please Wait....</div>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Activities</h1>
        <div>
          {activities?.length ? (
            activities.map((element) => {
              const { id, name, description } = element;
              const activityId = id;
              return (
                <div key={activityId} className="Activity">
                  <h4 id="activityName">{name}</h4>
                  <p id="Description">Description: {description}</p>
                </div>
              );
            })
          ) : (
            <div> Loading Your Personal Activities... Please Wait....</div>
          )}
        </div>
      </div>
    );
  }
};

export default Activities;
