/**
 * Describe cómo pueden ayudarte las sesiones de Bioneuroemoción. Se presentan
 * varias acciones clave como detectar, explorar y reprogramar, junto con
 * detalles logísticos sobre la duración y modalidad de las sesiones.
 */
export default function Service() {
  return (
    <section id="service" className="py-5">
      <div className="container">
        <h2 className="mb-4 text-center">
          ¿Cómo te puede ayudar una sesión de Bioneuroemoción?
        </h2>
        <p className="lead text-center mb-5">
          Cada persona tiene en su interior los recursos para renacer. En
          nuestras sesiones te acompaño a descubrirlos y a ponerlos en
          práctica.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <ul className="list-unstyled fs-5">
              <li className="mb-3">
                <strong>Detectar:</strong> identificar emociones y creencias
                limitantes que te impiden vivir con plenitud y disfrutar de
                la salud y la vida que mereces.
              </li>
              <li className="mb-3">
                <strong>Explorar:</strong> revisar tu historia familiar,
                infancia y experiencias significativas para comprender el
                origen de tus patrones emocionales.
              </li>
              <li className="mb-3">
                <strong>Reprogramar:</strong> resignificar tus percepciones y
                liberar emociones atrapadas, permitiéndote priorizarte y
                cuidarte.
              </li>
            </ul>
            <p className="mt-4">
              Las sesiones tienen una duración aproximada de
              <strong> 60 minutos</strong> y pueden ser
              <strong> presenciales</strong> en consulta o
              <strong> online</strong>. Tú eliges la modalidad que mejor se
              adapte a tus necesidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}