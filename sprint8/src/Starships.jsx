import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { Container, Container1, Container2, Button, ButtonLoad, ContainerDetails, Header } from "./styled";
import logo from "./assets/unnamed.png";
import { NavBar } from "./NavBar";



export const Starships = () => {
    const [starships, setStarships] = useState([]);
    const [starshipChoice, setStarshipChoice] = useState();
    const [page, setPage] = useState(1);
    const [username, setUsername] = useState("");

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/starships/?page=${page}`)
            .then(response => {
                setStarships([...starships, ...response.data.results])
            })

    }, [page])

    const handleClick = (starship) => {
        setStarshipChoice(starship);
    };

    const handleNewStarships = () => {
        setPage(pages => pages === 4 ? pages = 1 : pages += 1)
            ;
    };

    // if (!starshipChoice.pilot === null) {
    //   starshipChoice.pilot.map(apis => (
    //   axios
    //   .get(apis)
    //   .then(response => {
    //     pilots([...pilots, ...response.data.results])})
    //   ))

    // }
    return (

        <div>
            <Header>
                <ul>
                    <li className="img-container">
                        <img src={logo} alt="logo Star Wars" className="logo" />
                    </li>
                    <li><a href="">LOGIN</a></li>
                    <li><a href="">SIGN UP</a></li>
                </ul>
            </Header>
            <NavBar>
            </NavBar>
            <Container>
                <Container1>
                    <div>
                        {starships.map(starship => (
                            <p key={uuidv4()} onClick={() => handleClick(starship)}>
                                <Button>
                                    <h4>{starship.name.toUpperCase()}</h4>
                                    <h5>{starship.model}</h5>
                                </Button>
                            </p>
                        ))}
                    </div>
                    <ButtonLoad onClick={handleNewStarships}>LOAD MORE STARSHIPS</ButtonLoad>
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
}
