import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/view/home/home'
import Travel from '@/view/travel/travel'


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
      path: '/travel',
      name: 'Travel',
      component: Travel
    }
  
  ]
})
