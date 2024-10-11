/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@acme/ui', 'lodash-es'],
  images: {
    domains: ["www.notion.so", "prod-files-secure.s3.us-west-2.amazonaws.com"], // Add notion.so as an allowed domain
  },
};

export default nextConfig;
