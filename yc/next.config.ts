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

  },
  devIndicators:{
    appIsrStatus:true,
    buildActivity:true,
    buildActivityPosition:'bottom-right'
  }
};

export default nextConfig;
