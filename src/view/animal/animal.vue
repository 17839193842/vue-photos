<template>
 <div class="animal">
    <div class="navlist">
      <ul>
        <li class="navli"  v-for="(item,index) in navList" :class="{'activeT':nowIndex===index}" @click="tabClick(index)"><i>{{item.name}}</i>
        </li>
      </ul>
    </div>
   <div class="swiper-container swiper_con">
      <div class="swiper-wrapper">
      	<!--猫-->
        <div class="swiper-slide">
        	1111
        </div>  
        <div class="swiper-slide">
        	2222
        </div>
        <div class="swiper-slide">
        	3333
        </div>
        <div class="swiper-slide">
        	4444
        </div>
      </div>
    </div>
    
  </div>

</template>

<script>
import Swiper from 'swiper';
export default {
    name: "swiper",
    data() {
      return {
        navList:[
          {name:'猫'},
          {name:'大象'},
          {name:'狗'},
          {name:'兔子'},
        ],
        nowIndex:0,
      }
    },
    components:{
    },
    mounted() {
      var that=this
      that.mySwiper = new Swiper('.swiper-container',{
          initialSlide:0,
          autoplay:false,
          keyboardControl:true,
          autoHeight:true,
          observer:true,
          observeParents:true,
          onSlideChangeStart:function(){
            // console.log(that.mySwiper.activeIndex)
            that.nowIndex=that.mySwiper.activeIndex
          }
       });
      // this.getList();
    },
    methods: {
      tabClick(index){
        this.nowIndex = index
        this.mySwiper.slideTo(index,1000,false)
      },
    },
  created(id){
 
  }
}
</script>
<style>
	.animal{
		width:100%;
	}
     .swiper-container {
        width: 500px;
        height: 300px;
        margin: 20px auto;
    }
	.navlist{
	  width:100%;
	  height:40px;
	  border-bottom:1px solid rgba(151,151,151,0.1);
	  position:relative;
	}
	.navlist ul{
		width:100%;
		height:40px;
		overflow:hidden;
		display:flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		margin:0px;
		padding:0px;
	}
	.navlist ul li{
		flex:1;
		list-style: none;
	}
	.navli i{
	  font-style: normal;
	  font-size: 16px;
	}
	.activeT{
	  color:#00ba6b;
	  padding-bottom: .3rem;
	  border-bottom: 2px solid #00ba6b;
	}
	.swiper_con{
	  width:100%;
	  margin-bottom:40px;
	  position:relative;
	} 
	
</style>