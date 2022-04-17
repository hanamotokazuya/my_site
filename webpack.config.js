const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  devtool: "source-map",
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: `${__dirname}/dist`,
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: "file-loader",
        options: {},
      },
      {
        test: /\.json$/,
        loader: "json-loader",
        type: "javascript/auto",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  target: ["web", "es5"],
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
    }),
    new FaviconsWebpackPlugin(`${__dirname}/src/imgs/my-logo.png`),
  ],
  devServer: {
    static: "dist",
    open: true,
  },
};
