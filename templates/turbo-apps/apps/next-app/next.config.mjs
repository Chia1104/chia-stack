// @ts-check
import withBundleAnalyzerImport from "@next/bundle-analyzer";

const withBundleAnalyzer = withBundleAnalyzerImport({
  enabled: process.env.ANALYZE === "true",
});

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * this should be uncommented if you want to use the modularizeImports feature and build your app(@acme/ui) as a library
   */
  // modularizeImports: {
  //   "@acme/ui": {
  //     transform: "@acme/ui/{{ kebabCase member }}",
  //   },
  // },
  /**
   * default transpilePackages by next.js
   */
  transpilePackages: ["@acme/ui", "@acme/ui-utils", "@acme/utils"],
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

const plugins = [withBundleAnalyzer];

const nextComposePlugins = plugins.reduce(
  (acc, plugin) => plugin(acc),
  nextConfig
);

export default nextComposePlugins;
