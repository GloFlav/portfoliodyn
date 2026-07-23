/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // GitHub Pages : export statique HTML/CSS/JS + basePath = nom du repo.
  // En dev on garde output undefined (routing normal) et basePath vide.
  output: "export",
  basePath: isProd ? "/portfoliodyn" : "",
  assetPrefix: isProd ? "/portfoliodyn/" : "",
  trailingSlash: true,
  images: {
    // next/image loader désactivé : GH Pages n'a pas de serveur pour l'optimiseur.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/GloFlav/**",
      },
    ],
  },
};

export default nextConfig;
