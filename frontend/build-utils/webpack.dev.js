const commonPaths = require("./common-paths");
const webpack = require("webpack");
const port = process.env.PORT || 3000;
const config = {
  mode: "development",
  entry: {
    app: `${commonPaths.appEntry}/index.js`
  },
  output: {
    filename: "[name].[hash].js"
  },
  devtool: "inline-source-map",
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
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    hot: true,
    open: true
  }
};
module.exports = config;
