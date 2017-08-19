const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  entry: {
    vendor: ['fluent', 'choo'],
    app: ['./app/index.js']
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'app'),
          path.dirname(require.resolve('fluent'))
        ],
        options: {
          babelrc: false,
          presets: [['es2015', { modules: false }]],
          plugins: ['yo-yoify']
        }
      },
      {
        test: /\.(svg|png|jpg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]'
            }
          },
          'extract-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              interpolate: 'require',
              minimize: false
            }
          }
        ]
      },
      {
        test: /\.ftl$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].js'
            }
          },
          'extract-loader',
          './build/fluent_loader'
        ]
      },
      {
        test: require.resolve('./build/generate_asset_map.js'),
        use: ['babel-loader','val-loader']
      },
      {
        test: require.resolve('./build/generate_l10n_map.js'),
        use: ['babel-loader','val-loader']
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/dist/),
    new webpack.IgnorePlugin(/require-from-string/),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'runtime'
    // }),
    new ManifestPlugin()
  ],
  devServer: {
    compress: true,
    setup: require('./server/dev')
  }
};
