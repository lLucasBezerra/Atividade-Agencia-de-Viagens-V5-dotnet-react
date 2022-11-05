import React from 'react'
import { Link } from 'react-router-dom'
export default function index() {
  return (
    // <!-- Footer -->
    <section class="container-fluid">
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item"><Link to="/"  className="nav-link px-2 text-muted">Home</Link></li>
          <li class="nav-item"><Link to="/promocao"  className="nav-link px-2 text-muted">Promoções</Link></li>
          <li class="nav-item"><Link to="/destinos"  className="nav-link px-2 text-muted">Destinos</Link></li>
          <li class="nav-item"><Link to="/nossocontato"  className="nav-link px-2 text-muted">Contatos</Link></li>
        </ul>
        <p class="text-center text-muted">© 2022 Viagens & Cinema</p>
      </footer>
    </section>
  )
}
