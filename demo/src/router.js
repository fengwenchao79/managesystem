import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
  //  登录
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login/Login.vue')
    },
    //后台首页(容器组件)
    {
      path: '/index',
      // name: 'index',
      component: () => import('./views/Index/Index.vue'),
      children:[
        //默认的是系统信息
        {
          path: '',
          name: '',
          component: () => import('./views/Systeminfo/Systeminfo.vue'),
        },
        //账号部分
        {
          path: 'accountadd',
          name: 'accountadd',
          component: () => import('./views/Accountadd/Accountadd.vue'),
        },
        {
          path: 'accountmanage',
          name: 'accountmanage',
          component: () => import('./views/Accountmanage/Accountmanage.vue'),
        },
        {
          path: 'passwordmodify',
          name: 'passwordmodify',
          component: () => import('./views/Passwordmodify/Passwordmodify.vue'),
        },
        //商品部分
          {
            path: 'goodsadd',
            name: 'goodsadd',
            component: () => import('./views/Goodsadd/Goodsadd.vue'),
          },
          
        {
          path: 'goodsmanage',
          name: 'goodsmanage',
          component: () => import('./views/Goodsmanage/Goodsmanage.vue'),
        },
        //统计管理部分
        {
          path: 'salesstatistics',
          name: 'salesstatistics',
          component: () => import('./views/Salesstatistics/Salesstatistics.vue'),
        },
        {
          path: 'stockstatistics',
          name: 'stockstatistics',
          component: () => import('./views/Stockstatistics/Stockstatistics.vue'),
        }
      ]
    }
  ]
})
