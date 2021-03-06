/**
 * Created by delwar on 10/25/16.
 */
module.exports = {
  entry: ["./global.js", "./app.js"],
  output: {
    filename: 'bundle.js'
  },
  module: {
    //preLoaders:[
    //  {
    //    test: /\.js$/,
    //    exclude: /node_modules/,
    //    loader: 'jshint-loader'
    //  }
    //],
    loaders: [
      {
        test: [/\.js$/,/\.es6$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  }
}
