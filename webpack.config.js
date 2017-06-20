'use strict';

const path = require('path');

module.exports = {
    devtool: 'cheap-source-map',
    entry: path.resolve('src/index.ts'),
    output: {
        filename: 'core.umd.js',
        path: path.resolve('build/dist'),
        library: '@ngx-platform/core',
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
                    silent: true
                }
            }
        ]
    }
};
