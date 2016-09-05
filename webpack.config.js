
const {resolve} = require('path');

module.exports = env => {
  return {
    entry: {
      app: './js/main.js',
    },
    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, 'dist'),
      pathinfo: !env.prod,
    },
    context: resolve(__dirname, 'src'),
    module: {
      loaders: [
        { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/},
        {
          test: /\.jsx?$/, loader: 'babel',
          exclude: /(node_modules|bower_components)/
        },
        { test: /\.css$/, loader: "style!css" },
        { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      ]
    }
  }
}
