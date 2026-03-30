/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/CAM_satzung.pdf",
        destination:
          "https://www.xn--circusakademiemnchen-3ec.de/CAM_satzung.pdf",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
    unoptimized: false,
  },
};

export default nextConfig;
