import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//初始化
const store=new Vuex.Store({
	state:{
		show:false,
		headerTitle: '我的相册',
		citys:5,
		animals:3
	},
	getters:{
		
	},
	mutations:{
		updateShow(state){
			state.show=!state.show;
		},
	    updateTitle(state,title){
	    	state.headerTitle=title;
	    }
	},
	actions:{
		
	}
})

//暴露
export default store