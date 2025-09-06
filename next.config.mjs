/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Activamos react strict mode para ayudar a detectar problemas
  reactStrictMode: true,
  // Desactivamos la optimización de imágenes para poder servir nuestros
  // recursos locales sin pasar por el servidor de imágenes de Next.js.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;