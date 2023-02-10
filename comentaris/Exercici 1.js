//Exercici 1: Mostrar les naus i el seu model


import React, { useState, useEffect } from "react";
import axios from "axios"; // s'ha d'instalar amb "npm install axios". És una llibreria HTTP, que serveix per a 
//fer solicituds des de Javascript a una API.
import { v4 as uuidv4 } from 'uuid'; // s'ha d'instalar amb npm "npm install uuid". Això em genera ID per les key.

// Creo la funció App i estableixo l'useState, que inicialitzo amb un arraybuit ([]), ja que encara no he muntat
// el component i l'array de les naus s'ha d'omplir amb la info que rebré després de l'API:

const App = () => {
    const [starships, setStarships] = useState([]);

    useEffect(() => {
        axios
            .get("https://swapi.dev/api/starships/")

            // .get recordem que és un mètode HTTP que agafa info d'un servidor. En aquest cas agafa les dades de les 
            // naus de la nostra api. No puc servir per exemple el mètode "post" perque aquesta API no l'admet.
            
            // A continuació tenim el .then, que es un mètode de js que fa servir promeses (el resultat d'una operació 
            // asíncrona). .then espera a que la promesa es compleixi (quan rebi la info del servidor) i una vegada és 
            // així, REP EL VALOR amb el que s'ha resolt/complert executa el codi que conté entre "{}" 
            .then(response => {
                // "response" és la variable que conté les dades de l'API ara mateix. Així que si fes un consolelog()
                // per a veure les dades de l'API per consola, hauria de fer-lo de tota aquesta variable (response.data...)
                // si ho fes de "starships" NO funcionaria encara.
                setStarships(response.data.results)

            })
    }, [])
    // Aquest "[]" no té cap element a l'array, perque, només vull executar-lo una vegada. Recordem que si li posès
    // algun element dins, l'useEffect s'executaria cada vegada que aquest element canviés.

    return (
        <div>
            <h1>Star Wars</h1>
            {/* La key és necessaria per a que React pugui identificar de manera única cada component 
            i actualizar-los de manera eficient en cas de canvis en les dades 
            Per cert, ley està dins de la p perque la volem assignar pero no imprimir.*/}
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

////////////////////////////////////////////////////////////////////////////////////////

