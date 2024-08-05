var merge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");

module.exports = merge.merge(common, {
    mode: "production",

    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
});