const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = [
  
  {
     stats: {
    errorDetails: true, // 👈 Add this line
  },
    mode: "development",
    name: "client",
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "public"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
  },
  {
    mode: "development",
    name: "server",
    entry: "./server/server.js",
    target: "node",
    externals: [nodeExternals()],
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "server.js",
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: "null-loader",
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
  },
];