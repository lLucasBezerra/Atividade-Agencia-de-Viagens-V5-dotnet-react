import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";
import "./cadastroCSS.css";
export default function cadastro() {

    let navigate =useNavigate();

    // variaveis para resolver o problema do post
    const [idDest, setIdDest]= useState();
    const [idVoo, setIdVoo] = useState();

    const [clientes, setCliente] = useState({
        cpf: "",
        origem: "",
        dataIda: "",
        dataVolta: ""
        // destino:{
        //     id: idDest
        // },
        // voo:{
        //     id: idVoo
        // }
    })
    const { cpf, origem, dataIda, dataVolta } = clientes;
    // const { id: codDest } = clientes.destino;
    // const {id: codVoo} = clientes.voo;


    const [destinos, setDestinos] = useState([]);
    const [voos, setVoos] = useState([]);

    const onInputChange = (e) =>{
        setCliente({...clientes, [e.target.name]:e.target.value})
    }

    // para tentar ajustar o problema do post
    const onInputChangeSelectDest = (e) =>{
        setIdDest(parseInt(e.target.value));
        console.log(typeof idDest)
        
    }
    
    const onInputChangeSelectVoo = (e) =>{
        setIdVoo(parseInt(e.target.value));
        console.log(typeof idVoo)
        
    }


    useEffect(() => {
        carregarDestinos();
        carregarVoo();
    }, [])


    const carregarDestinos = async () =>{
        const result= await axios.get("http://localhost:8080/api/destinos");
        setDestinos(result.data);
        // console.log(result.data);
    }

    const carregarVoo = async () =>{
        const result = await axios.get("http://localhost:8080/api/voos");
        setVoos(result.data);
        // console.log(result.data);
    }


    const onSubmit = async (e) => {
        //para n mostrar tudo no link
        e.preventDefault();

        //não consegui fazer o post funcionar, desculpe.
        // atualização. consegui, mas não do jeito que eu queria

         await axios.post("http://localhost:8080/api/cliente", {
            cpf: cpf,
            origem: origem,
            dataIda: dataIda,
            dataVolta: dataVolta,
            destino:{
                id: idDest
            },
            voo:{
                id: idVoo
            }
         })
        
        //nessa caso, a pagina inicial
        navigate("/")
    } 
  
    return (
    <section className="container cadastro">
	<form className="cadDestino" onSubmit={(e) => onSubmit(e)}>
    	<h1 className="titulo">Cadastrando-se</h1>
    
        <div className="div-form cadastro-rapido">
 			{/* <!-- CPF --> */}
            <div className="input cad-rap-input">
          					{/* <!-- com  -> "required" <-  não ha necessidade de criar um arquivo jso para validar --> */}
                <input 
                name="cpf" 
                value={cpf}
                type={"text"}
                placeholder="CPF" 
                required  
                onChange={(e)=> onInputChange(e)} />
                <small id="emailHelpId" className="form-text text-muted small-texto">CPF</small>
            </div>
          
           {/* <!-- Origem --> */}
            <div className="input cad-rap-input">
                <input 
                name="origem" 
                value={origem}
                type={"text"} 
                placeholder="Origem" 
                required  
                onChange={(e)=> onInputChange(e)} />
                <small id="emailHelpId" className="form-text text-muted small-texto">Origem</small>
            </div>

          {/* <!-- Data da ida --> */}
            <div className="input cad-rap-input">
                <input 
                name="dataIda" 
                value={dataIda}
                type={"date"} 
                required  
                onChange={(e)=> onInputChange(e)} />
                <small id="emailHelpId" className="form-text text-muted small-texto">Data de Ida</small>
            </div>

          {/* <!-- Data da volta --> */}
            <div className="input cad-rap-input">
                <input 
                name="dataVolta" 
                value={dataVolta}
                type={"date"} 
                required  
                onChange={(e)=> onInputChange(e)} />
                <small id="emailHelpId" className="form-text text-muted small-texto">Data de Volta</small>
            </div>
        </div>
    
    	<h3 className="titulo">Destinos disponíveis</h3>


        {/* para fazer a escolha do destino */}
        <small id="emailHelpId" className="form-text text-muted small-texto">Escolha: </small>
        <select 
        name="destino" 
        id="destino"
        onChange={(e)=> onInputChangeSelectDest(e)}
        value={idDest}>

            {destinos.map((destinos, index)=>(
                <option key={index} value={destinos.id}>{destinos.id} : {destinos.cidade} - {destinos.obraR}</option>
            ))}

        </select>
	<table className="table">
  		<thead className="thead-dark th-color">
    		<tr>
     		 <th scope="col">ID</th>
     		 <th scope="col">PAÍSES</th>
     		 <th scope="col">CIDADE</th>
     		 <th scope="col">OBRA RELACIONADA</th>
    		</tr>
  		</thead>
  		<tbody className="bodyTable">
            {
                destinos.map((destinos,index) =>(
                    
                    <tr>
                        <th scope="row" key={destinos.id}>{destinos.id}</th>
                        <td>{destinos.paises}</td>
                        <td>{destinos.cidade}</td>
                        <td>{destinos.obraR}</td>
                    </tr>
                ))
            }
  		</tbody>
	</table>


	<h3 className="titulo">Escolhendo sua companhia de viagens</h3>



{/* para fazer a escolha do voo */}
    <small id="emailHelpId" className="form-text text-muted small-texto">Escolha: </small>
    <select 
        name="voo" 
        id="voo"
        onChange={(e)=> onInputChangeSelectVoo(e)}
        value={idVoo}>

            {voos.map((voo, index)=>(
                <option key={index} value={voo.id}>{voo.id} : {voo.companhiaA} - {voo.preco},00</option>
            ))}

    </select>
	<table className="table">
 		 <thead className="thead cabecalho-table th-color">
            <tr>
                <th scope="col">ID</th>
                <th scope="col">COMPANHIA DE VIAGENS</th>
                <th scope="col">PREÇO(R$)</th>
            </tr>
  		</thead>
  		<tbody>
          {
                voos.map((voos,index) =>(
                    <tr>
                        <th scope="row" key={voos.id}>{voos.id}</th>
                        <td>{voos.companhiaA}</td>
                        <td>{voos.preco},00</td>
                    </tr>
                ))
          }
  		</tbody>
	</table>
	<button type="submit" className="btn btn-success">Fim</button>
    <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
</form>
    
	</section>
  )
}
