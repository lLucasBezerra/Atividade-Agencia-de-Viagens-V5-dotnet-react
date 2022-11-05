import React from 'react'

import "./destinosCSS.css"

import Atlanta from "../assets/img-cards/atlanta.jpg";
import CastleWard from "../assets/img-cards/castle_ward.jpg";
import CinqueTerre from "../assets/img-cards/Cinque-Terre1.jpg";
import EmBreve from "../assets/img-cards/em-breve.jpg";
import Londres from "../assets/img-cards/londres.png";
import LosAngeles from "../assets/img-cards/Los-Angeles.jpg";
import Paris from "../assets/img-cards/Paris.jpg";
import Sicilia from "../assets/img-cards/Sicilia.jpg";

export default function Destinos() {
  // não consegui desenvolver um componente pros cards ainda
  return (
    <>
    {/* <!-- textinho --> */}
    <section class="container-fluid textinho">
      <h1 class="titulo">Veja o nosso catálogo de Viagens disponíveis</h1>
    </section>

{/* <!-- cards do destino --> */}
    <section class="container-fluid">
      <main>
        {/* <!-- linha 1 --> */}
        <div class="row">
          {/* <!-- vai ter algo aqui --> */}
          <div class="col-sm menu-destino">
            <h4 class="titulo">lista de países</h4>
            <ul>
              <li>Estados Unidos(2)</li>
              <li>Italia(3)</li>
              <li>Irlanda(1)</li>
              <li>Georgia(1)</li>
            </ul>
          </div>
          {/* <!-- card 1 --> */}
          <div class="col-sm">
            <div class="card text-start card-detalhes">
              <img class="card-img-top" src={CinqueTerre} alt="Cinque-Terre" height="200px" />
              <div class="card-body corpo-card">
                <a class="link-card card-titulo" href="#">
                  <h4 class="card-title  titulo titulo-card" >Cinque-Terre</h4>
                </a>
                <small class="text-muted">Itália</small>
                <div class="avaliação">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                </div>
                <hr />
                {/* <p class="desconto">5.000,00</p> */}
                <p>R$4.500,00</p>
                <hr />
                <p class="card-text">
                  inspiração para o lindo filme de animação <strong>Luca</strong>
                </p>
              </div>
            </div>
          </div>
          {/* <!-- card 2 --> */}
          <div class="col-sm">
            
            <div class="card text-start card-detalhes">
              <img class="card-img-top" src={Paris} alt="Paris" height="200px" />
              <div class="card-body corpo-card">
                <a class="link-card card-titulo" href="#">
                  <h4 class="card-title titulo titulo-card">Paris</h4>
                </a>
                <small class="text-muted">Itália</small>
                <div class="avaliação">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                </div>
                <hr />
                {/* <p class="desconto">6.000,00</p> */}
                <p>R$5.700,00</p>
                <hr />
                <p class="card-text">
                  visite a cidade e o restaurante onde o filme Ratatoulle foi inspirado: <strong>Tour d'Argent</strong>
                </p>
              </div>
            </div>

          </div>
          {/* <!-- card 3 --> */}
          <div class="col-sm">
            <div class="card text-start card-detalhes">
              <img class="card-img-top" src={Sicilia} alt="Sicíclia" height="200px" />
              <div class="card-body corpo-card">
                <a class="link-card card-titulo" href="#">
                  <h4 class="card-title titulo titulo-card">Sicília</h4>
                </a>
                <small class="text-muted">Itália</small>
                <div class="avaliação">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                  </svg>
                </div>
                <hr />
                <p>3.100,00</p>
                <hr />
                <p class="card-text">
                  visite a cidade em que <strong>Poderoso Chefão</strong> foi gravado
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- linha 2 --> */}
        <div class="row">
          {/* <!-- nada --> */}
          <div class="col-sm menu-destino">
            
          </div>
            {/* <!-- card 4 --> */}
            <div class="col-sm">
              <div class="card text-start card-detalhes">
                <img class="card-img-top" src={CastleWard} alt="castle ward" height="200px" />
                <div class="card-body corpo-card">
                  <a class="link-card card-titulo" href="#">
                    <h4 class="card-title  titulo titulo-card">Condado de Down</h4>
                  </a>
                  <small class="text-muted">Irlanda</small>
                  <div class="avaliação">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star" viewBox="0 0 16 16">
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star" viewBox="0 0 16 16">
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                    </svg>
                  </div>
                  <hr />
                  {/* <p class="desconto">3.500,00</p> */}
                  <p>R$2.700,00</p>
                  <hr />
                  <p class="card-text">
                    visite o castelo que aparece na série <strong>Game of Thrones</strong>
                  </p>
                </div>
              </div>
            </div>
            
            {/* <!-- card 5 --> */}
            <div class="col-sm">
            
              <div class="card text-start card-detalhes">
                <img class="card-img-top" src={Atlanta} alt="Atlanta" height="200px" />
                <div class="card-body corpo-card">
                  <a class="link-card card-titulo" href="#">
                    <h4 class="card-title titulo titulo-card">Atlanta</h4>
                  </a>
                  <small class="text-muted">Georgia</small>
                  <div class="avaliação">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  </div>
                  <hr />
                  <p class="desconto">3.500,00</p>
                  <p>R$2.300,00</p>
                  <hr />
                  <p class="card-text">
                    Visite o cidade onde foi gravada a serie <strong>Stranger Things</strong>
                  </p>
                </div>
              </div>

            </div>

            {/* <!-- card 6 --> */}
            <div class="col-sm">
            
              <div class="card text-start card-detalhes">
                  <img class="card-img-top" src={LosAngeles} alt="Los Angeles" height="200px" />
                  <div class="card-body corpo-card">
                    <a class="link-card card-titulo" href="#">
                    <h4 class="card-title titulo titulo-card">Los Angeles</h4>
                    </a>
                    <small class="text-muted">Estados Unidos</small>
                    <div class="avaliação">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                    </div>
                    <hr />
                    <p class="desconto">3.800,00</p>
                    <p>R$2.500,00</p>
                    <hr />
                    <p class="card-text">
                      Visite o cidade onde foram gravadas <strong>Várias</strong> series amadas
                    </p>
                  </div>
                </div>
              
               </div>
        </div>
                  {/* <!-- linha 3 --> */}
                  <div class="row">
                    {/* <!-- nada --> */}
                    <div class="col-sm menu-destino">
                      
                    </div>
                      {/* <!-- card 7 --> */}
                      <div class="col-sm">
                        <div class="card text-start card-detalhes">
                          <img class="card-img-top" src={Londres} alt="Londres" height="200px" />
                          <div class="card-body corpo-card">
                            <a class="link-card card-titulo" href="#">
                              <h4 class="card-title  titulo titulo-card">Grande Londres</h4>
                            </a>
                            <small class="text-muted">Inglaterra</small>
                            <div class="avaliação">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                            </div>
                            <hr />
                            {/* <p class="desconto">5.000,00</p> */}
                            <p>R$3.500,00</p>
                            <hr />
                            <p class="card-text">
                              visite essa fabulosa e linda cidade onde o senhor dos sonhos apareceu <strong>Sandman.</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* <!-- card 8 --> */}
                      <div class="col-sm">
                      
                        <div class="card text-start card-detalhes">
                          <img class="card-img-top" src={EmBreve} alt="Atlanta" height="200px" />
                          <div class="card-body corpo-card">
                            <a class="link-card card-titulo" href="#">
                              <h4 class="card-title titulo titulo-card">EM BREVE</h4>
                            </a>
                            <hr />
                            <p>R$0.000,00</p>
                            <hr />
                          </div>
                        </div>
          
                      </div>
        
                      {/* <!-- card 9 --> */}
                      <div class="col-sm">
                      
                        <div class="card text-start card-detalhes">
                            <img class="card-img-top" src={EmBreve} alt="Los Angeles" height="200px" />
                            <div class="card-body corpo-card">
                              <a class="link-card card-titulo" href="#">
                              <h4 class="card-title titulo titulo-card">EM BREVE</h4>
                              </a>
                              <hr />
                              <p>R$0.000,00</p>
                              <hr />
                            </div>
                          </div>
                        
                         </div>
                  </div>

      </main>
    </section>

    </>
  )
}
