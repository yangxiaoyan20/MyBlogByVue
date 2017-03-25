<template>
  <div id="allMap">
    <h3>我的位置：跳跃的图标处</h3>
    <MapView :m="giveData"></MapView>
	<h3>我经常在的位置：<small>放上坐标处提示坐标详细信息</small></h3>
	<MapView2 :om="giveOutData"></MapView2>
  </div>
</template>

<script>
import MapView from './OneMap.vue'
import MapView2 from './OutMap.vue'
export default {
  data () {
    return {
      giveData:{  //vue2.0将数据定位对象的形式，实现父子组件的通信
        height:200,
        longitude:104.7019980000,
        latitude:31.539
      },
		giveOutData:{  
        height:200,
        longitude:104.711163,
        latitude:31.539669
      }
    }
  },
  components:{
    MapView,
	MapView2
	
  }
}
</script>

<style>
#allMap{overflow:auto;}
</style>
