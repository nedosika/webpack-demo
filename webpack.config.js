const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

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
                //use: ['style-loader', 'css-loader'],
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "[name]-[contenthash].css",
            chunkFilename: "[id].css",
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build'),
        assetModuleFilename: 'assets/images/[name]-[hash][ext]',
        clean: true,
    },
    optimization: {
        minimizer: [
            `...`, //syntax to extend existing minimizers (i.e. `terser-webpack-plugin`) webpack 5
            new CssMinimizerPlugin(),
            new HtmlMinimizerPlugin(),
        ],
        minimize: true
    },
};