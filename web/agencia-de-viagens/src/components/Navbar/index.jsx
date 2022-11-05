import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function index() {

  //navbar responsiva pq nem o bootstrap funciona
  const [ativo, setAtivo] = useState(false);
const mostrarMenu = () =>{
  setAtivo(!ativo);
}

  return (
    <section className="container-fluid">

      {/* <!-- CABEÇALHO DA PAGINA ----------------------------------------------------------------------------->
      <!-- barra de navegação e imagem de fundo --> */}
      <header className="container-fluid">

        <nav>

          {/* <!-- """"logo"""" --> */}
          <Link className="logo" to="/">Viagens & Cinema</Link>

          {/* <!-- botão responsivo da navbar --> */}
          <buttom type="buttom" className="hamburger" id="hamburger" onClick={mostrarMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" className="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </buttom>

          
          <ul className={ativo ? "navHub show" : "navHub"} id="navHub">
            <li><Link className="nv-links" to="/">HOME</Link></li>
            <li><Link className="nv-links" to="/promocao">PROMOÇÕES</Link></li>
            <li><Link className="nv-links" to="/destinos">DESTINOS</Link></li>
            <li><Link className="nv-links" to="/nossocontato">CONTATO</Link></li>
          </ul>
        </nav>

      </header>
    </section>

  )
}
