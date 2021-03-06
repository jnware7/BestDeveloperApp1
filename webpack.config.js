var path = require('path')
//path comes with node
var HtmlWebpackPlugin = require('html-webpack-plugin');
//creates and html file for you and place it in the dist
module.exports = {
  entry: './app/index.js',
  output:{
    path:path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module:{
    rules:[
      { test:/\.(js)$/, use:'babel-loader'},
      { test:/\.css$/, use:['style-loader','css-loader']}
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'app/index.html'
  })]
}
