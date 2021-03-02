const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    entry: './app.js',//工程资源的入口
    output: {
        path: path.join(__dirname, 'dist'),//绝对路径
        filename: 'bundle.js'
    },
    devServer: {//设置端口
        port: 3000,
        publicPath: '/dist'
    },
    //文件加载器-loader
    module: {//第三方模块
        rules: [//加载规则
            {
                test: /\.css$/,
                use: [//从下往上执行，先执行css-loader 然后执行style-loader
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new UglifyJSPlugin()
    ]
}