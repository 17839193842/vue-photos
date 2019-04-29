import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/view/home/home'
import City from '@/view/citys/citys'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWord',
      name: 'HelloWorld',
      component: HelloWorld
    },
     {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
