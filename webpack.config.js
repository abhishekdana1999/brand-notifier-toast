const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        main: ['./snackbar/snackbar.js','./script.js'],
        // Add more entries as needed
    },
    output: {
        filename: 'bundle.js'
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    }
};
