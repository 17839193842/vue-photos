<template>
	
	<!--左侧菜单-->
		  <div class="menu" >
		    <div class="menu-list" :class="{'show': show}">
		      <div class="menu-header">
		        <img class="menu-avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556465180471&di=342549c36064c3bbb6d57bb5e540c42d&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F5d40e86685397092cad16d5657edf9e6d96436988ab1-HyBi06_fw658"
		          alt="">
		        <div class="menu-title">Guoya & YY</div>
		      </div>
		      <div class="menu-ul">
		        <div>
		          <router-link class="icon-quanbu iconfont item border-1px" to="/HelloWorld">
		            <div class="menu-icon">
		              <i class="iconfont icon-welfare"></i>
		            </div>
		            <span class="menu-text">菜单一</span>
		         
		          </router-link>
		        </div>
		        <!--菜单二-->
		        <div>
		          <router-link class="icon-quanbu iconfont item border-1px clearfix" to="/HelloWorld">
		            <div class="menu-icon">
		              <i class="iconfont icon-ios"></i>
		            </div>
		            <span class="menu-text">菜单二</span>
		            <div class="menu-new">
		              <span>5</span>
		            </div>
		          </router-link>
		        </div>
		        <!--菜单三-->
		        <div>
		          <router-link class="icon-quanbu iconfont item border-1px clearfix" to="/HelloWorld">
		            <div class="menu-icon">
		              <i class="iconfont icon-html5"></i>
		            </div>
		            <span class="menu-text">菜单三</span>
		            <div class="menu-new">
		              <span>5</span>
		            </div>
		          </router-link>
		        </div>
		
		      </div>
		    </div>
		  </div>
</template>

<script>
	export default {
	  name: 'leftMenu',
	  props:{
	  	show:{
	  		type:Boolean
	  	}
	  },
      data() {
        return {
          
        };
      },
      methods: {
       
      }
	}
</script>

<style>
	@import "menu.css";
</style>