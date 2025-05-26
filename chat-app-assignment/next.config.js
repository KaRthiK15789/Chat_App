/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; " +
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.jsdelivr.net; " +
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net; " +
              "style-src-elem 'self' https://fonts.googleapis.com https://cdn.jsdelivr.net; " +
              "font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net; " +
              "img-src 'self' data: https:; " +
              "connect-src *; " +
              "frame-src 'none';",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
