const path = require('path');

module.exports = async ({config, mode}) => {
    config.target = "node";
    // config.node = {fs: 'empty'};
    config.resolve.fallback["perf_hooks"] = false;
    // config.resolve.fallback["fs"] = require.resolve('fs');
    // config.browser = {fs: require.resolve('fs')}
    config.performance.maxEntrypointSize = 3000000;
    config.performance.maxAssetSize = 3000000;
    // config.browser = { "fs": false, "path": false, "os": false, "net": false, "tls": false };

    config.module.rules.push({
        test: /\.njk$/,
        use: [
            {
                loader: 'simple-nunjucks-loader',
                options: {}
            }
        ]
    });
    return config;
};