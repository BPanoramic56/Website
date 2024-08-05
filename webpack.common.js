const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = {
    entry: {
        main: './src/IndexScript.js',
        airport: './src/DigitalAirport.js',
        diagram: './src/DiagramsScript.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Cleans the output directory before emit
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            // {
            //     test: /\.(svg|png|jpg|gif)$/,
            //     use: {
            //         loader: "file-loader",
            //         options: {
            //             name: "[name].[hash].[ext]",
            //             outputPath: "imgs"
            //         }
            //     }
            // }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            // chunks: ['main'], // Include only the main chunk for this template
        }),
        // new MiniCssExtractPlugin({
        //     filename: './src/styles.css',
        //     chunkFilename: 'styles.css',
        // })
    ],
};