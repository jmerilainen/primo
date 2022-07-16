const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ],
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        compress: true,
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
        }),
        new CompressionPlugin(),
        new MiniCssExtractPlugin(),
    ],
    performance: {
        assetFilter: function (file) {
            return file.endsWith('.gz');
        },
    },
};
