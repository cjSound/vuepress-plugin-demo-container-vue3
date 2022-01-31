# 快速上手

## 安装

### 安装 VuePress

请参考 Vuepress 官方文档，[点此查看](https://vuepress.vuejs.org/zh/guide/)

### 安装插件

使用 `yarn` 安装 `vuepress-plugin-demo-container-vue3` 组件：
```bash
yarn add vuepress-plugin-demo-container-vue3 -D
```
或者使用 `npm` 安装它：
```bash
npm i vuepress-plugin-demo-container-vue3 --save-dev
```
如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。

### 配置插件

打开 .vuepress/config.js 文件，然后在合适的位置引用插件：

- **配置扫描路径** ``componentsDir``

```js
module.exports = {
  ...
  plugins: [[
    require('vuepress-plugin-demo-container-vue3'),
    {
      componentsDir: path.resolve(__dirname, './../examples')
    }
  ]],
  ...
}
```

如果你对 VuePress 插件配置不是很了解，请点这里：[使用插件](https://vuepress.vuejs.org/zh/plugin/using-a-plugin.html)

配置完毕后，cd 到 .vuepress 文件夹同级目录，运行 `vuepress dev .` 即可启动文档服务

## 使用

::: warning 注意
componentsDir 必传，为动态注册组件的基础路径
:::
