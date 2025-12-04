import type { NextConfig } from "next";
import { join } from "path"; // Impor join dari modul path

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    outputFileTracingRoot: join(__dirname, '../../'), // Menentukan path yang benar
    ppr: "incremental"
  },
};

export default nextConfig;
