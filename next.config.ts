import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // allow images served from Google user content and HubSpot hubfs paths
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/aida-public/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/photo-**',
      },
      {
        protocol: 'https',
        hostname: 'hs.hackthebox.com',
        pathname: '/hubfs/**',
      },
    ],
  },
};

export default nextConfig;
