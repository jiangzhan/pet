var path = require('path');

module.exports = {
    entry : './src/index.js',
    externals: {
      "jquery": "jQuery",
      "filters": "filters",
      "basepath": "basepath"
    },
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'bundle.js'
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']}
        ]
    },
    mode:'development',

}
