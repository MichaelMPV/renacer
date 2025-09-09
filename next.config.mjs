/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Activamos react strict mode para ayudar a detectar problemas
  reactStrictMode: true,
  // Desactivamos la optimización de imágenes para poder servir nuestros
  // Muy importante: genera HTML estático listo para CDN (export)
  output: 'export',
  // recursos locales sin pasar por el servidor de imágenes de Next.js.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;