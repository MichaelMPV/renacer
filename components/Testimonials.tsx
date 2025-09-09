import React from "react";
import styles from "./Testimonials.module.css";

type T = { author: string; text: string; role?: string };
const testimonials: T[] = [
  {
    author: "Ricardo (Chile)",
    text:
      "¡Hola a todos y a todas! Mi nombre es Ricardo y soy de Chile… Quisiera demostrar mi alegría por la apertura de esta página, ya que sé que esto será una puerta para que muchas personas logren conocer lo lindo y sanador que es esto. (...) Les dejo este comentario con todo el amor del mundo y recomendándoles con toda el alma tratarse las emociones, ya que esto además de sanar nos permite evolucionar como personas!",
  },
  {
    author: "Testimonio anónimo",
    text:
      "Soledad, me siento agradecida con Dios y la terapia que he realizado contigo. He podido detectar, analizar mis miedos y convertirlos en aprendizajes de vida; además, he podido integrar nuevamente mi relación con mi núcleo familiar. ¡Muchas gracias y bendiciones 🙏!",
  },
  {
    author: "Nelly Villamizar",
    text:
      "Querida Soledad Pinto, quiero agradecerle de todo corazón por lo que hizo por mí en nuestras terapias. Desde ese momento siento que he podido soltar mucho de lo que me dolía y me pesaba. Ahora me siento diferente, más ligera y en paz. Usted me ayudó a entender mis emociones, a darles un lugar y a no cargar con culpas. Gracias a su apoyo, respiro distinto y miro la vida con esperanza.",
  },
];

export default function Testimonials() {
  return (
    <section className={`${styles.wrap} py-5`} id="testimonials">
      <div className="container">
        <div className="text-center mb-4">
          <span className={`${styles.badge} badge rounded-pill`}>Lo que dicen</span>
          <h2 className="mt-3 mb-2">Testimonios</h2>
          <p className="text-muted mb-0">Historias reales de cambio y bienestar.</p>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {testimonials.map((t, i) => (
            <div className="col" key={i}>
              <article className={`${styles.card} h-100 position-relative`}>
                <span className={styles.quote} aria-hidden>“</span>
                <blockquote className="mb-4">{t.text}</blockquote>

                <footer className="d-flex align-items-center mt-auto pt-3 border-0">
                  <div className={`${styles.avatar} me-3`}>{t.author.charAt(0)}</div>
                  <div>
                    <div className="fw-semibold">{t.author}</div>
                    {t.role && <div className="text-muted small">{t.role}</div>}
                  </div>
                </footer>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
