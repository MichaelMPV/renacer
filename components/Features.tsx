/**
 * Sección de características que resume las ventajas y valores diferenciadores
 * del acompañamiento. Inspirada en las tarjetas de Salutissimo, utiliza
 * tres columnas con imágenes abstractas y textos breves para transmitir
 * confianza y claridad de forma visualmente atractiva.
 */
export default function Features() {
  return (
    <section id="features" className="feature-section py-5">
      <div className="container">
        <div className="row mb-5 text-center">
          <div className="col">
            <h2 className="mb-3">¿Por qué elegir Renacer?</h2>
            <p className="lead">
              Integramos un enfoque holístico, experiencia profesional y
              flexibilidad para acompañarte en tu proceso de cambio.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {/* Tarjeta 1: Enfoque holístico */}
          <div className="col-md-4">
            <div className="feature-card h-100">
              <img
                src="/images/card1.png"
                alt="Meditación en armonía"
                className="img-fluid"
              />
              <h3>Enfoque holístico</h3>
              <p>
                Integramos cuerpo, mente y emociones en cada sesión para
                lograr un bienestar profundo y sostenido.
              </p>
            </div>
          </div>
          {/* Tarjeta 2: Profesional certificado */}
          <div className="col-md-4">
            <div className="feature-card h-100">
              <img
                src="/images/card2.png"
                alt="Apoyo profesional"
                className="img-fluid"
              />
              <h3>Profesional certificado</h3>
              <p>
                Formada en Coaching Sistémico y posgrado en Bioneuroemoción,
                te acompaño con experiencia y calidez humana.
              </p>
            </div>
          </div>
          {/* Tarjeta 3: Flexibilidad en sesiones */}
          <div className="col-md-4">
            <div className="feature-card h-100">
              <img
                src="/images/card3.png"
                alt="Sesiones flexibles"
                className="img-fluid"
              />
              <h3>Flexibilidad en sesiones</h3>
              <p>
                Ofrecemos sesiones presenciales u online, adaptadas a tu
                disponibilidad y necesidades personales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}