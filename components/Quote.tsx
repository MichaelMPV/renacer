/**
 * Sección destacada que resalta una cita inspiradora. Utiliza un fondo
 * contrastado con las variables definidas en globals.css.
 */
export default function QuoteSection() {
  return (
    <section className="quote-section py-5">
      <div className="container text-center">
        <blockquote className="fw-semibold mb-2">
          “Hasta que el inconsciente no se haga consciente, el subconsciente
          dirigirá tu vida y tú lo llamarás destino”
        </blockquote>
        <cite className="fst-italic">C. G. Jung</cite>
      </div>
    </section>
  );
}