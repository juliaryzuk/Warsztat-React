//Konfiguracja Webpack
const path = require("path");
module.exports = {
  entry: "./js/app.jsx", // skad bierze plik wejsciowy sciezka !!! wazne
  output: {
    path: path.resolve("js"), // i gdzie wyrzuca outa !!! wazne
    filename: "out.js"
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.jsx$/, exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ['es2015', 'stage-2', 'react'] }

      },
      {
          test: /\.scss$$/,
          exclude: /node_modules/,
          loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}
