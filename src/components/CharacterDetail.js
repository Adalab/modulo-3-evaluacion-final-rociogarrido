import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/CharacterDetail.scss";

// 4. DETALLE DE PERSONAJES. Nueva funcionalidad: al hacer clic sobre la tarjeta de un personaje, su información aparecerá a pantalla completa. Usaremos rutas y React router. En la pantalla de detalle aparecerá además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que aparece y si está vivo o muerto.

const CharacterDetail = (props) => {
  // 6. BONUS: Mejoras visuales. Mostrar si un personaje está muerto con un icono.
  const checkStatus = () => {
    if (props.status === "Dead") {
      return "💀";
    }
  };
  // Renderizo en otra página la tarjeta de detalle de un personaje una vez la usaria la selecciona. Para ello he utilizado React Router.
  return (
    <div className="detail" key={props.id}>
      <div className="detail__btncontainer">
        <Link to="/">
          <button className="detail__btn">Volver</button>
        </Link>
      </div>
      <div className="detail__imgcontainer">
        <img
          className="detail__imgcontainer--img"
          src={props.image}
          alt={props.name}
          title={`Imagen de ${props.name}`}
        />
        <div className="detail__text">
          <h2 className="detail__name">{props.name}</h2>
          <ul className="detail__description">
            <li>Especie: {props.species}.</li>
            <li>Planeta de origen: {props.origin}.</li>
            <li>Aparece en: {props.episodes} episodios.</li>
            <li>
              Estatus: {props.status}. {checkStatus()}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
