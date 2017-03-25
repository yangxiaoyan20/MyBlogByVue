<template>
  <div class="wrap">
  <div class="logo">
		<img src="../assets/logo1.png" title="logo" class='logo'>
  </div>
  <div class="user_info">
		<h2> yangxiaoyan </h2>
		
	</div>
    <div class="logo"><p>点击右侧显示计数{{count}}</p></div>
 
  	<div class="lists">
  	  <ul class="increment" @click="increment">
  	  	<li :class="{active : url === '/home'}"><img src="../assets/home.png"><router-link :to="{name: 'content'}">home</router-link></li>
  	  	<li :class="{active : url === '/echarts'}"><img src="../assets/charts.png"><router-link :to="{name: 'echarts'}">echarts</router-link></li>
  	  	<li :class="{active : url === '/map'}"><img src="../assets/location.png"><router-link :to="{name: 'map'}">map</router-link></li>
  	  	<li :class="{active : url === '/wordCloud'}"><img src="../assets/lists-1.png"><router-link :to="{name: 'wordCloud'}">wordCloud</router-link></li>
		<li :class="{active : url === '/photo'}"><img src="../assets/photo.png"><router-link :to="{name: 'photo'}">photo</router-link></li>
		<li :class="{active : url === '/food'}"><img src="../assets/list.png"><router-link :to="{name: 'food'}">food</router-link></li>

  	</ul>
	</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  data() {
    return {url: ''}
  },
  created() {
    this.getUrl()
  },
  methods: {
  	getUrl() {
  	  this.url = this.$route.path
  	},
		...mapMutations(['increment'])
  },
  computed: {
  	...mapState(['count']),
  },
  watch: {
    '$route': 'getUrl'
  },
}
</script>
<style scoped>
*{
	padding: 0;
	margin: 0;
}
  .wrap{
	color: #fff;
  }
  .logo{
  	padding: 10px 0;
  	text-align: center;
	border-radius:250px;
  }
  .user_info{
text-align:center;
  }
  .tabs,.tabs.ul{
  	width: 200px;
  }
  .tabs li{
  	float: left;
  	width: 50px;
  	height: 30px;
  	background: #434343;
  	text-align: center;
  }
  .tabs li img{
  	width: 20px;
  	height: 15px;
  	margin-top: 6px;
	opacity:0.4;
	filter:alpha(opacity=40); /* 针对 IE8 以及更早的版本 */
  }
  .tabs li.active{
  	background: none
  }
  .clear{clear: both;}
  .lists{
  	width: 200px;
  	padding: 20px 0px;
  }
  .lists li{
  	width: 200px;
  	height: 35px;
  	line-height: 35px;
  }
  .lists li a{
  	color: #fff;
  	text-decoration: none;
  }
  .lists li.active{
  	background: #CC4041;
  }
  .lists li img{
  	width: 20px;
  	height: 20px;
  	margin-right: 5px;
  	margin-left: 15px;
  }
</style>