import React from "react";
import UserContext from "../context/UserContext";
import { useState, useContext } from "react";
function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");


  const {setUser} = useContext(UserContext);

  const handleSubmit = (e) => {
   e.preventDefault();
    setUser({username, password})

  };
  return (
    <>
      <div>
        <h2>Login</h2>
        <input
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="username"
          
        />

        {"  "}

        <input
          type="text"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}
export default Login;
