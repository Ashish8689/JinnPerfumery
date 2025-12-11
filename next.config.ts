import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    reactCompiler: true,
    env: {
        GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    },
    images: {
        domains: ['avatars.githubusercontent.com'],
    },
    turbopack: {
        rules: {
            '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.js',
            },
        },
    },
}

export default nextConfig;
