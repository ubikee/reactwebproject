const webpack = require('webpack');
const {resolve} = require('path');
module.exports = env => {
  return {
    entry: {
      app: './js/main.js',
      vendor: [ 'react', 'react-dom', 'blueimp-load-image']
    },
    output: {
      filename: 'bundle.[name].js',
      path: resolve(__dirname, 'dist'),
      pathinfo: !env.prod,
    },
    context: resolve(__dirname, 'src'),
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
        { test: /\.jsx?$/, loader: 'babel', exclude: /(node_modules|bower_components)/ },
        { test: /\.css$/, loader: "style!css" },
        { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      ]
    },
    plugins: [
      env.test ? undefined : new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      })
    ].filter(p => !!p)
  }
}
