<template>
  <div class="wrap">
    <div>
      <ul v-for="entry in datas">
	  <li><h4>{{entry.series}}</h4></li>
	   <div v-for="item in entry.seriesInfo">
    	<li><router-link :to="{name: 'homedetailsInfo', params: {id : item.id}}">{{item.title}}</router-link>   <small class="info"> 作者: {{item.author}} 发表时间:{{item.time}}</small></li>
      <li>{{item.artileInfo}}</li>
	  </div>
	  <hr>
	  </ul>
    </div>
  </div>
</template>

<script>

 import data from 'static/data/data.json';
export default {
  data() {
  	return {datas: data.articles}
  },
  created() {
  	//<!---this.$http.get("http://localhost:8888/api/articles").then(data => {
  		
  	//	this.datas = data.data.data
  	//  })-->
  },
  methods: {
  
  },
  computed: {
  }
}
</script>

<style scoped>
	.wrap{
		font-size: 16px;
	}
	.wrap ul li,hr{margin-left:13px;margin-bottom:6px;}
	.info{text-align:center;}
	.increment{
		width: 100%;
		height: 20px;
		text-align: center;
		line-height: 10px;
		font-size: 20px;
		cursor: pointer;
	}
	ul div{margin-bottom:8px;}
</style>