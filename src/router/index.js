import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/view/home/home'
import Travel from '@/view/travel/travel'
import Animal from '@/view/animal/animal'
import Cartoon from '@/view/cartoon/cartoon'
import Plant from '@/view/plant/plant'
import Persons from '@/view/persons/persons'



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
    },
    {
      path: '/animal',
      name: 'Animal',
      component: Animal
    },
    {
    	path:'/cartoon',
    	name:'Cartoon',
    	component:Cartoon
    },
    {
    	path:'/plant',
    	name:'Plant',
    	component:Plant
    },
     {
    	path:'/persons',
    	name:'Persons',
    	component:Persons
    }
  
  ]
})
