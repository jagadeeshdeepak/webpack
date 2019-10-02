// module.exports = {
//   entry: './src/app.js',
//   output: {
//     // output filename
//     filename: './dist/app.bundle.js'
//   }
// }

var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.join(__dirname, 'dist');
var APP_DIR = path.join(__dirname, 'src');

var config = {
  entry: APP_DIR + '/app.js',
  output: {
    path: BUILD_DIR,
    filename: 'app.bundle.js'
  },
  // loaders are for specifying what we need for our project
  // and what has to be compiled using webpack
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        // include: APP_DIR, // or just say what to exclude
        exclude: /node_modules/, // do not want to compile node_modules folder
        use: 'babel-loader'
      }
    ]
  }
}

module.exports = config;
