/**
 * Sección informativa que explica qué es la Bioneuroemoción® y resume la
 * experiencia profesional de Soledad. Está compuesta por dos columnas: una
 * imagen ilustrativa y un bloque de texto.
 */
export default function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="/images/aboutMe.jpg"
              alt="Silencio interior y conexión con la naturaleza"
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-md-6">
          
            <h3 className="mt-4 mb-3">Sobre Soledad Pinto</h3>
            <p>
              Soy <strong>Soledad Pinto</strong>, y quiero acompañarte en un viaje hacia tu interior, para lograr equilibrio y paz interior.
            </p>
             <h3 className="mt-4 mb-3">Mi metodología</h3>
            <p>
              Hoy acompaño a muchas personas que atraviesan situaciones emocionales difíciles, guiándolas a descubrir sus propios recursos internos.
              Mi metodología, nacida desde lo más profundo de mi ser, ayuda a recobrar la coherencia vital y llevar una vida más plena y en paz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}