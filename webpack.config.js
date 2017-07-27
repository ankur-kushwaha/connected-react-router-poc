const path = require("path")
const webpack = require("webpack")

module.exports = {
  devtool: "cheap-module-source-map",
  entry: [
    "babel-polyfill",
    "react-hot-loader/patch",
    "webpack-hot-middleware/client",
    path.resolve("src/index.js")
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /.*node_modules((?!@birdeye).)*$/,
        // Don't use .babelrc in `yarn link`-ed dependency's directory and use in current direction instead
        loader:
        "babel-loader?babelrc=false&extends=" +
        path.resolve(__dirname, ".babelrc")
      }, {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"],
        include: path.resolve(__dirname, "../")
      },
      {
        test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
            name: "fonts/[name].[ext]?[hash]"
          }
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "images/[name].[ext]?[hash]"
            }
          }
        ]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolveLoader: {
    modules: ["node_modules"]
  }
}
