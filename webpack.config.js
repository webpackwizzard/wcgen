module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: [
            "babel-loader",
            "jshint-loader"
          ],
          options: {
            presets: [
              "env"
            ]
          }
        }
      }
    ]
  }
}