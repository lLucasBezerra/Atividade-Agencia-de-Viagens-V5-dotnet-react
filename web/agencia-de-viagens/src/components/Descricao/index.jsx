import React from 'react'
import iconCetificado from "../../assets/certificate-svgrepo-com.svg";
import "./style.css"

export default function index() {
  return (

    <section className="container section-apresentacao">
    {/* <!-- explicação da agencia --------------> */}

    <div className="container explicacao">

      {/* <!-- Titulo Principal --> */}
      <h1 className="titulo">Nos conheça!</h1>

      <div className="row">
        <div className="col-sm col-text">
          
          {/* <!-- Titulo Secundario --> */}
          <h3 className="titulo">Nosso objetivo</h3>
          <p className="lorem">
            nosssa agência foi criada com o intúito de realizar os sonhos dos nossos clientes: <br/> <br/>
            <strong>Descobrir e Visitar o locais em que seu filme e ou obra foi inspirado ou gravada!</strong>
          </p>
        </div>
        <div className="col-sm col-text">
          
          {/* <!-- Titulo Secundario --> */}
          <h3 className="titulo">Benefícios</h3>
          <p className="lorem">
            Lorem ipsum, dolor sit amet <strong>consectetur adipisicing elit.</strong> Fugit facilis in commodi, aut
            repellat omnis aliquam aliquid iste reiciendis minima a nesciunt nemo nihil consectetur vero possimus
            blanditiis dolores ex.
          </p>
          <div className="svg">
            <img src={iconCetificado} alt="" width="100px"/>
          </div>
        </div>
        <div className="col-sm col-text">
          
          {/* <!-- Titulo Secundario --> */}
          <h3 className="titulo">Seguros</h3>
          <p className="lorem">
            Lorem ipsum, dolor sit amet <strong>numquam eveniet reprehenderit voluptate voluptates vel, quisquam laborum porro!</strong> Fugit facilis in commodi, aut repellat omnis aliquam aliquid iste reiciendis minima a nesciunt nemo <strong>consectetur adipisicing elit.</strong> nihil consectetur vero possimus
            blanditiis dolores ex.
          </p>
        </div>
      </div>
    </div>
  </section>

  )
}
