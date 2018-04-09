/**
 * Created by PC on 2017/6/30.
 */
module.exports={
    devtool:'eval-source-map',
    entry:__dirname+'/app/main.js',//这个就是你的程序对的入口地址了额
    output:{
        path:__dirname+'/public',    //这个是你的打包文件存储的地址
        filename:'bundle.js',       //这个用来存放打包之后的javascript模块代码
    },

    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader?modules'
            }
        ]
    },
    plugins: [
        // new webpack.BannerPlugin("Copyright Flying Unicorns inc.")//在这个数组中new一个就可以了
    ],

    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
}