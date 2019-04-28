<template>
	<div class="home">
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
		 </div>
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
  
	</div>
</template>

<script>
	export default
    {
      name: 'home',
      data() {
        return {
          show:false,
          menuShow:false
        };
      },
      methods: {
        updateHeader() {
          
        },
        isShow(){
        	this.menuShow=!this.menuShow;
        	this.show=!this.show;
        }
      }
    };
</script>

<style>
	/*头部样式*/
 .page-cover{
	position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,.4);
    z-index: 1000;
}

.header{
  position:fixed;
  top:0;
  right:0;
  left:0;
  z-index:10;
  width:100%;
  min-height:50px;
  font-size:1.8px;
  line-height:50px;
  background-color:#03a9f4;
  color:#ffffff;
  text-align:center;
  display:table;
  box-shadow:0 1px 0 rgba(0, 0, 0, .1), 0 1px 2px rgba(0, 0, 0, .1);
  transition:all .3s ease;
  }
  .header.show{
    transform:translateX(250px);
   }
  .title{
    min-height:50px;
    position:absolute;
    margin:0;
    text-align:center;
    white-space:nowrap;
    right:100px;
    left:100px;
    font-size:16px;
    width:auto;
    overflow:hidden;
    text-overflow:ellipsis;
    z-index:2;
    font-weight:500;
    }
  .pull-left{
    padding:0 10px;
    font-size:16px;
    font-weight:400;
    z-index:2;
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
    display:-webkit-box;
    display:-webkit-flex;
    display:flex;
    -webkit-align-items:center;
    align-items:center;
    float:left !important;
   }
  .pull-right{
    padding:0 10px;
    font-size:16px;
    font-weight:400;
    z-index:2;
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
    display:-webkit-box;
    display:-webkit-flex;
    display:flex;
    -webkit-align-items:center;
    align-items:center;
    float:right !important;
    }
    .iconfont{
      font-size:18px
	}
	
	/*左侧菜单样式*/
	.menu{
		
	}
 .menu-list {
  	position: fixed;
  	top: 0;
  	bottom: 0;
  	flex: 0 0 250px;
  	left: -250px;
  	width: 250px;
  	background-color: #22262a;
  	color: #313131;
  	transition: all .3s ease;
  	z-index: 999;
  }
  
  .menu-header {
  	width: 100%;
  	height: 180px;
  	background-color:#262d30;
  }
  
  .menu-avatar {
  	width:100px;
  	height:100px;
  	border-radius: 50%;
  	margin: 20px 70px;
  }
  
  
  .menu-title {
  	font-size: 14px;
  	color: #ffffff;
  	line-height: 28px;
  	font-weight: 500;
  	text-align: center;
  }
  
  .menu-list.show {
  	transform: translateX(250px);
  }
  
  .menu-ul{
  	margin: 0;
  	overflow: hidden;
  	padding: 0;
  }
  .clearfix:after{
  	content:"";
  	display:table;
  	height:0;
  	line-height:0;
  	clear:both;
  	overflow:hidden;
  }
  .item {
  	display: block;
  	font-size: 14px;
  	padding: 10px 13px;
  	text-align: left;
  	text-indent: 1px;
  	line-height: 15px;
  	color: #a6adb3;
  	font-weight: 700;
  }
  
  .border-1px {
  	border: 1px solid #40474a;
  }
  
  .item:nth-last-child {
  	margin-bottom: 50px;
  }
  
  .line {
  	border-top: 1px solid #d4d4d4;
  }
  
  .menu-icon {
  	display: block;
  	float:left;
  	width: 30px;
  	height: 30px;
  	background-color: #383c40;
  	border-radius: 50%;
  	vertical-align: top;
  	text-align: center;
  }
  
  .menu-icon .iconfont {
  	color:#999999;
  line-height:30px;
  font-weight:700;
 }
 .active {
 	color: #01aef3;
 }
 .active .menu-icon {
 	background-color: #01aef3;
 }
 .active .menu-icon .iconfont {
 	color: #ffffff;
 }
 .menu-text {
 	display: inline-block;
 	font-size: 15px;
 	line-height: 32px;
 	vertical-align: top;
 	margin-left: 10px;
 	font-weight: 700;
 }
 .menu-new {
 	display: inline-block;
 	width: 30px;
 	height: 30px;
 	background-color: #d81229;
 	border-radius: 50%;
 	vertical-align: top;
 	text-align: center;
 	float: right;
 }
 .menu-new span {
 	color: #ffffff;
 	font-size: 15px;
 	line-height: 30px;
 	font-weight: 500;
 }
</style>