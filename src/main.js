// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import VueRouter from 'vue-router'
import ConfigRouter from './router'
/* eslint-disable no-new */
import Index from './components/Index'
import Cart from './components/Cart'

Vue.config.devtools = true

Vue.use(VueRouter)

var router =new VueRouter({
	routes
})

ConfigRouter(router)

router.beforeEach(function(){
	window.scrollTo(0,0)
})

routes=[
{
  path:'/',component:Index
},
{
	path:'/index',component:Index
},
{
	path:'/cart',component:Cart
},
{
	path:'*',redirect:'/'
}
]

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
