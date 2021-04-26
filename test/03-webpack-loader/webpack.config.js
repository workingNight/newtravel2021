module.exports =  {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.md$/,
                use: './markdown-loader'
            }
        ]
    }
    
}