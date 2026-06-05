/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // ✅ remove swcMinify (deprecated in Next.js 16)
  // ✅ add allowedDevOrigins if you want to open via your network IP
  allowedDevOrigins: ['10.5.0.2'],
};

module.exports = nextConfig;
