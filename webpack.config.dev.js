const Webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: ["./src/index.jsx"],
  resolve: {
    extensions: [".js", ".jsx", ".css"],
    symlinks: true
  },
  output: {
    path: path.join(__dirname, "/build"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    port: 8080,
    contentBase: "./build",
    hot: true,
    inline: true,
    progress: true,
    compress: true,
    overlay: false,
    historyApiFallback: {
      disableDotRule: true
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/react"],
              cacheDirectory: true
            }
          },
          {
            loader: "eslint-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /\.module.(css)$/,
        loader: [MiniCssExtractPlugin.loader, "css-loader", "resolve-url-loader"]
      },
      {
        test: /\.module\.css$/,
        loader: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]_[local]",
              camelCase: true,
              sourceMap: true
            }
          },
          "resolve-url-loader"
        ]
      },
      {
        test: /\.(png|gif|svg|jpe?g)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "./images/[name].[ext]"
            }
          },
          "img-loader"
        ]
      },
      {
        test: /\.(woff|eot|ttf|woff2|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "./fonts/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ErrorOverlayPlugin(),
    new Webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),
    new HtmlWebpackPlugin({
      favicon: "src/assets/favicon.ico",
      template: "src/assets/index.html"
    }),
    new MiniCssExtractPlugin(),
    new Webpack.HotModuleReplacementPlugin()
  ]
};
