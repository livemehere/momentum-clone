module.exports = {
  mode: "production",
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
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
