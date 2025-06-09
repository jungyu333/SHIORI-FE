const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig = {
  experimental: {
    turbo: false,
  },
  /* config options here */
};

module.exports = withPWA(nextConfig);
