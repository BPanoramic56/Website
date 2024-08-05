var merge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");

module.exports = merge.merge(common, {
    mode: "development",

    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
});