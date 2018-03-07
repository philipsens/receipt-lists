const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
            presets: ['@babel/preset-react', '@babel/preset-env'],
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
} else {
  config.module.rules.push({
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader',
    }),
  })
  config.plugins.push(new ExtractTextPlugin('styles.css'))
}

module.exports = config
