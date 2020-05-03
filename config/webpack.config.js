const {resolve}=require('path')
const CopyWebpackPlugin=require('copy-webpack-plugin')
//将一些文件夹复制到另一个文件夹中
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
//在每次生成新的dist目录时都会删除之前生成的dist目录
module.exports={
    context:resolve('./src'),
    //基础目录，绝对路径，用于从配置中解析入口起点(entry point)和 loader
    entry:{
        'app':'./app.js',
        'pages/index/index':'./pages/index/index.ts',
        'pages/logs/logs':'./pages/logs/logs.ts'
    },
    //多入口
    output:{
        path:resolve('dist'),
        filename:'[name].js'
    },
    //多出口
    plugins:[
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets:false,
        }),
        new CopyWebpackPlugin([
            {
                from:resolve('./src'),
                to:resolve('./dist'),
                ignore:['*.js','*.ts','*.scss']
            },
        ]),
    ],
    module:{
        rules:[
            {
                test:/\.ts?$/,
                use:'ts-loader',
                exclude:/node_module/
            },
            {
                test:/\.js$/,
                use:'babel-loader',
            }
        ]
    },
    node:{
        fs:'empty'
    },
    performance:{
        hints:false
    },
    mode:'production'
}