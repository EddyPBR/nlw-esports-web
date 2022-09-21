/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV !== "production",
  register: true,
  scope: "/",
  dest: "public",
  sw: "/service-worker.js",
});

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
});
