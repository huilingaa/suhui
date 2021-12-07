import Vue from 'vue'
import App from './App'
import * as filters from './filters'
import locals from './locals/index.js'
import VueI18n from 'vue-i18n'
import store from './store'
import handleRequest from './utils/request.js'
import BigNumber from 'bignumber.js'
import debounce from './directive/index.js'




// 注册全局组件
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
import myheader from '@/components/my-header/my-header.vue'

// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;

Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)
Vue.component('my-header', myheader)

Vue.use(VueI18n)

const i18n = new VueI18n(locals)

// 注册过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// Vue.config.productionTip = false
// Vue.prototype.$bigNumber = BigNumber
// // Vue.prototype.$clipboard = clipboard
// Vue.prototype._i18n = i18n
// Vue.prototype.$bus = new Vue();
// Vue.prototype.$api = handleRequest
// 之后 - Vue 3



store.dispatch('setLangData');
App.mpType = 'app'





const app = new Vue({
  store,
  ...App
})
app.$mount()


// // 之前 - Vue 2
// import Vue from 'vue'
// import App from './App'
// Vue.config.productionTip = false    // vue3 不再需要
// App.mpType = 'app'    // vue3 不再需要
// const app = new Vue({
// ...App
// })
// app.$mount()


// import App from './App'
// import { createSSRApp } from 'vue'
// export function createApp() {
//    const app = createSSRApp(App)
//    return {
//       app
//    }
// }








export default app
