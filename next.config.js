const withSvgr = require("next-svgr");

const nextConfig = withSvgr(
  /**
   * @type {import('next').NextConfig}
   */
  {
    async rewrites() {
      return [
        {
          source: "/",
          destination: "/home",
        }
      ]
    }
  }
);

module.exports = nextConfig;
