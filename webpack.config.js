'use strict';

const path = require('path');

module.exports = {
  devtool: 'cheap-source-map',
  entry: path.resolve('src/index.ts'),
  output: {
    filename: 'dist/ngx-platform.umd.js',
    path: path.resolve(__dirname),
    library: '@ngx-gems/ngx-platform',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  externals: [/^@angular\//, /^rxjs\//],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          silent: true,
          compilerOptions: {
            "module": "es2015"
          }
        }
      }
    ]
  }
};
