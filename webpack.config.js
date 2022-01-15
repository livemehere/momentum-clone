module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: __dirname,
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
