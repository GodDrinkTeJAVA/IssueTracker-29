const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	// entry: 웹팩에게 어플리케이션이 어디서 시작하고 어디서부터 파일들을 묶을건지 시작점을 정해준다. 
  entry: ['@babel/polyfill', "./src/index.js"],	// 현재 개발 모드에서 작업 중임을 알려줌. 
  mode: "development",// export한 JS 모듈이 어떻게 변환되는지 정의한다. 방법은 rules에 정의한 대로 이루어진다. 
  module: {
    rules: [
	// 첫번째 룰: ES6, JSX 구문 변환에 대한 것.
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      }
    ]
  },// resolve: 웹팩이 해석할 확장자를 지정. 
  resolve: { extensions: ["*", ".js", ".jsx"], fallback: { "path": require.resolve("path-browserify") } },// output: 번들링 된 결과물을 어디다 둘 것인지에 대한 설정이 가능.
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, "dist/"),
    filename: "bundle.js"
  },// webpack-dev-server의 옵션을 설정
  devServer: {
	// 정적 파일 경로 설정
    contentBase: path.join(__dirname, "./dist"),
    port: 8080,
    hotOnly: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
	    // 번들링된 JS를 주입하고 결과물을 옮길 대상이 되는 파일을 지정
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ]
};