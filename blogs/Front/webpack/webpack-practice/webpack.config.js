const path = require('path');

module.exports = {
  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    // 出口文件目录
    path: path.resolve(__dirname, 'dist'),
    // 出口文件文件名
    filename: 'bundle.js'
  },
  // loader 注释了，在练习 loader 的时候，请把下面的注释放出来，已经 index.js import 的注释也放出来
  // 然后需要运行 ``` npm install --save-dev css-loader ``` 安装 css-loader
  // 
  // module: {
  //   rules: [
  //     { 
  //       test: /\.css$/, 
  //       use: ['style-loader', 'css-loader']
  //     }
  //   ]
  // }
};
