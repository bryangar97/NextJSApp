const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'braygarcianext.s3.amazonaws.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};
module.exports = nextConfig;