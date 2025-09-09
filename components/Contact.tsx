export default function Contacto() {
  return (
    <section className="py-5 bg-light text-center" id="contacto">
      <div className="container">
        <h2 className="mb-4 display-5">Contacto</h2>
        <p className="lead mb-4 fs-4 fw-bold">
          ¿Deseas reservar una sesión o tienes alguna pregunta? <br />
          No dudes en escribirme.
        </p>
        <a
          href="mailto:soledadpinto@hotmail.de"
          className="btn-contacto btn-lg"
        >
          ✉️ Escríbeme
        </a>
      </div>
    </section>
  );
}
