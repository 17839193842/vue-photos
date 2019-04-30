<template>
        <div class="zq-waterfall">
            <div class="zq-waterfall-left">
                <div class="box" v-for="(item,index) in itemsA" :key="index">
                    <img :src="item.img" alt="">
                </div>
            </div>
            <div class="zq-waterfall-right">
                <div class="box" v-for="(item,index) in itemsB" :key="index">
                    <img :src="item.img" alt="">
                </div>
            </div>
        </div>
</template>
<script>
    export default {
        data () {
            return {
                items: [
                    { img:'./static/img/img.jpg'},
                    { img:'./static/img/img.jpg'},
                    { img:'https://ps.ssl.qhmsg.com/bdr/800__/t017843e759f2628d1f.jpg'},
                    { img:'https://p0.ssl.qhimgs1.com/bdr/800__/t01d711248316728b20.jpg'},
                    { img:'./static/img/img.jpg'},
                    { img:'https://ps.ssl.qhmsg.com/bdr/752__/t01507473a62cf7cc58.jpg'},
                    { img:'https://p0.ssl.qhimgs1.com/bdr/800__/t01d711248316728b20.jpg'},
                    { img:'./static/img/img.jpg'},
                    { img:'https://ps.ssl.qhmsg.com/bdr/752__/t01507473a62cf7cc58.jpg'},
                    { img:'https://p0.ssl.qhimgs1.com/bdr/800__/t01d711248316728b20.jpg'},
                ],
                itemsA:[],
                itemsB:[]
            }
        },
        computed: {},
        mounted: function () {
            this.getData()
        },
        methods: {
            // 方法
            getImg(url, callback){
                var img = new Image();
                img.src = url;
                //如果图片被缓存，则直接返回缓存数据
                if(img.compltet){
                    /* callback(img.width, img.height); */
                    callback(img.width, img.height, Number(img.height)/Number(img.width));
                }else{
                    //完全加载完毕的事件
                    img.onload = function(){
                        /* callback(img.width, img.height); */
                        callback(img.width, img.height, Number(img.height)/Number(img.width));
                    }
                }
            },
            getData(){
                // 加载完页面执行的函数
                let boxA = document.getElementsByClassName('zq-waterfall-left')[0].clientHeight
                let boxB = document.getElementsByClassName('zq-waterfall-right')[0].clientHeight
                let that = this;
                for(let val of this.items){
                    that.getImg(val.img,function (w,h,r) {
                        console.log(w)
                        boxA = document.getElementsByClassName('zq-waterfall-left')[0].clientHeight
                        boxB = document.getElementsByClassName('zq-waterfall-right')[0].clientHeight
                        if(boxA>boxB){
                            that.itemsB.push(val)
                        }else{
                            that.itemsA.push(val)
                        }
                    })
                }
            }
        },
        components: {
            // 组件
        }
    }
</script>
<style scoped>
	.zq-waterfall{
		width:100%;
	}
    .box img {
    	width: 100%;
    	display: block;
    	border-radius:3px;
    	margin:5px 5px;
    }
    
    .zq-waterfall-left {
    	float: left;
    	width: 45%;
    }
    
    .zq-waterfall-right {
    	float: left;
    	width: 55%;
    }
    
</style>
