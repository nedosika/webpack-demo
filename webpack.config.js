const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
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
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build'),
        assetModuleFilename: 'assets/images/[name]-[hash][ext]',
        clean: true,
    }
};