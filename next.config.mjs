/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Prak5",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
