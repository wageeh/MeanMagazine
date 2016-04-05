var webpack = require('webpack');
var helpers = require('./helpers');

var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

const METADATA = {
    baseUrl: '/',
    title: 'MEAN Magazine'
};

module.exports = {

    metadata: METADATA,

    // cache: false,

    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'main': './src/main.browser.ts'
    },
    resolve: {
        extensions: ['', '.ts', '.js'],
        root: helpers.root('src'),
        modulesDirectories: ['node_modules']
    },
    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                loader: 'tslint-loader',
                exclude: [
                    helpers.root('node_modules')
                ]
            },
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: [
                    // these packages have problems with their sourcemaps
                    helpers.root('node_modules/rxjs'),
                    helpers.root('node_modules/@angular2-material')
                ]
            }

        ],
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loader: 'raw-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: [helpers.root('src/index.html')]
            },

        ]

    },

    plugins: [
        new ForkCheckerPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.CommonsChunkPlugin({
            name: helpers.reverse(['polyfills', 'vendor', 'main']),
            minChunks: Infinity
        }),
        new CopyWebpackPlugin([{
            from: 'src/assets',
            to: 'assets'
        }]),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: helpers.packageSort(['polyfills', 'vendor', 'main'])
        })
    ],
    node: {
        global: 'window',
        crypto: 'empty',
        module: false,
        clearImmediate: false,
        setImmediate: false
    },
};