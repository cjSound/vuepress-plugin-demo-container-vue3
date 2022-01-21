<!--
 * @Author: 曹捷
 * @Date: 2022-01-20 21:11:19
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-01-21 10:14:10
 * @Description: Antd 组件 Button
-->
<template>
  <a-button type="primary">Primary Button</a-button>
  <a-button>Default Button</a-button>
  <a-button type="dashed">Dashed Button</a-button>
  <a-button type="text">Text Button</a-button>
  <a-button type="link">Link Button</a-button>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  setup (props, context) {
    let _data = reactive({
    })
    return {
      ...toRefs(_data)
    }
  }
}
</script>