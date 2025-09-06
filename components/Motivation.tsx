/**
 * Sección adicional que recoge la motivación personal de Soledad Pinto.
 * Resume su formación, su experiencia y su propósito, tal y como
 * describió en su carta. Este bloque ayuda a conectar con los
 * visitantes a un nivel más profundo y humano.
 */
export default function Motivation() {
  return (
    <section id="motivacion" className="py-5">
      <div className="container">
        <h2 className="mb-4 text-center">Mi motivación</h2>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <p>
              Formada en <strong>Coaching Sistémico</strong> y posgrado en
              <strong> Bioneuroemoción</strong>, enfoco mi labor en el apoyo
              holístico a personas en procesos de cambio. Aporto una visión
              integradora que combina mente, emociones y cuerpo.
            </p>
            <p>
              El trabajo con personas de distintas culturas me enseñó cómo
              las emociones influyen en nuestras creencias, valores y
              experiencias. Este viaje interior me ayudó a desprenderme de
              viejos hábitos y a reinterpretar mi historia con una nueva
              perspectiva.
            </p>
            <p>
              Mi propósito es acompañarte con atención plena y empatía,
              inspirándote a descubrir tu poder interior y a renacer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}