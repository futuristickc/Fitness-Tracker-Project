import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api";


const Login = ({token, setToken}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate

    

    return (
        <form className="user" onSubmit={async (e) => {
            try {
                e.preventDefault();
                console.log("username & password: ", username, password)
                const data = await loginUser(username, password)
                setToken(data.token);
                localStorage.setItem("token", data.token);
            } catch (error) {
                console.error(error)
            }
        }}>
            <label>
                <input
                    value={username}
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                <input
                    value={password}
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button type="submit">Log In</button>
        </form>
    )
};



//

export default Login;
