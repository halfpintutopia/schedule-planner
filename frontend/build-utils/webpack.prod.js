const commonPaths = require("./common-paths");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const config = {
    mode: "production",
    entry: {
        app: [`${commonPaths.appEntry}/index.js`]
    },
    output: {
        filename: "static/[name].[hash].js"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            camelCase: true,
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                use: [
                    {
                        loader: "url-loader?limit=100000"
                    },
                    {
                        loader: "img-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "styles/styles.[hash].css",
            allChunks: true
        })
    ]
};
module.exports = config;
