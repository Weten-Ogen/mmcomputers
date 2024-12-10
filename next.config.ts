import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol:"https",
        hostname: "auwsnqvctbi9oc7m.public.blob.vercel-storage.com",
        pathname: "/mmcomputers/**",
        port:""
      }
    ]
  }
};

export default nextConfig;
