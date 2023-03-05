/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    API_HOST: process.env.API_HOST,
  }
}

module.exports = nextConfig
