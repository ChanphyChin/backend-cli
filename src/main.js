//引入vue
import Vue from 'vue';
//引入入口模块
import App from './App';
//引入路由插件
import router from './router';
//引入element-ui插件
import ElementUI from 'element-ui';
//引入element-ui插件样式表
import 'element-ui/lib/theme-default/index.css';
//引入axios插件
import es6promise from 'es6-promise';
//引入公共样式
import './styles/public.css'
//对未支持promise的浏览器进行兼容
es6promise.polyfill()


//引入vuex目录
// import store from './store'

//关闭生产模式下给出的提示
Vue.config.productionTip = false;
//使用element-ui
Vue.use(ElementUI);



/**
 * new Vue实例化了vue对象
 * el指定vue通过#app这个标签来渲染vue
 * 实例中如果组件和引入的文件模块同名，那么就可以省略后面部分，比如router部分可以写为router:router，因为同名，所以直接写router也是可以的
 * '<App/>'指代app.vue，template就是选择vue实例要加载哪个模板，也就是声明了App.vue是主程序，其他所有的.vue都是放在App.vue中
 * components: { App } 声明这个主入口是用的上面引入的App模块。
 */
window.vm = new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: { App }
})
