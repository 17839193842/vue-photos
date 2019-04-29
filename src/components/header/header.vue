<template>
	<!--头部-->
		<div>
		 	<div class="page-cover" v-show="menuShow" @click="isShow"></div>
		 	<header class="header" :class="{'show': menuShow}" @click="isShow">
		      <header class="bar bar-nav">
		        <div class="pull-left">
		          <span class="iconfont icon-fenlei"></span>
		        </div>
		        <div class="title">我的相册</div>
		        <div class="pull-right">
		          <span class="iconfont icon-sousuo_sousuo"></span>
		        </div>
		      </header>
		  </header>
		 <!--引用子组件-->
		 <v-menu></v-menu>
		</div>
</template>

<script>
	//调用子组件
	import vMenu from '../menu/menu.vue'
	export default {
      name: 'header',
      //注册子组件
      components: {
	      vMenu
	    },
      data() {
        return {
          show:false,
          menuShow:false
        };
      },
      methods: {
        isShow(){
        	this.menuShow=!this.menuShow;
        	this.show=!this.show;
        }
      }
    };
</script>

<style>
	@import "header.css";
</style>