const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './client/index.js'
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: [ /node_modules/ ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader' ],
        exclude: [ /node_modules/ ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: [ '.js', '.jsx' ]
  }
};
