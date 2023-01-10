

const APIURL = `https://fitnesstrac-kr.herokuapp.com/api`;
const token = localStorage.token;



export const registerUser = async (username, password) => {
<<<<<<< HEAD
  try {
    const response = await fetch(`${APIURL}/users/register`, {
      method: "POST",
=======
    try {
        const response = await fetch(`${APIURL}/users/register`, {
            method: "POST",
>>>>>>> 9ce23a7 (FrontEnd work)
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const {
      data: { token },
    } = await response.json();
    return token;
<<<<<<< HEAD
  } catch (error) {
    console.error(error);
  }
}

export const loginUser = async (username, password) => {
  try {
    const verify = await fetch(`${APIURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const data = await verify.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const getMe = async (token) => {
  try {
    const response = await fetch(`${APIURL}/users/me`, {
      headers: {
=======
    } catch (error) {
        console.error(error);
    }
}

export const loginUser = async (username, password) => {
    try {
        const verify = await fetch(`${APIURL}/users/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user: {
                username,
                password,
              },
            }),
          });
          const data = await verify.json();
          return data;
    } catch (error) {
        console.error(error);
    }
}

export const getMe = async (token) => {
    try {
        const response = await fetch(`${APIURL}/users/me`, {
          headers: {
>>>>>>> 9ce23a7 (FrontEnd work)
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const { data } = await response.json();
<<<<<<< HEAD
    return data;
  } catch (error) {
    console.error(error)
  }
}


export const fetchRoutines = async () => {
  const token = localStorage.getItem("token"); // Add token
  const response = await fetch(`${APIURL}/api/routines/`, {
    // Add token to request
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const routines = await response.json();
  console.log(routines);
  return routines;
};

export const Logout = () => {
  localStorage.clear();
};
<<<<<<< HEAD
=======
    return data;  
    } catch (error) {
        console.error(error)
    }
}


export const Logout = () => {
    localStorage.clear();
  };
>>>>>>> 9ce23a7 (FrontEnd work)
=======

export async function getActivities() {
  try{
    const response = await fetch(`${API_URL}/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const activities = await response.json();
    return activities;
}catch (error) {
  throw error
}}

export async function addActivity(
  token,
  nameInput,
  descriptionInput
) 
{
  try {
    const response = await fetch(`${API_URL}/activities/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: nameInput,
        description: descriptionInput,
      }),
    });
    const result = await response.json();
    return result
  } catch (error) {
    throw error
  }

}

export async function updateActivity(
  nameInput,
  descriptionInput,
  activityId
) {
  try{
  const response = await fetch(`${API_URL}/activities/${activityId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: nameInput,
      description: descriptionInput,
    }),
  });
  const result = await response.json();
  return result
}catch (error) {
  throw error
}}


export async function addRoutineActivity(
  activityId,
  countInput,
  durationInput,
  routineId
) {
  try{
  const response = await fetch(`${API_URL}/routines/${routineId}/activities`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      activityId: activityId,
      count: countInput,
      duration: durationInput

    }),
  });
  const result = await response.json();
  return result
}catch (error) {
  throw error
}}

export async function updateRoutineActivity(
  countInput,
  durationInput,
  rAId
) {
  try{
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/routine_activities/${rAId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({
      count: countInput,
      duration: durationInput
    }),
  });
  const result = await response.json();
  return result
}catch (error) {
  throw error
}}

export async function deleteRoutineActivity(
  rAId
) {
  try{
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/routine_activities/${rAId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result
}catch (error) {
  throw error
}}
>>>>>>> df8aa2a (34?!?!)