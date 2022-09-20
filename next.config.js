/** @type {import('next').NextConfig} */

module.exports = withPlugins([
  {
    reactStrictMode: true,
    swcMinify: true,
  },
  [
    withPWA,
    {
      pwa: {
        disable: process.env.NODE_ENV !== "production",
        register: true,
        scope: "/",
        dest: "public",
        sw: "/service-worker.js",
      },
    },
  ],
]);
