import Vue from 'vue'
import info from './info.vue'

Vue.config.productionTip = false

new Vue({
  el: '#info', // 这里参考info.html和info.vue的根节点id，保持三者一致
  render: h => h(info)
})
