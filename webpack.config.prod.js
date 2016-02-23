const webpack = require('webpack');
const path = require('path');


module.exports = {

  entry: [
      './src/index'
  ],
  output: {
    path: path.join(__dirname, 'gh-pages/build/'),
    filename: 'index.js',
    publicPath: './build/'
  },
  resolve: { extensions: [ '', '.js' ] },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
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
