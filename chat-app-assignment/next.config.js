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
              script-src 'self' https://cdn.jsdelivr.net;
              style-src 'self' https://fonts.googleapis.com https://cdn.jsdelivr.net;
              font-src 'self' https://fonts.gstatic.com;
              img-src 'self' data: https:;
              connect-src 'self' https://your-api-domain.com; 
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
