export const metadata = {
  title: "Política de cookies | RENACER",
  description: "Información sobre el uso de cookies en RENACER",
};

export default function PoliticaCookiesPage() {
  return (
    <main className="container py-5">
      <h1 className="mb-4">Política de cookies</h1>
      <p>
        En <strong>RENACER</strong> usamos cookies esenciales para que el sitio
        funcione correctamente. Solo activamos cookies de análisis si aceptas
        todas en el banner.
      </p>

      <h2 className="mt-4">Tipos de cookies</h2>
      <ul>
        <li>
          <strong>Esenciales:</strong> necesarias para seguridad, sesión y
          preferencias. No requieren consentimiento.
        </li>
        <li>
          <strong>Analíticas:</strong> nos ayudan a entender cómo se usa el
          sitio. Solo se cargan si aceptas todas las cookies.
        </li>
      </ul>

      <h2 className="mt-4">Gestionar tu consentimiento</h2>
      <p>
        Puedes cambiar tu elección en cualquier momento desde{" "}
        <a href="#" className="text-decoration-underline">
          Gestionar cookies
        </a>
        .
      </p>

      <h2 className="mt-4">Contacto</h2>
      <p>
        Si tienes dudas, escríbenos a{" "}
        <a href="mailto:soledadpinto@hotmail.de">
          soledadpinto@hotmail.de
        </a>
        .
      </p>
    </main>
  );
}
