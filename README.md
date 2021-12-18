# 记录vue文件模板中标签的loader

记录vue文件中`template`中所有的html标签。

## 使用

### 在webpack配置中配置该loader:
```
const { clear } = require(vue-template-label-loader/lib/store');

// 在每次构建时， 都清空上一次存储信息。
clear();
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [{
            loader: 'vue-template-label-loader'
          }, {
            loader: 'vue-loader',
            options: {
              //...
            },
          }]
      },
    ]
  }
};
```

### 在vue.config.js中

```
const { clear } = require(vue-template-label-loader/lib/store');

// 在每次构建时， 都清空上一次存储信息。
clear();

module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .set('exclude', [/node_modules/])
      .use('vue-template-label-loader')
      .loader('vue-template-label-loader')
      .end()
  },
};

```
