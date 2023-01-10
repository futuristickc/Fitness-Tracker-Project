import React, { useState } from "react";
import { loginUser } from "../../api";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1 id="loginpage"> Log Into your account</h1>

            </form>
        </div>
    )
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
