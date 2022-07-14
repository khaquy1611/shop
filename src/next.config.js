const nextTranslate = require('next-translate');

module.exports = nextTranslate({
  lessLoaderOptions: {},
  images: {
    domains: ['aetacdn.nyc3.digitaloceanspaces.com']
  },
  i18n: {
    localeDetection: false
  },
  poweredByHeader: false,
  swcMinify: true,
  experimental: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: [
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'none'"
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  }
});
