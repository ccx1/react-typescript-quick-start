var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: [
        'babel-polyfill',
        './src/index'
    ],
    mode: 'development',
    output: {
        publicPath: '/'
    },

    module: {
        rules: [{
            test: /\.js[x]?$/,
            // include: path.resolve(__dirname, 'src'),
            exclude: /node_modules/,
            loader: 'babel-loader?cacheDirectory',
            // query: {
            //     presets: ['env', 'react', "stage-1"]
            // }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [path.resolve(__dirname, 'node_modules')]
    },
    // devtool: 'eval-source-map',
    devServer: {
        contentBase: './dist',
        port: 8080,
        hot: true,
        historyApiFallback: true,
        host: '127.0.0.1',
        // open:true,
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        proxy: {
            '/test/*': {
                target: 'http://127.0.0.1:3001',
                changeOrigin: true,
                secure: false,
                // 替换包含test的接口
                pathRewrite: {
                    '^/test/*': ''
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};