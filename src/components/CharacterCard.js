import React from "react";
import "../stylesheet/CharacterCard.scss";
import { Link } from "react-router-dom";

// 1. LISTADO DE PERSONAJES. Pinto el contenido dentro de cada tarjeta de personaje: cada una es un <li> que contiene una imagen, nombre y especie del personaje en cuestión.
const CharacterCard = (props) => {
  return (
    <li className="card">
      <Link className="link" to={`/character-detail/${props.character.id}`}>
        <img
          className="card__img"
          src={props.character.image}
          alt={`Imagen de ${props.character.name}`}
        />
        <h3 className="card__title">{props.character.name}</h3>
        <p className="card__description">{props.character.specie}</p>
      </Link>
    </li>
  );
};

export default CharacterCard;
