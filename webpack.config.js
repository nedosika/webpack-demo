const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const {DefinePlugin} = require("webpack");

module.exports = {
    mode: 'development',
    resolve: {
        alias: {
            Components: path.resolve(__dirname, 'src/components/'),
            Pages: path.resolve(__dirname, 'src/pages/'),
        },
    },
    entry: {
        index: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './build',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    // can be use in .babelrc.js
                    // options: {
                    //     presets: ['@babel/preset-react', '@babel/preset-env'],
                    //     plugins: ['@babel/plugin-transform-runtime'],
                    // },
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[local]_[md5:contenthash:base64:5]',
                            },
                            sourceMap: true,
                        }
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "[name]-[fullhash].css",
        }),
        new DefinePlugin({
            VERSION: JSON.stringify('5fa3b9'),
        })
    ],
    output: {
        filename: '[name]-[hash].bundle.js',
        path: path.resolve(__dirname, 'build'),
        assetModuleFilename: 'assets/images/[name]-[hash][ext]',
        clean: true,
    },
    optimization: {
        minimizer: [
            `...`, //syntax to extend existing minimizers (i.e. `terser-webpack-plugin`) webpack 5
            new CssMinimizerPlugin({
                minify: CssMinimizerPlugin.cssnanoMinify,
                minimizerOptions: {
                    preset: [
                        "default",
                        {
                            discardComments: {removeAll: true},
                        },
                    ],
                },
            }),
            new HtmlMinimizerPlugin(),
        ],
        minimize: true
    },
};