import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { Container, Container1, Container2, Button, ContainerDetails, NavBar } from "./styled";


const App = () => {
    const [starships, setStarships] = useState([]);
    const [starshipChoice, setStarshipChoice] = useState();
    const [page, setPage] = useState(1);
    // Creo un nou useState anomenat "page" que utilitzaré per a desplaçar-me per les pàgines de la meva API.
    // L'inizialitzo en "1", ja que crec que l'API té "4" pàgines de naus.

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/starships/?page=${page}`)
            // Es pot observar que just a dalt he pogut insertar la variable numèrica "pages" per a desplaçar-me per les
            // pàgines de naus que té la meva API a mesura que aquesta incrementa.
            .then(response => {

                // Aquí estic fent servir "l'spread operator" (els tres punts "...") per a fer còpies i així no alterar les 
                // variables originals. Amb això el que busco és ACTUALITZAR l'estat de "starships" (l'array amb les naus) 
                // afegint-hi les noves naus que estic rebent amb la nova crida d'API. És a dir, aquesta crida que depèn de la 
                // pàgina a la que estigui (segons la variable page), ja que no vull deixar d'incloure les naus que he mostrat 
                // anteriorment. 
                // El que estem fent és agafar els elements d' "starships" i "response.data.results" i fusionar les dues 
                // variables dins l'array per a actualitzar l'estat d'"starships". Recordem que "starships" és l'estat actual 
                // i response.data.results conté les noves dades (o naus) d'aquesta nova crida d'una nova pàgina. 

                // Si ho necessités, escrivint "," podria anar afegint tots els elements que volgués dins l'array "starships"
                // dins del [] del setter "setStarships".

                setStarships([...starships, ...response.data.results])
            })
        // Ara sí hem inclòs un element dins del "[]". Ho hem fet perque ara volem que les dades contingudes a l'estat 
        // "starship" sí s'actualitzin i es carreguin cada vegada que el número de pàgina canvii. 

    }, [page])

    const handleClick = (starship) => {
        setStarshipChoice(starship);
    };

    // A continuació tenim la funció "handleNewStarships", que s'activa quan es produeix l'event "click"/onCLick  
    // i el que fa és canviar l'estat de "page". Primer, agafa el valor actual de "page" (suposem que és "1") i 
    // retorna de nou el seu valor pero sumant-li "1". D'aquesta manera, conseguim que, al fer click al botó 
    // "Load more starships", la nostra variable aumenti +1 i ens permeti passar de pàgina (ara a la 2) a la nostra 
    // canviant l'enllaç de l'API amb la nostra variable.  

    const handleNewStarships = () => {
        return setPage(pages => pages += 1);
    };
    // per a implementar l'"scroll" infinit, he escrit aquest codi després de l'arrow function anterior:
    (pages === 4 ? pages = 1 : pages += 1) 
    // D'aquesta manera he aconseguit que mai s'arribi a l'error que suposava arribar a la 
    // pàgina 5, que no existeix i per tant donava error. Ara la pàgina sempre anirà mostrant
    // naus. Encara que a partir d'un punt siguin repetides.

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
                                    Name: {starship.model}
                                </Button>
                            </p>
                        ))}

                    </div>
                    {/* El següent botó és el que modifica la nostra variable "pages", afegint-hi +1 al preme'l, 
          permetent-nos canviar de pàgina a l'API que estem consumint*/}
                    <Button onClick={handleNewStarships}>Load more starships</Button>
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