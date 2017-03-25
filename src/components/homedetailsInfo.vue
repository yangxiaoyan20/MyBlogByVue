<template>
  <div class="wrap">
    <div>
      <ul v-for="item in datas">
        <li>
          <div>  
            <h4>{{item.headername}}<small>{{item.rateTime}}</small></h4>
			<li v-for="entry in item.list">
			<div>
				<h5>{{entry.title}}</h5>
				<p>{{entry.author}} {{entry.info}}</p>
				<p>有{{entry.answer}}个用户回答</p>
				<p>
				答案:{{entry.answerInfo}}
				</p>
			</div>
			</li>
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
  	return {datas: data.detailInfo,ids: this.$route.params.id}
  },
  created() {
  //<!---	this.$http.get("http://localhost:8888/api/detailInfo", { params: {id: this.$route.params.id}}).then(data => {
  //		this.datas = data.data.datta
//		alert(this.datas+"--"+this.$route.params.id)
  //	 })--->
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
	}
  small{
    padding-left:20px;
  }
</style>