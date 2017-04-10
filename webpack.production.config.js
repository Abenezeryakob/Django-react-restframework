var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  module: {
    loaders: [{
        test: /\.jsx?$/,
        loaders: [
      // we pass the output from babel loader to react-hot loader
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query:
            {
                presets:['es2015', 'react']
            },

      },
      { test: /\.scss/, exclude: /node_modules/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap&includePaths[]=node_modules/compass-mixins/lib'},
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ],
        include: path.join(__dirname, './cv/static/js/react-app')
      },
    ],
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
