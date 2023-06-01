import React, { useState } from "react";
import Card from "./Card";
import Error from "./Error";
import "./Form.css";

const Form = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    jediFav: "",
  });

  const [showCard, setShowCard] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const nombreTarget = event.target.querySelector(".nombre").value;
    const jediFavTarget = event.target.querySelector(".jediFav").value;

    if (
      nombreTarget.trim().length < 3 ||
      /^\s/.test(nombreTarget) ||
      jediFavTarget.trim().length < 6
    ) {
      setShowError(true);
      setShowCard(false);
    } else {
      setShowError(false);
      setShowCard(true);
      setUsuario({ nombre: nombreTarget, jediFav: jediFavTarget });
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Ingresá tu nombre"
          className="nombre"
        />
        <input
          type="text"
          placeholder="Ingresá tu jedi favorito"
          className="jediFav"
        />
        <button type="submit" className="submit-button">
          Enviar
        </button>
      </form>
      {showCard && <Card usuario={usuario} />}
      {showError && <Error />}
    </div>
  );
};

export default Form;