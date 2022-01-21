/*
 * @Author: 曹捷
 * @Date: 2020-02-26 11:45:28
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-01-21 11:03:35
 * @Description: file content
 */
const { path } = require('@vuepress/utils')

function resolve (dir) {
  return path.join(__dirname, '../../' + dir)
}

{/* <font> element has been deprecated, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font. 
It would not be recognized as a native HTML tag correctly by vue. */}

module.exports = {
  // bundler: '@vuepress/webpack',
  base: '/vuepress2-plugin/',
  host: '0.0.0.0',
  title: 'vuepress2 container',
  description: '编写文档的增加 Vue 展示和代码示例',
  port: 6001,
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
    },
  },
  // clientAppSetupFiles: path.resolve(__dirname, './clientAppEnhance.js'),

  themeConfig: {
    navbar: [{
      text: '首页',
      link: '/'
    }, {
      text: '操作指南',
      children: [
        '/guide/get-started.md',
        '/guide/install.md',
        '/guide/demo.md',
      ]
    },
    {
      text: 'GitHub',
      link: 'https://github.com/cjSound/vuepress-plugin-demo-container-vue3'
    },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          isGroup: true,
          children: [
            {
              text: '介绍',
              children: [
                '/guide/get-started.md',
                '/guide/install.md',
                '/guide/demo.md',
              ]
            },
          ]
        }],
    }
  },
  plugins: [[
    require('./../../src'),
    {
      componentsDir: path.resolve(__dirname, './../examples')
    }
  ]],
  markdown: {
    lineNumbers: true
  },
  less: { //配置 scss 根目录
    includePaths: [path.join(__dirname, '../../style')]
  }
}