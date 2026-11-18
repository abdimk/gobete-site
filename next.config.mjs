/** @type {import('next').NextConfig} */
const nextConfig = {
  // `npm run build` writes a plain static site to ./out, ready for any host.
  output: "export",
  images: { unoptimized: true },
  // Keeps the bundler inside this folder, even when a parent directory has its own lockfile.
  turbopack: { root: process.cwd() },
};

export default nextConfig;
