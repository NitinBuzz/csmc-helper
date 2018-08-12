const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react', 'es2015', 'stage-1']
        }
      }
    ],
    rules: [
      {
        use: ['style-loader', 'css-loader', 'sass-loader'],
        test: /\.s?css$/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    proxy: {
      '/api/*': 'http://localhost:5000'
    }
  }
};
