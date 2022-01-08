module.exports = async ({config, mode}) => {
    config.target = "node";
    config.performance.maxEntrypointSize = 3000000;
    config.performance.maxAssetSize = 3000000;

    // config.module.rules.push({
    //     test: /\.njk$/,
    //     use: [
    //         {
    //             loader: 'simple-nunjucks-loader',
    //             options: {}
    //         }
    //     ]
    // });
    return config;
};