var path = require('path');

var autoprefixer = require('autoprefixer-core');
var doiuse = require('doiuse');
var colors = require('colors');
var wordwrap = require('wordwrap')
var csswring = require('csswring');
var nested = require('postcss-nested');

module.exports = {
     devServer: {
        historyApiFallback: true,
        host: "0.0.0.0",
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
    },
    entry: {
        js: './src/js/app.js',
        html: './index.html'
    },

    output: {
        path: './build',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            },
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    postcss: [
        nested,
        doiuse({
            onFeatureUsage: function(info) {
                var source = info.usage.source;
                // file is whole require path, joined with !'s.. we want the last part
                var sourceFile = path.relative('.', source.input.file.split('!').pop())
                var sourceLine = sourceFile + ':' + source.start.line;
                // take out location info in message itself
                var message = info.message.split(': ').slice(1).join(': ')
                console.log('[doiuse]'.red + ' ' + sourceLine + ': ' + info.featureData.title + '\n');
                console.log(wordwrap(4, process.stdout.columns - 1)(message) + '\n');
            }
        }),
        autoprefixer,
        csswring
    ],
    plugins: []
};
