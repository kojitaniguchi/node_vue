import Vue from 'vue'
import Router from 'vue-router'
// import Top from '@/components/Top'
import Header from '@/components/Header'
import TimeLine from '@/components/TimeLine'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',
      component: Header,
      children: [
        { path: '', component: TimeLine }
      ]
    }
  ]
})
