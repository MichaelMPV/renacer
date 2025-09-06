/**
 * Sección de portada que presenta el lema principal y una breve invitación
 * a conocer el servicio. Utiliza la imagen de fondo y las variables de
 * color definidas en globals.css.
 */
export default function Hero() {
  return (
    <section className="hero d-flex align-items-center justify-content-center" id="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="display-4 fw-bold mb-3">Renacer</h1>
        {/* Inspirado en salutissimo: subtítulo motivador y botón informativo. */}
        <p className="mb-4">Un viaje hacia la sanación interior y la paz emocional</p>
        <a href="#about" className="btn btn-brand btn-lg">
          Descubre más
        </a>
      </div>
    </section>
  );
}