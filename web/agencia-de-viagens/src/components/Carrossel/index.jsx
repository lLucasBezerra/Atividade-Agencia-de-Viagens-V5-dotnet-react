import React from 'react'
import CarrosselI from "../../assets/img-carrossel/img-1-carrossel.jpg";
import CarroselII from "../../assets/img-carrossel/img-2-carrossel.jpg";
import CarrosselIII from "../../assets/img-carrossel/img-3-carrossel1.jpg";

export default function index() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
              </div>

              {/* <!-- imagens do carrossel --> */}
              {/* <!-- imagem 1 --> */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="img-carrossel d-block" src={CarrosselI} alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Resolva vivenciar suas obras favoritas</h5>
                    <p>Visitando os locais que elas foram <strong>inspiradas</strong></p>
                  </div>
                </div>

                {/* <!-- imagem 2 --> */}
                <div className="carousel-item">
                  <img className="img-carrossel d-block" src={CarroselII} alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Com <strong>preço acessível</strong></h5>
                    <p><strong>Chame sua familia</strong> para realizar esse sonho com você!</p>
                  </div>
                </div>

                {/* <!-- imagem 3 --> */}
                <div className="carousel-item">
                  <img className="img-carrossel d-block" src={CarrosselIII} alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>E com uma Experiencia <strong>única</strong></h5>
                    <p>Nós mesmos planejamos uma rotina de viagem perfeita!</p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
  )
}
