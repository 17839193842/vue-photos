<template>
  <div id="app">
  	<!--引用头部组件-->
  	<v-header></v-header>
    <router-view/>
  </div>
</template>

<script>
	//引入头部组件
	import vHeader from './components/header/header.vue'
	export default {
	  name: 'App',
	  //注册头部组件
	  components: {
      'v-header':vHeader
    },
	}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
  width:100%;
}
</style>
