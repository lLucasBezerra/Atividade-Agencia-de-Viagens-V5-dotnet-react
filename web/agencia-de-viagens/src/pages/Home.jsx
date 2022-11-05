import React from 'react';
import { Link } from "react-router-dom";

import Descricao from "../components/Descricao"
import "./homeCSS.css"
import Carrossel from "../components/Carrossel"
import Londres from "../assets/img-cards/londres.png";


export default function Home() {
  return (
    <>
    <section className="container-fluid jumbosection">
      {/* <!-- CONTEUDO DA PAGINA -------------------------------------------------------------------------------> */}
      
      {/* <!-- adicionando carrossel de imagens e explicação  -------> */}
      <main className="main">
        
        {/* <!-- jumbotron com carrossel de informação principais ----------> */}
        <div className="p-md-7 carrossel carrosseljumbo">
          <div className="container-fluid ">
           
            {/* <!-- titulo --> */}
            <h3 className="titulo linha">Venha Viajar conosco!</h3>
            <p>experimente visitar os lugares onde seu filme foi gravado!</p>

            <Carrossel/>


            {/* <!-- iniciando formulario -------------------> */}
            <div>
                
                {/* <!-- titulo --> */}
                <h3 className="titulo linha">Cadastre seu destino!</h3>

                <div className="div-form">



                  {/* <!-- Botão --> */}
                  <Link className="link-cad" to={"/cadastrando"}>Vamos lá</Link>
                </div>
            </div>
          </div>
        </div>

      </main>
    </section>

    {/* Apresentação do site */}
    <Descricao/>

  

        {/* <!-- NOVIDADES --> */}
      <section className="container-fluid novidades">
        <div>
          <div className="row texto-novidades">
            <div className="col-lg">
              <h1 className="titulo ">Veja o mais novo destino que adicionamos!</h1>
              <p className="lorem parag-novidade">Aproveitando o sucesso da série Sandman, resolvemos adicionar um destino especial para você conhecer e com um <strong className="ligh-strong">SUPER DESCONTÃO!!</strong></p>
            </div>
            <div className="col-sm-4">
              <div className="card text-start card-detalhes">
                <img className="card-img-top" src={Londres} alt="castle ward" height="200px"/>
                <div className="card-body corpo-card">
                  <a className="link-card card-titulo" href="#">
                    <h4 className="card-title  titulo titulo-card">Grande Londres</h4>
                  </a>
                  <small className="text-muted">Inglaterra</small>
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
                  <hr/>
                  <p className="desconto">5.000,00</p>
                  <p>R$3.500,00</p>
                  <hr/>
                  <p className="card-text">
                    visite essa fabulosa e linda cidade onde o senhor dos sonhos apareceu <strong>Sandman.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </>
  )
}
