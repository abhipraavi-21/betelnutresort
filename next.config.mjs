/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com'
      },
      {
        protocol: 'https',
        hostname: 'www.betelnutresort.com'
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/explore-surroundings',
        destination: '/explore-diveagar',
        permanent: true
      },
      {
        source: '/privacypolicy',
        destination: '/privacy-policy',
        permanent: true
      },
      {
        source: '/book-now',
        destination: 'https://letsbook.me/booking/betelnutresort',
        permanent: false
      }
    ];
  }
};

export default nextConfig;
