<template>
  <div class="main_content">
    <div id="my_chart"></div>
	 <div id="my_chart2"></div>
  </div>
</template>
<script>
  import echarts from 'echarts';
 import data from 'static/data/data.json';
  export default {
  name:'chart',
    data() {
      return {
       author:'yangxy'
      }
    },
	 methods: {
	 drawGraphy(id){
	this.mychart = echarts.init(document.getElementById(id));
        this.mychart.setOption({
			title: {
				text: '关系示例'
			},
			tooltip: {},
			animationDurationUpdate: 1500,
			animationEasingUpdate: 'quinticInOut',
			series : [
				{
					type: 'graph',
					layout: 'none',
					symbolSize: 50,
					roam: true,
					label: {
						normal: {
							show: true
						}
					},
					edgeSymbol: ['circle', 'arrow'],
					edgeSymbolSize: [4, 10],
					edgeLabel: {
						normal: {
							textStyle: {
								fontSize: 15
							}
						}
					},
					data: [{
						name: 'Tom',
						x: 300,
						y: 300
					}, {
						name: 'Porter',
						x: 800,
						y: 300
					}, {
						name: 'Yangyan',
						x: 550,
						y: 100
					}, {
						name: 'Caloria',
						x: 550,
						y: 500
					}],
					// links: [],
					links: [{
						source: 0,
						target: 1,
						symbolSize: [5, 20],
						
						lineStyle: {
							normal: {
								width:12,
								curveness: 0.2
							}
						}
					}, {
						source: 'Porter',
						target: 'Tom',
						label: {
							normal: {
								show: true
							}
						},
						lineStyle: {
							normal: { curveness: 0.2 }
						}
					}, {
						source: 'Tom',
						target: 'Yangyan'
					}, {
						source: 'Porter',
						target: 'Yangyan'
					}, {
						source: 'Porter',
						target: 'Caloria'
					}, {
						source: 'Yangyan',
						target: 'Caloria'
					},{
						source: 'Tom',
						target: 'Caloria'
					}],
					lineStyle: {
						normal: {
							opacity: 0.9,
							width: 2,
							curveness: 0
						}
					}
				}
			]
		})
	 },
      drawBar (id) {
	  this.chart = echarts.init(document.getElementById(id));
        this.chart.setOption({
			title: {
				text: '娱乐及学习时间'
			},
			legend: {
				data: ['bar'],
				align: 'left'
			},
			toolbox: {
				// y: 'bottom',
				feature: {			
					dataView: {},
					saveAsImage: {
						pixelRatio: 2
					}
				}
			},
			tooltip: {},
			xAxis: {
				data: data.TimeThing.TimeThing,
				silent: false,
				splitLine: {
					show: false
				}
			},
			yAxis: {
			},
			series: [{
				name: 'bar',
				type: 'bar',
				data: data.TimeThing.TimeThingData,
				animationDelay: function (idx) {
					return idx * 10;
				}
			}],
			animationEasing: 'elasticOut',
			animationDelayUpdate: function (idx) {
				return idx * 5;
			}
		
     })
      }
    },
	    mounted() {
      this.$nextTick(function() {
        this.drawBar('my_chart');
		 this.drawGraphy('my_chart2')
      })
    }
  }
</script>
<style scoped>
#my_chart,#my_chart2 {
  position: relative;
 margin:6px auto;
  width: 800px;
  height: 230px;
  border: solid #ccc 1px;
  box-shadow: 0 0 8px #ccc;
  border-radius: 10px;
}
  @media screen and(max-width:470px){
  #my_chart,#my_chart2{
  height:200px;
  }
  }
</style>