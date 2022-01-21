# vuepress-plugin-demo-container-vue3
# 介绍
一个基于 Vuepress2 的插件，它可以帮助你在编写文档的时候增加 Vue 示例，它的诞生初衷是为了降低编写组件文档时增加一些相关示例的难度。

使用 Vuepress 编写组件示例有以下尴尬之处：
1. 组件示例和示例代码本质上一样，却需要写两遍；
2. Vuepress 无法渲染  组件的示例代码；
Demo Container vue3参考了 Element Plus UI 的文档渲染，实现了和它一样的，可在 Markdown 中直接编写示例的语法。
* Element UI **alert**组件的**文档编写示例**，[点此查看](https://github.com/element-plus/element-plus/blob/dev/docs/en-US/component/alert.md)
* Element UI **alert**组件的**文档示例预览**，[点此查看](https://element-plus.gitee.io/zh-CN/component/alert.html)

# 它是如何工作的？
