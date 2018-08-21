const path = require('path');

module.exports = {
  entry: './client/lib/components/index.js',
  output: {
    path: path.resolve(__dirname, 'server', 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }]
  }
};