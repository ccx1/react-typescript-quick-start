const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const path = require('path');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length});

module.exports = {
    entry: './src/index.tsx',
    context: __dirname,
    output: {
        publicPath: '/',
        filename: 'assets/js/[name].[hash:8].js',
        chunkFilename: 'assets/js/[name].[hash:8].js'
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
            },
            {
                test: /\.(jpg|jpeg|bmp|png|webp|gif)$/,
                loader: 'file-loader',
                options: {
                    limit: 8 * 1024,
                    name: 'img/[name].[hash:8].[ext]',
                    // outputPath: config.assetsDirectory,
                    // publicPath: config.assetsRoot
                }
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        modules: [path.resolve(__dirname, 'node_modules')],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new webpack.DefinePlugin({
            CLIENT:"h5"
        }),
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
