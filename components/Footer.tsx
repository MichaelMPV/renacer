/**
 * Pie de página con un mensaje final de marca y año actual. Se podría
 * ampliar para incluir enlaces a redes sociales o políticas de privacidad.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="footer-columns">
          {/* Columna 1: Información de la marca */}
          <div className="footer-column">
            <h4 className="fw-bold mb-3">Renacer</h4>
            <p>
              Bienestar integrativo a través de la Bioneuroemoción y el Coaching
              Sistémico. Te acompañamos a descubrir la relación entre tus
              emociones, tus creencias y tu bienestar.
            </p>
          </div>
          {/* Columna 2: Servicios */}
          <div className="footer-column">
            <h4 className="fw-bold mb-3">Servicios</h4>
            <ul className="list-unstyled">
             
            </ul>
          </div>
          {/* Columna 3: Enlaces */}
          <div className="footer-column">
            <h4 className="fw-bold mb-3">Enlaces</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#about">Sobre Soledad Pinto</a>
              </li>
              <li className="mb-2">
                <a href="#motivacion">Mi motivación</a>
              </li>
              <li className="mb-2">
                <a href="#service">Sesiones</a>
              </li>
              <li className="mb-2">
                <a href="#gallery">Galería</a>
              </li>
              <li className="mb-2">
                <a href="#contact">Contacto</a>
              </li>
            </ul>
          </div>
          {/* Columna 4: Contacto */}
          <div className="footer-column">
            <h4 className="fw-bold mb-3">Contacto</h4>
            <p className="mb-1">soledadpinto@hotmail.de</p>
            <p className="mb-3">Berlín, Alemania</p>
            <p className="mb-2">Sígueme en redes sociales:</p>
            <div className="d-flex">
              <a href="#" className="me-3" aria-label="Facebook">
                <i className="bi bi-facebook" aria-hidden="true"></i>
              </a>
              <a href="#" className="me-3" aria-label="Instagram">
                <i className="bi bi-instagram" aria-hidden="true"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="bi bi-linkedin" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p className="mb-1 fw-semibold">
            Renacer – tu viaje hacia el equilibrio emocional
          </p>
          <p className="mb-0">© {year} Soledad Pinto. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}