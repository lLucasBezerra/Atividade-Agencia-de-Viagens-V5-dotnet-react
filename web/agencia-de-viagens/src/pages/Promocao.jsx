import React from 'react';
import "./promocaoCSS.css";
import Atlanta from "../assets/img-cards/atlanta.jpg";
import LosAngeles from "../assets/img-cards/Los-Angeles.jpg";
import Pacotes from "../components/pacotes";
export default function Promocao() {
  return (
    <>
    {/* <!-- melhores promoções --> */}
      <section className="container-fluid">
        <main className="promo">
          <h1 className="titulo linhap">Melhores promoções do mês</h1>
          
          <div className="row f-row">

            <div className="col-sm-4">
                
              <div className="card text-start card-detalhes">
                <img className="card-img-top" src={Atlanta} alt="Atlanta" height="200px" />
                <div className="card-body">
                  <a className="link-card card-titulo" href="#">
                    <h4 className="card-title titulo titulo-card">Atlanta</h4>
                  </a>
                  <small className="text-muted">Georgia</small>
                  <div className="avaliação">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  </div>
                  <hr />
                  <p className="desconto">3.500,00</p>
                  <p>R$2.300,00</p>
                  <hr />
                  <p className="card-text">
                    Visite o cidade onde foi gravada a serie <strong>Stranger Things</strong>
                  </p>
                </div>
              </div>

            </div>
            <div className="col-sm-4">
                
              <div className="card text-start card-detalhes">
                  <img className="card-img-top" src={LosAngeles} alt="Los Angeles" height="200px" />
                  <div className="card-body">
                    <a className="link-card card-titulo" href="#">
                    <h4 className="card-title titulo titulo-card">Los Angeles</h4>
                    </a>
                    <small className="text-muted">Estados Unidos</small>
                    <div className="avaliação">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                    </div>
                    <hr />
                    <p className="desconto">3.800,00</p>
                    <p>R$2.500,00</p>
                    <hr />
                    <p className="card-text">
                      Visite o cidade onde foram gravadas <strong>Várias</strong> series amadas
                    </p>
                  </div>
                </div>
              
            </div>

          </div>
        </main>
      </section>

      {/* <!-- pacotes --> */}
      <section className="container pacotes">
        <h2 className="titulo">Pacotes</h2>
        
        <Pacotes titulo={"Pacotes familia"} texto={"Pacote perfeito para quem quer aproveitar umas ferias com a familia, com um descontão para compras de passagens juntas e..."} />
       
        <Pacotes titulo={"Pacotes America do Norte"} texto={"Pacote para dar uma volta pela America do Norte nos lugares mais famosos de onde foram filmados..."} />
       
       
        <Pacotes titulo={"Pacotes Italia"} texto={"Quer desfrutar da culinária italiana e ao mesmo tempo visitar locais de filmes famosos? essa pacote é para você! Iremos lhe fornecer..."} />
        
      </section>
    </>
  )
}
