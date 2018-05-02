import Vue from 'vue'
import content from './content.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app', // 这里参考content.html和content.vue的根节点id，保持三者一致
  render: h => h(content)
})
