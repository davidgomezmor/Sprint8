import React, { useState } from "react";
import { RegisterContainer, RegisterBox } from "./styled";
import { Link } from "react-router-dom";


export function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleRegister() {
    alert(`The user ${username} has registered`)
    const newUser = { username, password };
    setUsers([...users, newUser]);
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    setUsername("");
    setPassword("");
  }

  return (
    <div>
      <RegisterContainer>

        <h1>Register</h1>
        <div>
          <RegisterBox>
            <div>
              Create a Username:
              <input type="text" value={username} onChange={handleUsername} />
            </div>
          </RegisterBox>
          <RegisterBox>
            <div>
              Create a Password:
              <input type="password" value={password} onChange={handlePassword} />
            </div>
          </RegisterBox>
          <RegisterBox>
            <button onClick={handleRegister} type="button"><b>REGISTER</b></button>
            <br />
            <button>
              <Link to="/Starships"><b>BACK TO STARSHIPS</b></Link>
            </button>

          </RegisterBox>

        </div>
      </RegisterContainer>

    </div>
  );
}
