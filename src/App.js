import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/User/Register";



function App(){
    const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});

  useEffect(() => {
    const getMe = async () => {
      const data = await fetchMe(token);
      setUser(data);

    };
    if (token) {
      getMe();
    }
  }, [token]);



  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/posts"
          element={<Posts posts={posts} setPosts={setPosts} />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/register"
          element={
            <Register
              token={token}
              setToken={setToken}
              user={user}
              setUser={setUser}
            />
          }
        />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/messages" element={<Messages token={token} />} />
        <Route path="/" element={<Home token={token} setToken={setToken} />} />
        <Route path="/posts/:id" element={<SinglePost posts={posts} />} />
        <Route path="/editpost" element={<EditPost token={token} />} />
      </Routes>
    </div>
  );
}

export default App;