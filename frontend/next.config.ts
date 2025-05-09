// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Add this:
    allowedDevOrigins: ["http://192.168.100.26:3000"], // Replace with your actual LAN IP
  },
};

module.exports = nextConfig;


