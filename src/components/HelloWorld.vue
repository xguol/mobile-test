<!--
 * @Author: your name
 * @Date: 2021-06-30 09:54:26
 * @LastEditTime: 2021-06-30 20:10:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mobile-vue\src\components\HelloWorld.vue
-->
<template>
  <div class="hello">
    <div>
      <p>ssss</p>
    </div>
  </div>
</template>

<script>
import { getStoragePathApi } from 'http/test/test.js'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted () {
    let param = {
      a: 123,
      b: 234
    }
    getStoragePathApi(param).then(res => {
      console.log(res);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
div{
  width: 100px;
  height: 100px;
  background: @text-color-default;
  p{
    color: @dd;
    background: @aa;
  }
}
</style>
