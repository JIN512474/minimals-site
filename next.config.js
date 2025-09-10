/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // 외부 이미지도 쓸 수 있게(필요시)
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};
module.exports = nextConfig;
