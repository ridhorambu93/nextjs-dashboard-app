import type { NextConfig } from "next"
import { join } from "path" // Impor join dari modul path

const nextConfig: NextConfig = {
  outputFileTracingRoot: join(__dirname, "../../"), // Menentukan path yang benar
}

export default nextConfig
