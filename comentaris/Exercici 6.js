import React, { useState } from "react";
import { RegisterContainer, RegisterBox } from "./styled";
import { Link } from "react-router-dom";

//REGISTER//////////////////////////////////////////////////////////////////////
export function Register() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState(); 
  const [users, setUsers] = useState([]);

// Creo dues variables pel nom i la contrasenya amb useState. users és l'array que contindrà aquesta info.

  function handleUsername(e) {
    setUsername(e.target.value);
  }

    function handlePassword(e) {
    setPassword(e.target.value);
  }

// Aquestes dues funcions agafen l'usuari i la contrasenya introduïts per l'usuari. Aquest valor serà utilitzat 
// per el setter per a establir el valor actual d'aquest.

  function handleRegister() {
    
    const newUser = { username, password };
    setUsers([...users, newUser]);
    localStorage.setItem("users",
    JSON.stringify([...users, newUser]));
    setUsername("");
    setPassword("");
    alert(`The user ${username} has registered`)
  }
  // La funció anterior permet registrar usuaris. 
  // En primer lloc, "newUser" crea un objecte amb les variables que contenen l'user/pass creades per l'usuari.
  // Seguidament, "users" es "setteja" amb una còpia de la info actual sumada a newUser, actualitzant així la 
  // nostra array amb tots els usuaris registrats a la pàgina.
  // Ara convertim en string una nova mescla de users afegint-hi newUser. Si aquí només fessim servir "users"
  // no podriem encara incloure nous usuaris, ja que fins que no acabi la funció no tindríem la versió actualitzada
  // que hem conseguir al settejar "users".
  // Un cop fet això, buidem els inputs de username i password i mostrem una alerta conforme estem registrats.
 

  return (
    <div>
      <RegisterContainer>
        <h1>Register</h1>
        <form>
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
            <button onClick={handleRegister}type="button"><b>REGISTER</b></button>
            <br/>
              <button>
                <Link to="/Starships"><b>BACK TO STARSHIPS</b></Link>
              </button>
            
          </RegisterBox>

        </form>
      </RegisterContainer>

    </div>
  );
}

import React, { useState } from "react";
import { RegisterContainer, RegisterBox } from "./styled";
import { Link } from "react-router-dom";

//LOGIN///////////////////////////////////////////////////////////////////////////

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
      setMessage(`${username} you are logged. Welcome!`);
    } else {
      setMessage("Invalid username or password");
    }
  }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
// En aquest codi s'ha seguit una lògica similar a la de "Register". En primer lloc, però busquem 
// dins de "users" (que obtenim parsejant l'objecte "users" del localStorage) si existeix una coincidència 
// respecte les dades que ha escrit l'usuari en el LOGIN. (usuari.user/usuari/pass., recollit per event.target 
// al pulsar el botó que crida la funció handleLogin). Si existeix aquesta concordància entre la info
// intorduïda amb la del localStorage, s'enviarà un missatge de benvinguda o si no un d'error.
// Per últim, si no hi ha cap usuari emmagetzemat en users, s'inizialitzarà amb un array buit.
  return (
    <div>
      <RegisterContainer>
        <h1>Login</h1>
        <form>
          <RegisterBox>
            <div>
              Username:
              <input type="text" value={username} onChange={handleUsername} />
            </div>
          </RegisterBox>
          <RegisterBox>
            <div>
              Password:
              <input type="password" value={password} onChange={handlePassword} />
            </div>
          </RegisterBox>
          <RegisterBox>
            <button onClick={handleLogin} type="button"><b>LOGIN</b></button>
            <br/>
            <button>
            <Link to="/Starships"><b>BACK TO STARSHIPS</b></Link>
            </button>
           
          </RegisterBox>
          <RegisterBox>{message}</RegisterBox>
        </form>
      </RegisterContainer>
    </div>
  );
}

    
