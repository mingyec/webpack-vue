const path = require('path');

module.exports = {
    entry: {
        index: path.resolve(__dirname, '../src/index.js'),
        another: path.resolve(__dirname, '../src/another-module.js'),
        /* index: {
            import: path.resolve(__dirname, '../src/index.js'),
            dependOn: ['vue']
        },
        another: {
            import: path.resolve(__dirname, '../src/another-module.js'),
            dependOn: ['vue']
        },
        vue: 'vue' */
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        assetModuleFilename: 'images/[hash][ext][query]'
    },
}