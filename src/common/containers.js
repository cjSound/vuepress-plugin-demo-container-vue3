/*
 * @Author: 曹捷
 * @Date: 2021-11-11 17:29:49
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-01-20 21:20:39
 * @Description: fileContent
 */
let mdContainer = require('markdown-it-container')
const MarkdownIt = require('markdown-it')
const localMd = MarkdownIt()
const fs = require('fs')
const path = require('path')
const highlight = require('./highlight')

module.exports = options => {
  const { component = 'demo-block', componentsDir, getComponentName } = options;
  const componentName = component
    .replace(/^\S/, s => s.toLowerCase())
    .replace(/([A-Z])/g, "-$1").toLowerCase();
  return md => {
    md.use(mdContainer, 'demo', {
      validate (params) {
        return params.trim().match(/^demo\s*(.*)$/);
      },
      render (tokens, idx) {
        const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
        if (tokens[idx].nesting === 1) {
          const description = m && m.length > 1 ? m[1] : '';
          const sourceFileToken = tokens[idx + 2]
          const sourceFile = sourceFileToken.children?.[0].content ?? ''
          let source = ''
          if (sourceFileToken.type === 'inline') {
            source = fs.readFileSync(
              path.resolve(`${componentsDir}/${sourceFile}.vue`),
              'utf-8'
            )
          }
          // let content = `<template><pre><code class="html">${md.utils.escapeHtml(codeArr.join(' '))}</code></pre></template>`
          // console.log('8888888888888~~~~~~~~~~~~~~~~~~~~~~~88888888888888', `${componentsDir}/${sourceFile}.vue`)
          const cptName = getComponentName(sourceFile)

          const encodeOptionsStr = encodeURI(JSON.stringify(options));
          let result = `<${componentName} componentName="${cptName}" :options="JSON.parse(decodeURI('${encodeOptionsStr}'))"
          description="${encodeURIComponent(localMd.render(description))}"
          source="${encodeURIComponent(highlight(source, 'vue'))}"
          >
        `
          return result;
        }
        return `</${componentName}>`;
      }
    });
  };
}