const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WebpackExtensionManifestPlugin = require('webpack-extension-manifest-plugin');
const baseManifest = require('./chrome/manifest.json');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',

  entry: {
    app: path.join(__dirname, './frontend/index.jsx'),
  },

  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.jsx', '.js'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      manifest: 'manifest.json',
      filename: 'index.html',
      template: './frontend/index.html',
      hash: true,
    }),

    new CopyPlugin([
      {
        from: path.join(__dirname, './chrome/icons'),
        to: path.resolve(__dirname, './build'),
      },
    ]),

    new WebpackExtensionManifestPlugin({
      config: {
        base: baseManifest,
      },
    }),
  ],
};
