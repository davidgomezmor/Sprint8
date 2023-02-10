import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/starships/")
      .then(response => {
        setStarships(response.data.results)
        console.log(response.data.results)
      })

  }, [])

  return (
    <div>
      <h1>Star Wars</h1>
      <div>
        {starships.map(starship => (
          <p key={uuidv4()}> 
            Name: {starship.name} 🚀 Model: {starship.model}
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;