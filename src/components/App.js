import React, { useEffect, useState } from "react";
import "../stylesheet/App.css";
import getDataFromApi from "../services/getDataFromApi";

const App = () => {
  // usamos el hook useState para definir dos propiedades del estado del componente (cada uno de esos hooks actúa sobre la propiedad especificada por medio de la función que le hemos pasado en cada caso, recibiendo como argumento inicial de useState un array y un string vacío.
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState("");

  // Recojo los datos del API haciendo uso del ciclo de vida de los componentes para evitar llamadas innecesarias a la misma.
  useEffect(() => {
    // llamo al servicio
    getDataFromApi().then((data) => {
      setCharacters(data); // cuando responde el servidor guardamos los datos en el estado
    });
  }, []); // con este array vacío, le decimos a React que solo ejecute este useEffect una vez

  return <div className="App">Hola, mundo</div>;
};

export default App;
