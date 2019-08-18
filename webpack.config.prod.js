const Webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: ["./src/index.jsx"],
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  },
  output: {
    path: path.join(__dirname, "/build"),
    publicPath: "/loan-site-react/",
    filename: "bundle_[hash:5].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/react"]
            }
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
              localIdentName: "[name]_[local]__[hash:base64:5]"
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
              name: "./images/[name]_[hash:5].[ext]"
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
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  plugins: [
    new Webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new HtmlWebpackPlugin({
      favicon: "src/assets/favicon.ico",
      template: "src/assets/index.html",
      env: process.env
    }),
    new Webpack.optimize.OccurrenceOrderPlugin(),
    new UglifyJsPlugin({
      sourceMap: true,
      uglifyOptions: {
        inline: false
      }
    }),
    new MiniCssExtractPlugin({ filename: "main_[hash:5].css" })
  ]
};
