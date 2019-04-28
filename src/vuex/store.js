import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//初始化
const store=new Vuex.Store({
	state:{
		count:1
	}
})

//暴露
export default store