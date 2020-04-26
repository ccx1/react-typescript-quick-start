var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HappyPack = require('happypack');
const path = require('path');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length});
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CSSSplitWebpackPlugin = require('css-split-webpack-plugin').default;

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    context: __dirname,
    output: {
        publicPath: '/',
        filename: 'assets/js/[name].js',
        chunkFilename: 'assets/js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.ts[x]?$/,
                exclude: /node_modules/,
                loader: 'happypack/loader?id=unHappy'
            }, {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?cacheDirectory',
            }, {
                test: /\.(css|less)$/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: path.resolve(__dirname)
                            }
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ],
                exclude: [/\.useable\.less$/, /node_modules\/?!(antd)/]
            },
            {
                test: /\.useable\.less$/,
                use: [{
                    loader: 'style-loader'
                },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: path.resolve(__dirname)
                            }
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                ],
                exclude: path.resolve(__dirname, 'node_modules')
            }
        ],
    },
    resolve: {
        extensions: ['tsx', 'ts', '.js', '.jsx'],
        modules: [path.resolve(__dirname, 'node_modules')],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    // devtool: 'eval-source-map',
    devServer: {
        contentBase: './dist',
        port: 8080,
        hot: true,
        historyApiFallback: true,
        host: '0.0.0.0',
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
        new CleanWebpackPlugin({
            verbose: true,
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].css',
            chunkFilename: 'assets/css/[id].css'
        }),
        new CSSSplitWebpackPlugin({
            size: 4000,
            filename: 'assets/css/[name]-[part].[ext]'
        }),
        new webpack.DefinePlugin({}),
        new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 4000 // Minimum number of characters
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HappyPack({
            id: 'unHappy',
            loaders: [{
                loader: 'babel-loader?cacheDirectory=true'
            }],
            threadPool: happyThreadPool,
            verbose: true
        })
    ]
};
