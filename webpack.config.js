/** @jsx React.DOM */

var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')


module.exports = {
  context: __dirname,
  entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './cv/static/js/index'
  ],

  output: {
      path: path.resolve('./cv/static/bundles/'),
      filename: 'bundle.js',
      publicPath: 'http://localhost:3000/static/bundles/', // Tell django to use this URL to load packages and not use STATIC_URL + bundle_name
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(), // don't reload if there is an error
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  module: {
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
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx','.css']
  }
}

