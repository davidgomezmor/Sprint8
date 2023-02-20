import React, { useState } from "react";
import { RegisterContainer, RegisterBox } from "./styled";
import { Link } from "react-router-dom";


export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleLogin() {
    const user = users.find((usuari) =>
      usuari.username === username && usuari.password === password);
    if (user) {
      setMessage(`Welcome ${username}! You are logged.`);
    } else {
      setMessage("Invalid username or password");
    }
  }
  const users = JSON.parse(localStorage.getItem("users")) || [];


  return (
    <div>
      <RegisterContainer>
        <h1>Login</h1>
        <div>
          <RegisterBox>
            <div>
              Username:
              <input type="text" value={username} onChange={handleUsername} />
            </div> </RegisterBox>
          <RegisterBox>
            <div>
              Password:
              <input type="password" value={password} onChange={handlePassword} />
            </div>
          </RegisterBox>
          <RegisterBox>
            <button onClick={handleLogin} type="button"><b>LOGIN</b></button>
            <br />
            <button>
              <Link to="/Starships"><b>BACK TO STARSHIPS</b></Link>
            </button>

          </RegisterBox>
          <RegisterBox>{message}</RegisterBox>
        </div>
      </RegisterContainer>
    </div>
  );
}
