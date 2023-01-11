const APIURL = `https://fitnesstrac-kr.herokuapp.com/api`;

export const registerUser = async (username, password) => {
    try {
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        const { token } = await response.json();
        console.log("my response data:", token);
        // return data;
        // const {
        //   data: { token },
        // } = await response.json();
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
        const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error)
    }
}


export const getPublicRoutines = async () => {
    try {
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
    // const token = localStorage.getItem("token"); // Add token
};

export const Logout = () => {
    localStorage.clear();
    return data;
};



// export const getPublicRoutines = async () => {
//     await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
//     headers: {
//     'Content-Type': 'application/json',
//     },
//     })
//     .then(response => response.json())
//     .then(result => {
//     result(routine => routine.isPublic === true);
//     })
//     .catch(console.error);
//     }
    

    
    // or
    
    // const getPublicRoutines = async () => {
    // try {
    // const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
    // headers: {
    // 'Content-Type': 'application/json',
    // },
    // });
    // const result = await response.json();
    // const publicRoutines = result.filter(routine => routine.isPublic === true);
    // return publicRoutines;
    // } catch (error) {
    // console.error(error);
    // }
    // }
    
    // const routines = getPublicRoutines();
    // console.log(routines);
    // routines.then(routineData => {
    // console.log(routineData);
    // });





export async function getActivities() {
    try {
        const response = await fetch(`${API_URL}/activities`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const activities = await response.json();
        return activities;
    } catch (error) {
        throw error
    }
}

export async function addActivity(
    token,
    nameInput,
    descriptionInput
) {
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
    try {
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
    } catch (error) {
        throw error
    }
}


export async function addRoutineActivity(
    activityId,
    countInput,
    durationInput,
    routineId
) {
    try {
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
    } catch (error) {
        throw error
    }
}

export async function updateRoutineActivity(
    countInput,
    durationInput,
    rAId
) {
    try {
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
    } catch (error) {
        throw error
    }
}

export async function deleteRoutineActivity(
    rAId
) {
    try {
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
    } catch (error) {
        throw error
    }
}