/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/services/translation-for-market-research",
        destination: "/services/translation",
        permanent: true,
      },
      {
        source: "/services/market-research-translation",
        destination: "/services/translation",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
