const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');
const { FilerWebpackPlugin } = require('filer/webpack');


module.exports = {
  entry: {
    main: './src/IndexScript.js',
    airport: './src/DigitalAirport.js',
    diagram: './src/DiagramsScript.js',
  },
  resolve: {
    extensions: ['.js']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Cleans the output directory before emit
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/template.html',
      // chunks: ['main'], // Include only the main chunk for this template
    }),
    new HtmlWebpackPlugin({
      filename: 'server_page.html',
      template: './src/server_page.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'digital_airport.html',
      template: './src/digital_airport.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new FilerWebpackPlugin({
      // Keeping this empty until I need to use it
    }),
    // nodeResolve({
    //   // Indicate that we target a browser environment.
    //   browser: true,
    //   // Exclude any dependencies except for puppeteer-core.
    //   // `npm install puppeteer-core` # To install puppeteer-core if needed.
    //   resolveOnly: ['puppeteer-core'],
    // }),
  ],
  // node: {
  //   __dirname: false,
  //   __filename: false,
  // },
  target: 'module', // Ensure Webpack understands it's bundling for Node.js
};
