/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NEXT_OUTPUT_MODE || undefined,
  images: {
    domains: ["a.storyblok.com"],
  },
};

module.exports = nextConfig;
