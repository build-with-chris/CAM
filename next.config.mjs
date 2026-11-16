/** @type {import('next').NextConfig} */
const nextConfig = {
  // Die sechs alten Adressen sind geloescht. Wer sie noch als Lesezeichen
  // oder aus einer Suchmaschine aufruft, landet auf der passenden Live-Seite.
  async redirects() {
    return [
      { source: '/aktuelles', destination: '/', permanent: true },
      { source: '/angebote', destination: '/', permanent: true },
      { source: '/ort', destination: '/ueber-uns', permanent: true },
      { source: '/zweck', destination: '/ueber-uns', permanent: true },
      { source: '/mitmachen', destination: '/unterstuetzen', permanent: true },
      { source: '/unterstuetzen/spenden', destination: '/unterstuetzen', permanent: true },
    ];
  },
};

export default nextConfig;
