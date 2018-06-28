const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = [{
    output: {
        filename: 'app.js',
        path: __dirname + '/public/built'
    },
    entry: './public/index.js',
    mode: process.env.NODE_ENV,
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    beautify: false,
                    compress: false,
                    comments: false,
                    mangle: false
                }
            })
        ]
    }
}]