/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/next-blog-app",
  assetPrefix: "/next-blog-app/",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "w1980.blob.core.windows.net",
      },
      { protocol: "https", hostname: "placehold.jp" },
      { protocol: "https", hostname: "images.microcms-assets.io" },
    ],
  },
};

module.exports = nextConfig;
