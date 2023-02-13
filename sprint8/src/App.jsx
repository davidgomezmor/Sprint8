import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { Container, Container1, Container2, Button, ContainerDetails, NavBar } from "./styled";
import starWars from "./assets/descarga.svg";
// import './App.css';

const App = () => {
  const [starships, setStarships] = useState([]);
  const [starshipChoice, setStarshipChoice] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/?page=${page}`)
      .then(response => {
        setStarships([...starships, ...response.data.results])})

  }, [page])

  const handleClick = (starship) => {
    setStarshipChoice(starship);
  };

  const handleNewStarships = () => {
    setPage(pages => pages === 4 ? pages = 1 : pages += 1)
    ; 
  };
  
  return (
    <div>
     
      <Container>
        <Container1>
          <h1>Star Wars</h1>
          <div>
            {starships.map(starship => (
              <p key={uuidv4()} onClick={() => handleClick(starship)}>

                <Button>
                  Name: {starship.name}
                </Button>
              </p>
            ))}

          </div>
          <Button 
          onClick={handleNewStarships}>Load more starships</Button>
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
    </div>
  );
};

export default App;