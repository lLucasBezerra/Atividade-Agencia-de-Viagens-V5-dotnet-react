import React from 'react';
import "./style.css";

export default function index(props) {
  return (
    <div className="div-pac">
    <a  className="promo-titulo" href="#"><h4 className="titulo">{props.titulo}</h4></a>
    <p className="lorem p-pacote">{props.texto}</p>
    <input className="promo-input" type="submit" value="continuar" />
  </div>
  )
}
