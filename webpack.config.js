const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const IS_DEV = process.env.NODE_ENV === 'development'

const config = {
  entry: './src/app.jsx',
  context: __dirname,
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: ['chrome 59'],
                    node: '8.2.1',
                  },
                },
              ],
            ],
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(svg|png|woff2|ttf|eot|woff)$/,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.css', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/template.html',
    }),
    new CleanWebpackPlugin('app'),
  ],
}

if (IS_DEV) {
  config.module.rules.push({
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  })
  config.target = 'web'
} else {
  // Production specific rules
  config.target = 'electron-main'
  config.module.rules.push({
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: {
        loader: 'css-loader',
        options: {
          minimize: true,
        },
      },
    }),
  })
  config.plugins.push(
    new ExtractTextPlugin('styles.css'),
    new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
  )
  config.output.filename = '[name].[hash].js'
}

module.exports = config
