import React from "react";

const testimonials = [
  {
    author: "Ricardo (Chile)",
    text: `¡Hola a todos y a todas! Mi nombre es Ricardo y soy de Chile… 
    Quisiera demostrar mi alegría por la apertura de esta página, ya que sé que 
    esto será una puerta para que muchas personas logren conocer lo lindo y 
    sanador que es esto. (...) 
    Les dejo este comentario con todo el amor del mundo y recomendándoles con toda el alma 
    tratarse las emociones, ya que esto además de sanar nos permite evolucionar como personas!`,
  },
  {
    author: "Testimonio anónimo",
    text: `Soledad, me siento agradecida con Dios y la terapia que he realizado contigo. 
    He podido detectar, analizar mis miedos y convertirlos en aprendizajes de vida, además, 
    he podido integrar nuevamente mi relación con mi núcleo familiar. 
    ¡Muchas gracias y bendiciones 🙏!`,
  },
  {
    author: "Nelly Villamizar",
    text: `Querida Soledad Pinto,
    Quiero agradecerle de todo corazón por lo que hizo por mí en nuestras terapias. 
    Desde ese momento siento que he podido soltar mucho de lo que me dolía y me pesaba. 
    Ahora me siento diferente, más ligera y en paz. 
    Usted me ayudó a entender mis emociones, a darles un lugar y a no cargar con culpas. 
    Gracias a su apoyo, respiro distinto y miro la vida con esperanza.`,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-light py-5" id="testimonials">
      <div className="container">
        <h2 className="text-center mb-4">Testimonios</h2>
        <div className="row">
          {testimonials.map((t, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <p className="card-text">"{t.text}"</p>
                </div>
                <div className="card-footer text-muted">
                  — {t.author}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
