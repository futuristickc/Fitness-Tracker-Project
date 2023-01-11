import React, {useState, useEffect} from "react";
import { registerUser } from "../../api/index";


const Register = ({setToken}) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
    <div>
        <form onSubmit={async (e) => {
            try {
                e.preventDefault();
            console.log("username & password: ", username, password)

            const data = await registerUser(username, password)
            console.log(data.token)
            setToken(data.token)
            localStorage.setItem("token", data.token)
            console.log("localStorage", localStorage.getItem("token"));    
        } catch (error) {
                console.error(error);
            }
        }}>
            <label htmlFor="username">Username:</label>
            <input 
            value={username} 
            type="text" 
            placeholder="username" 
            onChange={(e) => setUsername(e.target.value)}
            ></input>
            <label htmlFor="password">Password:</label>
            <input 
            value={password} 
            type="password" 
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button type="Submit">Submit</button>
        </form>
    </div>
    )
}

export default Register;

// const Register = ({ token, setToken, user, setUser }) => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
  
//     return (
//       <div>
//         <h1>Register</h1>
//         <form
//           onSubmit={async (event) => {
//             try {
//               event.preventDefault();
//               const token = await registerUser(username, password);
//               setToken(token);
//               localStorage.setItem("token", token);
//               localStorage.setItem("username", username);
//             } catch (error) {
//               console.error(error);
//             }
//           }}
//         >
//           <label htmlFor="username">Username :</label>
//           <input
//             value={username}
//             type="text"
//             required
//             minLength={5}
//             placeholder="username"
//             onChange={(event) => setUsername(event.target.value)}
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
//           <button type="submit">Register</button>
//         </form>
//       </div>
//     );
//   };
  
//   export default Register;