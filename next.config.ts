import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
      outputFileTracingRoot: join(__dirname, '../../'),
   },
/* old code  
experimental: {
    ppr: "incremental",
  },
  */
}

export default nextConfig
