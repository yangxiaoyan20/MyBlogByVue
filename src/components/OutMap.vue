<template id="child-Outmap">
  <div id="allmap2" :style="style"></div>
</template>

<script>
  import data from 'static/data/data.json';
  export default{
    data(){
      return{
        style:{
          width:'78%',
          height:this.om.height+'px'
        },
        data_info:[]
      }
    },
    props:['om'],    //通过props属性，将从父级得到的数据传给子级
    mounted(){
      this.feathData();
    },
    methods:{
      feathData(){
        var _this=this;
          _this.data_info=eval(data.mapInfo);         
          var map = new BMap.Map("allmap2");
          map.centerAndZoom(new BMap.Point(_this.om.longitude,_this.om.latitude), 15);
          var opts = {
                width : 250,     // 信息窗口宽度
                height: 80,     // 信息窗口高度
                title : "经常在的地方" , // 信息窗口标题
                enableMessage:true//设置允许信息窗发送短息
              };
          for(var i=0;i<_this.data_info.length;i++){
            var marker = new BMap.Marker(new BMap.Point(_this.data_info[i].point1,_this.data_info[i].point2));  // 创建标注
            var content = _this.data_info[i].address;
            map.addOverlay(marker);               // 将标注添加到地图中
            addClickHandler(content,marker);
          }
          function addClickHandler(content,marker){
            marker.addEventListener("mouseover",function(e){
              openInfo(content,e)}
            );
          };
          function openInfo(content,e){
            var p = e.target;
            var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
            var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象
            map.openInfoWindow(infoWindow,point); //开启信息窗口
          };
      
      }
    },
 mounted() {
			  // 保证this.$el已经插入文档
			  this.$nextTick(function() {
				 this.feathData();  
			  })
	  }
		
	
  }
</script>
<style>
#allmap2{margin:0px auto;}
</style>