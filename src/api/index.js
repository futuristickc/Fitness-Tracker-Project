import { verify } from "jsonwebtoken";

const APIURL = `https://fitnesstrac-kr.herokuapp.com/api`;



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
