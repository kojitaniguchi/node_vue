import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import TimeLine from '@/components/TimeLine'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',
      components: {
        header: Header,
        timeline: TimeLine
      }
    }
  ]
})
