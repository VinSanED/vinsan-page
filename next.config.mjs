import {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} from "next/constants.js";

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack(config){
    config.module.rules.push({
      test:/\.svg$/i,
      use:[
        {
          loader: "@svgr/webpack",
          options: {
            svgo: true
          }
        }
      ]
    });
    return config
  }
}
const nextConfigFunction = async (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    const withPWA = (await import("next-pwa")).default({
      dest: "public",
      register: true,
      sw: "service-worker.js"
    });
    return withPWA(nextConfig);
  }
  return nextConfig;
};

export default nextConfigFunction;
