/**
 * Muestra una pequeña galería de imágenes ilustrativas que evocan la
 * conexión entre mente, cuerpo y naturaleza. Utiliza la clase bg-light
 * de Bootstrap para separar visualmente la sección del resto de la página.
 */
export default function Gallery() {
  return (
    <section id="gallery" className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-4 text-center">Galería</h2>
        <div className="row">
          {/* Primera fila de imágenes */}
          <div className="col-md-4 mb-4">
            <div className="gallery-item">
              <img
                src="/images/gallery1.png"
                alt="Árbol con corazón y raíces"
              />
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="gallery-item">
              <img
                src="/images/sesion2.jpg"
                alt="Manos sosteniendo un brote"
              />
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="gallery-item">
              <img
                src="/images/gallery3.png"
                alt="Cerebro entrelazado con naturaleza"
              />
            </div>
          </div>
          {/* Segunda fila de imágenes con referencias del cliente */}
          <div className="col-md-4 mb-4">
            <div className="gallery-item">
              <img
                src="/images/ref1.png"
                alt="Bosque bañado en luz natural"
              />
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="gallery-item">
              <img
                src="/images/galleryMe.jpg"
                alt="Ilustración de manos nutriendo una planta"
              />
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="gallery-item">
              <img
                src="/images/trail.png"
                alt="Sendero boscoso bañado en luz natural"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}