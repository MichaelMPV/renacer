/**
 * Muestra un sencillo apartado de contacto con una invitación a escribir
 * directamente a través de un enlace mailto. La estructura se mantiene
 * deliberadamente simple al no contar con backend para gestionar
 * formularios.
 */
export default function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container text-center">
        <h2 className="mb-4">Contacto</h2>
        <p className="mb-4">
          ¿Deseas reservar una sesión o tienes alguna pregunta? No dudes en
          escribirme.
        </p>
        <a
          href="mailto:soledadpinto@hotmail.de"
          className="btn btn-brand btn-lg"
        >
          Escríbeme
        </a>
      </div>
    </section>
  );
}