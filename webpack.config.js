const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
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
