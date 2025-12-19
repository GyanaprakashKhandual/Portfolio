/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: false,
    turbopack: {},
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;