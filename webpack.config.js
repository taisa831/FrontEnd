module.exports = {
    context: __dirname,
    entry: {
        application: __dirname + '/_es6',
        filename: __dirname + '/[name].es6'
    },
    output: {
        path: __dirname + './js',
        filename: __dirname + '/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                query:{
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};