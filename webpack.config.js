const webpack = require('webpack');
const path = require('path');


module.exports = {

  entry: [
      'webpack-hot-middleware/client',
      './src/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/build/'
  },
  devtool: '#source-map',
  resolve: { extensions: [ '', '.js' ] },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['stage-2', 'es2015', 'react']
        }
      },
      { test: /\.css$/, loaders: [ 'style', 'css' ] },
      { test: /\.json$/, loaders: ['json',]}

    ],
  }

};
