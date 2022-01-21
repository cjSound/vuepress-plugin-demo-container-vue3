/*
 * @Author: 曹捷
 * @Date: 2020-03-05 20:27:42
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-01-21 10:17:32
 * @Description: file content
 */
import Antd from 'ant-design-vue'
import './styles/index.less'
// import componets from '../../components/index'
import { defineClientAppEnhance } from '@vuepress/client'
import 'ant-design-vue/dist/antd.css'

export default defineClientAppEnhance(({ app, router, siteData }) => {
    app.use(Antd)

})