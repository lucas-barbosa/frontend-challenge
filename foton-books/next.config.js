// eslint-disable-next-line @typescript-eslint/no-var-requires
const transpiler = require('next-transpile-modules');
const withTM = transpiler(['next-usequerystate']);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};

module.exports = withTM(nextConfig);
