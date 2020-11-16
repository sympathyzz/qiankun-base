import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { registerMicroApps,  start } from 'qiankun';

Vue.use(ElementUI)

const apps=[
  {
    name: 'vueApp',
    entry: '//localhost:10000',
    container: '#vue',
    activeRule: '/vue',
  },
];

registerMicroApps(apps);

start();

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

