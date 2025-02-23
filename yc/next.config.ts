import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  images : {
    dangerouslyAllowSVG:true,
    remotePatterns :[
      {
        protocol:"https",
        hostname:"*" // * here meas allowing images from all sources
      }
    ]

  }
};

export default nextConfig;
