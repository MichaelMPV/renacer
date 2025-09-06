"use client";

import Link from 'next/link';
import { useEffect } from 'react';

/**
 * Barra de navegación superior.
 * Se carga como componente cliente ya que importa el JS de Bootstrap para
 * habilitar el menú colapsable en dispositivos móviles.
 */
export default function NavBar() {
  // Cargar el bundle de JS de Bootstrap en el lado del cliente
  useEffect(() => {
    // La importación dinámica evita que el código se ejecute en el servidor.
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
    >
      <div className="container">
        <Link href="#" className="navbar-brand fw-bold">
          RENACER
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Sobre mí
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#motivacion">
                Motivación
              </a>
            </li> 
            <li className="nav-item">
              <a className="nav-link" href="#gallery">
                Galería
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}