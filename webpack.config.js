const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: ['./snackbar/snackbar.js', './dist/script.js'],
        // Add more entries as needed
    },
    output: {
        filename: 'bundle.js',
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'snackbar/snackbar.css', to: './snackbar.css' } // Copy snackbar.css to dist folder
            ],
        }),
    ],
};
