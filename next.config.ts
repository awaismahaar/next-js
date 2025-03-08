import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // images: {
  //   domains: ["lh3.googleusercontent.com" , "lh3.googleusercontent.com"],
  // },
  images : {
    remotePatterns : [
      {
        hostname : "lh3.googleusercontent.com",
        protocol : "https",
        port : ""
      }
    ]
  }
};

export default nextConfig;
