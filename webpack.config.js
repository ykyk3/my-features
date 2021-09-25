const commonConfig = require('./webpack.config.common');
const { merge } = require('webpack-merge');

module.exports = (env, args) => {
    switch (args.mode) {
        case 'development':
            const developmentConfig = require('./webpack.config.dev');
            return merge(commonConfig, developmentConfig);
        case 'production':
            const productionConfig = require('./webpack.config.production');
            return merge(commonConfig, productionConfig);
        default:
            throw new Error('No matching configuration was found!');
    }
};