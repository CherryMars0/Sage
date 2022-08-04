const path = require('path');
const webpack = require('webpack');
const htmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['./src/main.js'], //入口文件

    mode: 'development',     //开发模式

    output: {
        path: path.join(__dirname, 'dist'),    //输出文件的路径
        filename: './[name].[hash].js',                 //指定输出的文件名
        clean: true,    //自动清空上次打包文件
    },

    devServer: { //开发服务器配置
        host: "localhost",
        port: "3000",
        hot: true, //是否热更新
        open: true, //是否自动打开浏览器
        compress: true, //是否开启gzip压缩
        static: {
            directory: path.join(__dirname, 'dist/index.html'),  //主网页入口
        }
    },

    plugins: [ //插件配置
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebPackPlugin({ //HTML文件打包
            favicon: './public/favicon.ico',
            inject: true,
            filename: './index.html',
            template: path.join(__dirname, './public/index.html'),
            minify: {
                removeRedundantAttributes: true, // 删除多余的属性
                collapseWhitespace: true, // 折叠空白区域
                removeAttributeQuotes: true, // 移除属性的引号
                removeComments: true, // 移除注释
                collapseBooleanAttributes: true // 省略只有 boolean 值的属性值 例如：readonly checked
            },
        }),
    ],

    module: {   // 用于配置所有第三方模块加载器
        rules: [ // 匹配规则
            {
                test: /\.css$/i,     // 匹配以.css文件结尾的文件
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './dist',
                        },
                    },
                    'css-loader',
                ]
            },
            {
                test: /\.(htm|html|mar|md)$/,
                use: [
                    'raw-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: 'file-loader'
            }
        ]
    },
}