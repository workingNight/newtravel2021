const path = require('path')
// import { config, Configuration } from 'webpack'

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'output')
    }

}

module.exports = config



// /**
//  * @type {Configuration}
//  */
// const config = {

// }

// module.exports = config