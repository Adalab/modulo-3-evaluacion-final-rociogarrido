import React from "react";
import "../stylesheet/App.scss";

const Filters = (props) => {
  // evento que sube hasta App mediante lifting
  const handleChange = (ev) => {
    props.handleFilter(ev.target.value);
  };
  // Si, estando en el campo de filtrado pulsamos intro, debo impedir que el navegador navegue o cambie la ruta sin querer.
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };
  // Pinto el campo de texto que busca el nombre del personaje. Como nos gusta cuidar la semántica, este debe estar recubierto por una etiqueta <form />.
  return (
    <form onSubmit={handleFormSubmit}>
      <label className="label" htmlFor="name">
        Busca un personaje:
      </label>
      <input
        className="input"
        type="text"
        id="name"
        value={props.nameFilter}
        onChange={handleChange}
      />
    </form>
  );
};

export default Filters;
