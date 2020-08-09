import Vue from 'vue'
import App from './App'
import uniPopup from '@/components/uni-popup/uni-popup.vue'
Vue.component('uni-popup', uniPopup) 

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
