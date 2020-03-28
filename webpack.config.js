const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: [{
                    loader: 'awesome-typescript-loader'
                }]
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'source-map-loader',
                    options: {
                        enforce: 'pre',
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve('./src'),
        ],
        extensions: ['.tsx', '.js', '.ts', 'json']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: "source-map",
    devServer: {
        contentBase: './dist',
        historyApiFallback: true
    }
};