import Vue from 'vue'
import VueRouter from 'vue-router'

import Header from './components/header.vue'
import Home from './components/home.vue'
import Footer from './components/footer.vue'
import Content from './components/content.vue'
import eCharts from './components/charts.vue'
import Map from './components/map.vue'
import WordCloud from './components/WordCloud.vue'
import Photo from './components/photo.vue'
import Food from './components/food.vue'
import HomedetailsInfo from './components/homedetailsInfo.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/home', component: Content, name:'content',
   children: [
        {
          path: 'footer',
          component: Footer
        }
      ]
  },
  {path: '/homedetailsInfo/:id', component: HomedetailsInfo, name: 'homedetailsInfo'},
  {path: '/food', component: Food, name: 'food'},
  {path: '/echarts', component: eCharts, name:'echarts'},
  {path: '/map', component: Map, name:'map'},
  {path: '/photo', component: Photo, name:'photo'},
  {path: '/wordCloud', component: WordCloud, name:'wordCloud'},
  

  {path: '*', component: Content, name:'home'}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
