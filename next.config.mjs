/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {
    images: {
        domains: ["cdn.sanity.io"],
    },
    staticPageGenerationTimeout: 1000,
};

export default withPlaiceholder(nextConfig);
