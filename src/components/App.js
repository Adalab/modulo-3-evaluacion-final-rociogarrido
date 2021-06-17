import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheet/App.scss";
import getDataFromApi from "../services/getDataFromApi";
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import notFound from "../images/404error.jpeg";
import PropTypes from "prop-types";

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

  // Función manejadora del input que le paso por lifting a Filters.js para que la ejecute cuando sea necesario: "Toma, hija, esta función, y ejecútamela cuando quieras". Recibo por lifting el evento y la información que la usuaria escribe en el campo de texto, la cual es utilizada para filtrar los nombres de los personajes que coincidan con dicho texto.
  const handleFilter = (nameFilter) => {
    setNameFilter(nameFilter);
  };

  // Filtro personajes independientemente de que la usuaria introduzca el texto en mayúsculas o minúsculas.
  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(nameFilter.toLowerCase());
  });

  // Busco y pinto las tarjetas de los personajes que ha clicado la usuaria
  const renderCharacterDetail = (props) => {
    const userId = parseInt(props.match.params.characterId);
    const clickedCharacter = characters.find((character) => {
      return character.id === userId;
    });

    if (clickedCharacter) {
      return (
        <CharacterDetail
          image={clickedCharacter.image}
          name={clickedCharacter.name}
          status={clickedCharacter.status}
          species={clickedCharacter.specie}
          origin={clickedCharacter.planet}
          episodes={clickedCharacter.episodes.length}
        ></CharacterDetail>
      );
    } else {
      // 7. BONUS: URL compatible. En el caso que la usuaria navegue a una URL inexistente, debemos mostrar un mensaje del tipo "el personaje que buscas no existe".
      return (
        <div className="notFound">
          <h2>El personaje que buscas no existe</h2>
          <img className="not-found" src={notFound} alt="not found" />
        </div>
      );
    }
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Filters handleFilter={handleFilter} nameFilter={nameFilter} />
          <CharacterList characters={filteredCharacters} />
        </Route>
        <Route
          path="/character-detail/:characterId"
          render={renderCharacterDetail}
        ></Route>
      </Switch>
    </div>
  );
};

App.propTypes = {
  filteredCharacters: PropTypes.array,
};

export default App;
