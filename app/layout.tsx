import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from 'next';

// Metadatos para la página. Se pueden extender según sea necesario.
export const metadata: Metadata = {
  title: 'RENACER | Bioneuroemoción',
  description: 'Sesiones de Bioneuroemoción con Soledad Pinto',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}