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
    ],
  },
}

module.exports = nextConfig
