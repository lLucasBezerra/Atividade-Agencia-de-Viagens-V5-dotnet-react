import { useState } from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/Home"
import Destinos from "./pages/Destinos"
import Promocao from "./pages/Promocao"
import Contato from "./pages/Contato"
import Cadastro from "./pages/cadastro/Cadastro"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'

function App() {
  

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/destinos" element={<Destinos/>}/>
          <Route exact path="/nossocontato" element={<Contato/>}/>
          <Route exact path="/promocao" element={<Promocao/>}/>
          <Route exact path="/cadastrando" element={<Cadastro/>}/>

        </Routes>
        <Footer/>
    </Router>
    </div>
  )
}

export default App
