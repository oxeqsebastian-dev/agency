// next.config.js
const createNextJsObfuscator = require('nextjs-obfuscator');

/** @type {import('next').NextConfig} */
const withNextJsObfuscator = createNextJsObfuscator(
    {
        rotateStringArray: true,
        disableConsoleOutput: false,
    },
    {
        // production-only: 'detect' ok but explicit check an option
        enabled: process.env.NODE_ENV === 'production' ? true : 'detect',
        // tránh obfuscate thư viện/next output
        patterns: ['./app/**/*.(js|jsx|ts|tsx)', './components/**/*.(js|jsx|ts|tsx)'],
        log: false,
    }
);

/** @type {import('next').NextConfig} */
const nextConfig = {
    // tắt tạo source maps cho browser
    productionBrowserSourceMaps: false,

    // headers: thêm X-Robots-Tag và CSP cho static/js và api
    async headers() {
        return [
            {
                source: '/_next/static/:path*',
                headers: [
                    { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
                ],
            },
            {
                source: '/api/:path*',
                headers: [
                    { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
                ],
            },
            {
                source: '/',
                headers: [
                    { 
                        key: 'Content-Security-Policy', 
                        value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:;" 
                    },
                ],
            },
        ];
    },

    webpack: (config, { dev, isServer }) => {
        // disable devtool cho production client bundle
        if (!dev && !isServer) {
            config.devtool = false;
        }

        // preserve your external
        config.externals = config.externals || [];
        config.externals.push({
            'node:crypto': 'commonjs crypto',
        });

        return config;
    },
};

module.exports = withNextJsObfuscator(nextConfig);
