import React, { useState } from "react";
import { loginUser } from "../../api";
import { useLocation } from "react-router-dom";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const location = useLocation();

    return (
        <form className="user" onSubmit={async (e) => {
            try {
                e.preventDefault();
                const token = await loginUser(username, password)
                setToken(token);
                localStorage.setItem("token", token);
                location.pathname = '/';
                console.log(username, password, token);
            } catch (error) {
                console.error(error)
            }
        }}>
            <label>
                <input
                    value={username}
                    type="text"
                    placeholder="Username"
                    required
                    onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                <input
                    value={password}
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button type="submit">Log In</button>
        </form>
    )
}

export const checkUserLoggedIn = () => {
    const token = localStorage.getItem('token');
    return token ? true : false;
}


// const Login = ({}) => {
//     const [username, setUserName] = useState("");
//     const [password, setPassword] = useState("");

//     return (
//       <div>
//         <form
//           onSubmit={async (event) => {
//             event.preventDefault();
//             const data = await login(username, password);
//             console.log(username);
//             const token = data.data.token;
//             localStorage.setItem("username", username);
//             localStorage.setItem("token", token);
//           }}
//         >
//           <h1>Login</h1>
//           <label htmlFor="username">Username</label>
//           <input
//             value={username}
//             type="text"
//             required
//             minLength={5}
//             placeholder="username"
//             onChange={(event) => setUserName(event.target.value)}
//           ></input>
//           <label htmlFor="password">Password :</label>
//           <input
//             value={password}
//             type="password"
//             required
//             minLength={7}
//             placeholder="password"
//             onChange={(event) => setPassword(event.target.value)}
//           ></input>
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     );
//   };


export default Login;
