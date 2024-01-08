/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
