const merge = require('webpack-merge');
const path = require('path');

var baseConfig = require(path.resolve(__dirname, 'node_modules/patternslib/webpack/base.config.js'));


module.exports = merge(baseConfig, {
    entry: {
        "bundle": path.resolve(__dirname, "bundle-config.js")
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, '.')
    },
    resolve: {
        // This line is important to supply the patternslib source files
        modules: [
                  path.resolve(__dirname, 'node_modules/patternslib/src'),
                  path.resolve(__dirname, 'src'),
                  'node_modules'
        ],
        alias: {
            // put any additional patterns here
            "pat-display-time": "pat-display-time.js",
            "moment-de": "moment/locale/de.js",
            "moment-nl": "moment/locale/nl.js",
            "moment-fr": "moment/locale/fr.js",
            "moment-it": "moment/locale/it.js",
            "moment-pl": "moment/locale/pl.js",
            "moment-es": "moment/locale/es.js",
            "moment-pt-br": "moment/locale/pt-br.js"
        }
    },
    plugins: [
    ],
});


