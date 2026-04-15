import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "carebridgehealth.co",
          },
        ],
        destination: "https://www.carebridgehealth.co/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;