import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { Container, Container1, Container2, Button, ContainerDetails } from "./styled";

const App = () => {
  const [starships, setStarships] = useState([]);
  const [starshipChoice, setStarshipChoice] = useState();

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/starships/")
      .then(response => {
        console.log(response.data.results)
        setStarships(response.data.results)
      })

  }, [])

  const handleClick = (starship) => {
    setStarshipChoice(starship);
  };

  return (

    <Container>
      <Container1>
        <h1>Star Wars</h1>
        <div>
          {starships.map(starship => (
            <p key={uuidv4()} onClick={() => handleClick(starship)}>

              <Button>
                🚀 Name: {starship.name}
              </Button>

            </p>
          ))}
        </div>
      </Container1>
      <Container2>
        {starshipChoice && (
          <div>

            <ContainerDetails>
              <h2>Details</h2>
              <p>Name: {starshipChoice.name}</p>
              <p>Model: {starshipChoice.model}</p>
              <p>Manufacturer: {starshipChoice.manufacturer}</p>
              <p>Cost in Credits: {starshipChoice.cost_in_credits}</p>
              <p>Length: {starshipChoice.length}</p>
              <p>Crew: {starshipChoice.crew}</p>
              <p>Passenger Capacity: {starshipChoice.passenger_capacity}</p>
              <p>Cargo Capacity: {starshipChoice.cargo_capacity}</p>
              <p>Consumables: {starshipChoice.consumables}</p>
              <p>Pilots: {starshipChoice.pilots}</p>
              <p>max_atmosphering_speed: {starshipChoice.max_atmosphering_speed}</p>

            </ContainerDetails>

          </div>
        )}

      </Container2>
    </Container>

  );
};

export default App;