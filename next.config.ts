import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.carebridgehealth.co",
          },
        ],
        destination: "https://carebridgehealth.co/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;