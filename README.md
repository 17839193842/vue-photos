# vue-photos

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


 <h3>一、封装头部组件和左侧菜单组件</h3>
# 把左侧菜单封装为一个组件，并导出，在头部组件中引入注册引用
# 把头部封装为一个头部组件，导出，并在跟组建中引入注册使用

<h3>二、父子组件的传值</h3>
# 1.父传子: 在父组件中定义数据，父组件调用注册引用子组件，并在子组件的标签上v-bind:传值给子组件。
            子组件在props属性中接收子组件的值，并写上接受类型，以对象的形式接收。然后就可以在子组件中使用
			
# 2.子传父: 在父组件中自定义方法接收数据，并在子组件标签上v-on:自定义触发；在子组件中按钮执行事件使用this.$emit()触 
           发自定义的事件，并传参数（数据）；
		  
<h3>使用vuex存储数据状态</h3>
# 1.show布尔值   用于存储左侧菜单是否显示， 在store的state中定义，在mutations中修改状态，然后在头部组件中获取状态this.$store.state.show
                 并提交commit mutaiton
				 
                