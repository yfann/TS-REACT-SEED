var webpack = require('webpack');


module.exports = {
    devtool: 'sourcemap',
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
        ]
    },
    resolve: {
        extensions: ['', '.jsx', '.js', '.tsx', '.ts']
    }
};