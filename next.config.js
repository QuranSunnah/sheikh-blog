/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_AMARPET_REMOTE_PATTERN,
      },

      {
        protocol: "https",
        hostname:
          process.env.NEXT_PUBLIC_AMARPET_DIGITALOCEAN_SPACE_REMOTE_PATTERN,
      },
    ],
  },
  eslint: {
    dirs: [
      "components",
      "hooks",
      "lib",
      "model",
      "pages",
      "repo",
      "services",
      "store",
    ], //or ['pages', 'hooks']
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
