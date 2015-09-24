module.exports = {
    entry: './app/scripts/main.djs',
    output: {
        filename: 'bundle.js',
        path: 'app/dist'
    },
    module: {
        loaders: [
            {
                test: /\.djs/,
                exclude: /node_modules/,
                loader: 'dogescript'
            }
        ]

    }
};
