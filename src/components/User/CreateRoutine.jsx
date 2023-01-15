import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addRoutine } from "../../api";


function CreateRoutine() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState();
  const [isPublicChecked, setIsPublicChecked] = useState(false);
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");

  function handleChange() {
    setIsPublicChecked(!isPublicChecked);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!name || !goal) {
      setErrorMessage("All fields are required.");
      return;
    }

    const token = localStorage.getItem("token");
    if (token) {
      const res = await addRoutine(name, goal, isPublicChecked, token);
      if (res.error) {
        setErrorMessage(res.error);
        return;
      }
      navigate("/myroutines");
    } else {
      setErrorMessage("You need to be logged in to create a routine.");
      return;
    }
  }

  return (
    <div className="create-routine-container">
      <h1>Create Routine</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="goal">Goal</label>
          <input
            type="text"
            name="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            required
          />
        </div>
        <div className="checkbox-label">
          <input
            type="checkbox"
            checked={isPublicChecked}
            onChange={handleChange}
            name="isPublic"
          />
          <label htmlFor="isPublic">Public</label>
        </div>
        <button>Submit</button>
      </form>
      <span className="error-message">{errorMessage}</span>
    </div>
  );
}

export default CreateRoutine;
