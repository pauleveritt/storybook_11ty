module.exports = {
    core: {
        builder: 'webpack5',
    },
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials"
    ],
    "framework": "@storybook/html",
    // webpackFinal: async (config, {configType}) => {
    //     // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    //     // You can change the configuration based on that.
    //     // 'PRODUCTION' is used when building the static version of storybook.
    //
    //     // Make whatever fine-grained changes you need
    //     config.target = "node";
    //     config.resolve.fallback["perf_hooks"] = false;
    //     config.resolve.fallback["fs"] = require.resolve('fs');
    //     // config.browser = {fs: require.resolve('fs')}
    //     config.performance.maxEntrypointSize = 2000000;
    //     config.performance.maxAssetSize = 2000000;
    //     // config.browser = { "fs": false, "path": false, "os": false, "net": false, "tls": false };
    //
    //     config.module.rules.push({
    //         test: /\.njk$/,
    //         use: [
    //             {
    //                 loader: 'simple-nunjucks-loader',
    //                 options: {}
    //             }
    //         ]
    //     });
    //
    //     // Return the altered config
    //     return config;
    // }
}