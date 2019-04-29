<template>
	<!--头部-->
		<div>
		 	<div class="page-cover" v-show="show" @click="isShow"></div>
		 	<header class="header" :class="{'show':show}" @click="isShow">
		      <header class="bar bar-nav">
		        <div class="pull-left">
		          <span class="iconfont icon-fenlei"></span>
		        </div>
		        <div class="title">{{headerTitle}}</div>
		        <div class="pull-right">
		          <span class="iconfont icon-sousuo_sousuo"></span>
		        </div>
		      </header>
		  </header>
		 <!--引用子组件-->
		 <v-menu :show="show"></v-menu>
		</div>
</template>

<script>
	import {mapState} from 'vuex'
	//调用子组件
	import vMenu from '../menu/menu.vue'
	export default {
      name: 'v-header',
      //注册子组件
      components: {
	      'v-menu':vMenu
	   },
      data() {
        return {
          menuShow:false
        };
      },
      computed: {
      	...mapState(
      		['show','headerTitle']
      	)
 
      },
      methods: {
        isShow(){
        	this.$store.commit('updateShow');
        }
      }
    };
</script>

<style>
	@import "header.css";
</style>