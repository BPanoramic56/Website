var merge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");

module.exports = merge.merge(common, {
    mode: "production",

    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    target: 'web', // Ensure Webpack understands it's bundling for Node.js
});

// import puppeteer from 'puppeteer-core/lib/esm/puppeteer/puppeteer-core-browser.js';
