import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { Container, Container1, Container2, ContainerInfo1, ContainerInfo2, ContainerInfo3, Button, ButtonLoad, ContainerDetails, Header, ContainerColumnsInfo } from "./styled";
import logo from "../assets/unnamed.png";
import { NavBar } from "./NavBar";



export const Starships = () => {
    const [starships, setStarships] = useState([]);
    const [starshipChoice, setStarshipChoice] = useState();
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/starships/?page=${page}`)
            .then(response => {
                setStarships([...starships, ...response.data.results])
            })

    }, [page])

    const handleClick = (starship) => {
        if (starship === starshipChoice) {
            setStarshipChoice(null);
        } else {
            setStarshipChoice(starship);
        }
    };

    const handleNewStarships = () => {
        setPage(pages => pages === 4 ? pages = 1 : pages += 1)
            ;
    };

    return (

        <div>
            <Header>
                <ul>
                    <li className="img-container">
                        <img src={logo} alt="logo Star Wars" className="logo" />
                    </li>
                    <li><a href="/Login">LOGIN</a></li>
                    <li><a href="/Register">SIGN UP</a></li>
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
                                <ContainerDetails>
                                    <button onClick={() => setStarshipChoice(null)}>X</button>
                                </ContainerDetails>
                                <div>
                                    <ContainerInfo1>
                                        <h2><b> {starshipChoice.name}</b></h2>

                                        <p><b>MODEL:</b> {starshipChoice.model}</p>
                                        <p><b>STARSHIP CLASS:</b> {starshipChoice.starship_class}</p>
                                        <p><b>MANUFACTURER:</b> {starshipChoice.manufacturer}</p>
                                        <p><b>COST IN CREDITS:</b> {starshipChoice.cost_in_credits}</p>


                                    </ContainerInfo1>
                                </div>
                                <ContainerColumnsInfo>
                                    <ContainerInfo2>
                                        <p><b>LENGTH:</b> {starshipChoice.length}</p>
                                        <p><b>MAXIMUM ATHMOSPHERING SPEED: </b> {starshipChoice.max_atmosphering_speed}</p>
                                        <p><b>HYPERDRIVE RAITING: </b> {starshipChoice.hyperdrive_rating}</p>
                                        <p><b>MAXIMUM SPEED IN REAL SPACE: </b> {starshipChoice.MGLT}</p>
                                        <br />
                                        <p><b>PILOTS:</b> {starshipChoice.pilots}</p>
                                    </ContainerInfo2>
                                    <ContainerInfo3>
                                        <p><b>CREW:</b> {starshipChoice.crew}</p>
                                        <p><b>PASSENGER CAPACITY:</b> {starshipChoice.passengers}</p>
                                        <p><b>CARGO CAPACITY:</b> {starshipChoice.cargo_capacity}</p>
                                        <p><b>CONSUMABLES:</b> {starshipChoice.consumables}</p>

                                    </ContainerInfo3>
                                </ContainerColumnsInfo>
                            </ContainerDetails>
                        </div>
                    )}
                </Container2>
            </Container>
        </div>
    );
}
