import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import category from '@/page/category'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
		{
		  path: '/category:id?',
		  name: 'category',
		  component: category
		}
  ]
})
