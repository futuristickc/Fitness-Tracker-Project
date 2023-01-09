import { verify } from "jsonwebtoken";

const APIURL = `https://fitnesstrac-kr.herokuapp.com/api`;



export const registerUser = async (username, password) => {
    try {
        const response = await fetch(`${APIURL}/users/register`, {
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
    const {
      data: { token },
    } = await response.json();
    return token;
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
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const { data } = await response.json();
    return data;  
    } catch (error) {
        console.error(error)
    }
}


export const Logout = () => {
    localStorage.clear();
  };