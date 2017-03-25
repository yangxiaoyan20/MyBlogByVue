<template>
  <div class="wrap">
    <div>
      <ul v-for="item in datas">
        <li>
          <div>
		 
            <h4><img src="../assets/user.png" style='height:20px;width:15px'> 用户:{{item.username}}</h4>
			 
			<p><small>rateTime: {{item.rateTime}}</small> <small>描述: {{item.text}}</small></p>
			
            <p> 推荐: {{item.recommend}} &nbsp; &nbsp;&nbsp;<b>推荐指数:</b>{{item.score}}颗星</p>
		
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import data from 'static/data/data.json';
export default {
  data() {
  	return {datas: data.ratings}
  },
  created() {
  
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
		word-break: break-all;
		   margin-top:0px;
	}
	.wrap ul li{margin-left:15px;}
  small{
    padding-right:10px;
  }
</style>