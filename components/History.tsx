export default function History() {
  return (
    <section id="history" className="py-5">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          {/* Texto (primero en móvil) */}
          <div className="col-md-6 order-1 order-md-2">
            <h3 className="mb-3">De la enfermedad al renacer</h3>
            <p className="mb-0">
              Después de haber sido diagnosticada con una enfermedad incurable, viví el miedo, la soledad y el dolor. Me dijeron que podía perder la voz o dejar de oír tras una operación. Fue entonces cuando comencé a trabajar con mis emociones, liberando viejos resentimientos que desconocía tener.
              Dos meses más tarde, me dijeron que había tenido una remisión espontánea. Comprendí que el perdón es profundamente sanador: me perdoné, me comprendí y trascendí. Así nació  <strong>RENACER</strong>.
            </p>
          </div>

          {/* Imagen (segundo en móvil, primero en desktop) */}
          <div className="col-md-6 order-2 order-md-1">
            {/* Ajusta el ratio a 4x3 o 1x1 según tu estética */}
            <div className="ratio ratio-4x3 overflow-hidden rounded shadow-sm">
              <img
                src="/images/gallery2.png"
                alt="Ilustración de manos sosteniendo un brote, símbolo de renacer"
                className="w-100 h-100 object-fit-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}