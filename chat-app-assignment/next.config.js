/** @type {import('next').NextConfig} */
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
              script-src 'self' 'unsafe-inline' 'unsafe-eval' cdn.jsdelivr.net;
              style-src 'self' 'unsafe-inline' fonts.googleapis.com cdn.jsdelivr.net;
              style-src-elem 'self' fonts.googleapis.com cdn.jsdelivr.net;
              font-src 'self' fonts.gstatic.com cdn.jsdelivr.net;
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
