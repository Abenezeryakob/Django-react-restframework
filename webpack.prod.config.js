var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
    module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        },
      },
      {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },
    ]
  },
  output: {
    path: path.join(__dirname, './cv/static/js'),
    filename: 'react-app.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: [
    'babel-polyfill',
    './cv/static/js/index' // Your appʼs entry point
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
}
