/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-b7c7de69b6d641409d911c7e3fe4734f.r2.dev",
        port: "",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "pub-bee551b1560648b0a179631450d9adaa.r2.dev",
        port: "",
        pathname: "/ficus/ficus-og.png",
      },
    ],
  },
}

module.exports = nextConfig
