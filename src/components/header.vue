<template>
  <div class="wrap">
    <div id='header_info'>
		<span class='big'>{{msg1}}</span>
		<small>   {{msg2}}</small>
	</div>
	<p class='hr'></p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
      msg1: 'Love前端',
	  msg2: '专注互联网前端技术 JS、CSS、HTML',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .wrap{
   font-size: 16px;
   margin:10px auto;
 }
 .big{font-size:18px;margin-left:15px;font-weight:bold;color:#CC4041;}
 .hr{ height:1px;border:none;border-top:1px dashed black;}
</style>
