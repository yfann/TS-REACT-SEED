var webpack = require('webpack');
var config=require('./gulpfile.config')();

module.exports = {
    devtool: 'source-map',
    debug: true,
    entry: {
        index:'./src/app/index.tsx',
    },
	output: {
        filename: '[name].bundle.js',
        path: __dirname + "/dist/scripts",
	},
    module: {
        loaders: [
            { test: /\.tsx$/, loader: 'ts-loader'},
            { test: /\.ts$/, loader: 'ts-loader'},
        ],
        preLoaders:[
            {test:/\.js$/,loader:"source-map-loader"}
        ]
    },
    resolve: {
        extensions: ['', '.jsx', '.js', '.tsx', '.ts']
    },
    externals:config.externals
};