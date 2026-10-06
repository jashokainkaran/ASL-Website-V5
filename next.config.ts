import type { NextConfig } from 'next';
const config: NextConfig = { reactStrictMode: true, agentRules: false,
  // Optional build-only limit for memory-constrained local hosts.
  ...(process.env.ASL_BUILD_CPUS === '1' ? {experimental: {cpus: 1}} : {}),
};
export default config;
