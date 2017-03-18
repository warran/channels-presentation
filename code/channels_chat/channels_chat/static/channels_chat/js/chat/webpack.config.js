/**
 * Created by rwar on 18.03.17.
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: { path: __dirname + '/../', filename: 'chat.js' },
    module: {
        loaders: [{
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};
