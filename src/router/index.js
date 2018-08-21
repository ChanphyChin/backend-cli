import Vue from 'vue'
import Router from 'vue-router'

//项目入口
const Index = resolve => require(['@/components/common/index'], resolve)
//引入登录页面
const login = resolve => require(['@/components/login'], resolve)
//引入demo页面
const demo = resolve => require(['@/components/demo'], resolve)
//引入demo - test1 
const demoTest1 = resolve => require(['@/components/demo/test1'], resolve)
//引入demo - test2
const demoTest2 = resolve => require(['@/components/demo/test2'], resolve)
//引入demo - test3
const demoTest3 = resolve => require(['@/components/demo/test2/test3'], resolve)
//引入demo2页面
const demo2 = resolve => require(['@/components/demo2'], resolve)
//引入demo - test1 
const demo2Test1 = resolve => require(['@/components/demo2/test1'], resolve)

Vue.use(Router)

const routerMap = [
  {
    path: '/home',
    component: Index,
    redirect: '/demo',
    meta: {
      requireAuth: true
    },
    children:[
      {
        path: '/demo',
        component: demo,
        redirect: '/demo/test1',
        meta: {
          requireAuth: true
        },
        children: [ 
          {path:'/demo/test1',component:demoTest1,meta:{requireAuth:true}},
          {path:'/demo/test2',component:demoTest2,meta:{requireAuth:true}},
          {path:'/demo/test3',component:demoTest3,meta:{requireAuth:true}}
        ]
      },
      {
        path: '/demo2',
        component: demo2,
        redirect: '/demo2/test1',
        meta: {
          requireAuth: true
        },
        children: [ 
          {path:'/demo2/test1',component:demo2Test1,meta:{requireAuth:true}},
        ]
      }
    ]
  },
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: login
  }
]

export default new Router({
  routes: routerMap
})
