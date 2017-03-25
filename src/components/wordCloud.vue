<template>
  <div>
    <div id="word_cloud1"></div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import 'echarts-wordcloud';
  import data from 'static/data/data.json';
  
  export default {
    data () {
      return {
        chart: null
      };
    },
    methods: {
      drawCloud (id, myshape) {
        this.chart = echarts.init(document.getElementById(id));
        this.chart.setOption({
          toolbox: {
            feature: {
              saveAsImage: {},
              dataView: {}
            },
            right: 20,
            top: 20
          },
          series: [{
            type: 'wordCloud',
            shape: myshape,
            left: 'center',
            top: 30,
            width: '75%',
            height: '80%',
            right: null,
            bottom: null,
            sizeRange: [12, 75],
            rotationRange: [-90, 90],
            rotationStep: 45,
            gridSize: 8,
            textStyle: {
              normal: {
                fontFamily: 'Microsoft Yahei',
                fontWeight: 'bold',
                color: function() {
                  return 'rgb(' + [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160)
                  ].join(',') + ')'
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
              }
            },
            data: data.cloud.wordContent
          }]
        });
      }
    },
    mounted() {
      // 保证this.$el已经插入文档
      this.$nextTick(function() {
        this.drawCloud('word_cloud1', 'cardioid');
       
        var that = this;
        var resizeTimer = null;
        window.onresize = function() {
          if (resizeTimer) clearTimeout(resizeTimer);
          resizeTimer = setTimeout(function() {
            that.drawCloud('word_cloud1', 'cardioid');            
          }, 20000);
        }
      })
    }
  }
</script>
<style scoped>
  #word_cloud1 {
    position: relative;
    width: 70%;
    height: 460px;   
	margin:10px auto;
    border: solid #ccc 1px;
    box-shadow: 0 0 8px #ccc;
    border-radius: 10px;
  }

</style>

