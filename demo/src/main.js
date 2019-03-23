import Vue from 'vue'
// 引入element-ui.js文件
import ElementUI from 'element-ui';
// 引入element-ui.css样式
import 'element-ui/lib/theme-chalk/index.css';

//引入base.less
import "./assets/styles/css/base.less"

//引入icontfont.css
import "./assets/styles/css/iconfont.css"

import App from './App.vue'
import router from './router'
// 使用elementui
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
