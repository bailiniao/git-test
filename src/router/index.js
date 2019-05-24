import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import category from '@/page/category'
import detail from '@/page/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
		{
		  path: '/category',
		  name: 'category',
		  component: category
    },
    {
		  path: '/detail/:id',
		  name: 'detail',
		  component: detail
		}
  ]
})
