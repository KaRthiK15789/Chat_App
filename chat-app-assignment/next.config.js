// next.config.js

const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net;
              style-src-elem 'self' https://fonts.googleapis.com https://cdn.jsdelivr.net;
              font-src 'self' https://fonts.gstatic.com;
              img-src 'self' data: https:;
              connect-src *;
              object-src 'none';
              frame-src 'none';
            `.replace(/\s{2,}/g, " ").trim(),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
