/**
 * Sección de llamada a la acción que invita a los visitantes a comenzar
 * su proceso de transformación. Presenta una imagen ilustrativa a la
 * izquierda y un mensaje motivador a la derecha, culminando en un
 * botón para reservar una sesión.
 */
export default function CallToAction() {
  return (
    <section id="cta" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <img
              src="/images/cta.png"
              alt="Meditación en grupo"
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-md-6">
            <h2 className="mb-3">¿Buscas sanar y crecer?</h2>
            <p className="mb-4">
              Si deseas iniciar un camino de autoconocimiento y
              transformación interior, te acompañamos con empatía y
              profesionalidad.
            </p>
            <a href="#contact" className="btn btn-brand btn-lg">
              Reserva tu sesión
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}