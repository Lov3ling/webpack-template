var webpack=require('webpack')
const path=require('path')

module.exports={
    entry:path.resolve(__dirname,'./main.js'),
    output:{
        path:path.resolve(__dirname,'./dist/'),
		publicPath: '/dist/',
        filename:"app.js",
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
                exclude:/node_modules/
            },
            {
                test: /\.css$/,
                loader:'style-loader!css-loader'
            },

            {
                test:/\.(png|jpg|gif|jpeg)$/,
                loader: 'url-loader?limit=8192&name=./dist/images/[hash:8].[name].[ext]'
            },

            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },

            { test: /\.(woff|woff2)$/, loader:"url-loader?prefix=font/&limit=5000" },

            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },

            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" }

        ]
    },
    resolve: { alias: { 'vue': 'vue/dist/vue.js' } },
    plugins: [
         new webpack.HotModuleReplacementPlugin()
    ]

}