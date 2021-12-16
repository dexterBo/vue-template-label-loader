# 记录vue文件模板中标签的loader

记录vue文件中`template`中所有的html标签, 无论是原生的标签还是组件标签， 都会被记录。

## 使用

### 在webpack配置中配置该loader:
```
const { clear } = require(vue-tags-loader/lib/store');

// 在每次构建时， 都清空上一次存储信息。
clear();
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [{
            loader: 'vue-tags-loader'
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
const { clear } = require(vue-tags-loader/lib/store');

// 在每次构建时， 都清空上一次存储信息。
clear();

module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .set('exclude', [/node_modules/])
      .use('vue-tags-loader')
      .loader('vue-tags-loader')
      .end()
  },
};

```