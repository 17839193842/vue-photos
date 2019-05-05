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
        	<Waterfall :list="list" :gutter="10" :width="240" :phoneCol="2" backgroundColor="#666" @handleClick="handleClick" ref="waterfall">
		      <template slot="item" scope="props">
		        <div class="card">
		          <div class="cover"><img :src="props.data.src" alt="" @load="$refs.waterfall.refresh()"></div>
		          <div class="name">
		            <p>{{props.data.name}}</p>
		          </div>
		        </div>
		      </template>
		    </Waterfall>
		    <button @click="addNewList" style="margin-top:10px;padding:6px;">加一个</button>
        </div>  
        <div class="swiper-slide">
        	<div class="swiper-slide">
        	<Waterfall :list="list" :gutter="10" :width="240" :phoneCol="2" backgroundColor="#666" @handleClick="handleClick" ref="waterfall">
		      <template slot="item" scope="props">
		        <div class="card">
		          <div class="cover"><img :src="props.data.src" alt="" @load="$refs.waterfall.refresh()"></div>
		          <div class="name">
		            <p>{{props.data.name}}</p>
		          </div>
		        </div>
		      </template>
		    </Waterfall>
		    <button @click="addNewList" style="margin-top:10px;padding:6px;">加一个</button>
        </div>  
        </div>
        <div class="swiper-slide">
        	<div class="swiper-slide">
        	<Waterfall :list="list" :gutter="10" :width="240" :phoneCol="2" backgroundColor="#666" @handleClick="handleClick" ref="waterfall">
		      <template slot="item" scope="props">
		        <div class="card">
		          <div class="cover"><img :src="props.data.src" alt="" @load="$refs.waterfall.refresh()"></div>
		          <div class="name">
		            <p>{{props.data.name}}</p>
		          </div>
		        </div>
		      </template>
		    </Waterfall>
		    <button @click="addNewList" style="margin-top:10px;padding:6px;">加一个</button>
        </div>  
        </div>
        <div class="swiper-slide">
        	<div class="swiper-slide">
        	<Waterfall :list="list" :gutter="10" :width="240" :phoneCol="2" backgroundColor="#666" @handleClick="handleClick" ref="waterfall">
		      <template slot="item" scope="props">
		        <div class="card">
		          <div class="cover"><img :src="props.data.src" alt="" @load="$refs.waterfall.refresh()"></div>
		          <div class="name">
		            <p>{{props.data.name}}</p>
		          </div>
		        </div>
		      </template>
		    </Waterfall>
		    <button @click="addNewList" style="margin-top:10px;padding:6px;">加一个</button>
        </div>  
        </div>
      </div>
    </div>
    
  </div>

</template>

<script>
import Waterfall from "../../components/waterfall.vue";
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
         list: [],
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
      
      this.list = [
       {
          src: "http://p.ssl.qhimg.com/t01724724fc9caa94bf.jpg",
          name: "场景一"
        },
        {
          src: "http://cs-op.douyucdn.cn/vod-index/2018/01/22/e21ebad16025f747b8bc96091042c900.jpg",
          name: "场景二"
        },
        {
          src: "http://p9.qhimg.com/t01447c917234911cf2.jpg",
          name: "场景三"
        },
        {
          src: "http://05.imgmini.eastday.com/mobile/20180212/20180212201510_0e27ec86ed59034f300f4e1d4aee8fd4_1.jpeg",
          name: "场景四"
        },
        {
          src: "http://img4.dwstatic.com/vhuyatv/1803/384953000949/1521011389431.jpg",
          name: "场景五"
        },
        {
          src: "http://img2.dwstatic.com/pc/1802/381422653510/1517467766942.jpg",
          name: "场景六"
        },
        {
          src: "http://i5.hexun.com/2018-02-01/192378386.jpg",
          name: "场景七"
        },
        {
          src: "http://i-3.yiwan.com/2018/1/29/46593a88-631b-4c58-865e-237bdff3f29a.jpg",
          name: "场景八"
        }
    ]
      
    },
    methods: {
      tabClick(index){
        this.nowIndex = index
        this.mySwiper.slideTo(index,1000,false)
      },
      addNewList() {
      let list = [
        {
          src: "http://p.ssl.qhimg.com/t01724724fc9caa94bf.jpg",
          name: "场景一"
        },
        {
          src: "http://cs-op.douyucdn.cn/vod-index/2018/01/22/e21ebad16025f747b8bc96091042c900.jpg",
          name: "场景二"
        },
        {
          src: "http://p9.qhimg.com/t01447c917234911cf2.jpg",
          name: "场景三"
        },
        {
          src: "http://05.imgmini.eastday.com/mobile/20180212/20180212201510_0e27ec86ed59034f300f4e1d4aee8fd4_1.jpeg",
          name: "场景四"
        },
        {
          src: "http://img4.dwstatic.com/vhuyatv/1803/384953000949/1521011389431.jpg",
          name: "场景五"
        },
        {
          src: "http://img2.dwstatic.com/pc/1802/381422653510/1517467766942.jpg",
          name: "场景六"
        },
        {
          src: "http://i5.hexun.com/2018-02-01/192378386.jpg",
          name: "场景七"
        },
        {
          src: "http://i-3.yiwan.com/2018/1/29/46593a88-631b-4c58-865e-237bdff3f29a.jpg",
          name: "场景八"
        }
      ];
      this.list.push(...list)
      },
      handleClick(item) {
	      alert()
	      console.log(item)
	    }
    },
  created(id){
 
  },
  components: {
    Waterfall
  }
}
</script>
<style>
	.animal{
		width:100%;
	}
     .swiper-container {
        width: 500px;
        height: 100%;
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
	  padding-bottom: 10px;
	  border-bottom: 2px solid #00ba6b;
	}
	.swiper_con{
	  width:100%;
	  position:relative;
	} 
	.card {
			border-radius: 5px;
			overflow: hidden;
			cursor: pointer;
			background: #fff;
			position: relative;
			transition: .2s;
			top: 0;
		}
		
		.cover {
			line-height: 0;
			padding: 10px 10px 0;
		}
		
		.cover img {
			width: 100%;
		}
		
		.name {
			background: #f5f6fa;
			color: #666;
			font-weight: 600;
			padding: 10px 20px;
			font-size: 14px;
		}
</style>