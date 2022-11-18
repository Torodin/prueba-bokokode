/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "technical-frontend-api.bokokode.com",
                port: "",
                pathname: "/img/**",
            },
        ],
    },
};

module.exports = nextConfig;
