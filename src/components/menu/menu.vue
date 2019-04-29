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
		        <div v-for="(menu,index) in menus" @click="updateHeader(menu)" :key="index">
		          <router-link class="icon-quanbu iconfont item border-1px" to="/city">
		            <div class="menu-icon">
		              <i class="iconfont icon-welfare"></i>
		            </div>
		            <span class="menu-text">{{menu}}</span>
		             <div class="menu-new" v-show="menu=='旅游日记'">
		              <span>{{citys}}</span>
		            </div>
		            <div class="menu-new" v-show="menu=='动物世界'">
		              <span>{{animals}}</span>
		            </div>
		          </router-link>
		        </div>
		      
		      
		
		      </div>
		    </div>
		  </div>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
	  name: 'v-menu',
	  props:{
	  	show:{
	  		type:Boolean
	  	}
	  },
      data() {
        return {
          menus:['旅游日记', '可爱卡通', '植物', '动物世界', '明星网红'],

        };
      },
      computed:{
      	...mapState([
      		'citys','animals'
      	])
      },
      methods: {
       updateHeader(title) {
          this.$store.commit('updateTitle', title);
          this.$store.commit('updateShow');
        }
      }
	}
</script>

<style scoped="scoped">
	@import "menu.css";
</style>