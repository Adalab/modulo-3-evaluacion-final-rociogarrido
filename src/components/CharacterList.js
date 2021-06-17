import React from "react";
import CharacterCard from "./CharacterCard.js";
import "../stylesheet/CharacterList.scss";
import image from "../images/no_results2.png";
import PropTypes from "prop-types";

const CharacterList = (props) => {
  // console.log(props);
  // Recibo por props los datos de App y pinto una lista que contendrá, mediante un mapeo, cada una de las tarjetas de los personajes como un item dentro de dicha lista.
  const characterElements = props.characters.map((character) => {
    return (
      <CharacterCard
        key={character.id}
        character={character}
        name={character.name}
        species={character.species}
        image={character.image}
      />
    );
  });

  // Si se busca un texto como XXX y no hay ningún personaje que coincida, se debe mostrar un mensaje del tipo "No hay ningun personaje que coincida con la búsqueda".
  if (props.characters.length === 0) {
    return (
      <div>
        <p className="no-results">No se encuentran resultados</p>
        <img
          className="no-results__img"
          src={image}
          alt="No hay resultados"
          title="No hay resultados"
        />
      </div>
    );
  }

  return (
    <div className="list-container">
      <ul className="card-list">{characterElements}</ul>
    </div>
  );
};

CharacterList.propTypes = {
  character: PropTypes.array,
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
};

export default CharacterList;
