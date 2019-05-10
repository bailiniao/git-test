// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// 
// Vue.use(Router)
// 
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
// 
import Vue from 'vue'
import Router from 'vue-router'
import v123 from '@/components/v123.vue'
import v456 from '@/components/v456.vue'
import v789 from '@/components/v789.vue'
import v456111 from '@/components/v456111.vue'
import v456222 from '@/components/v456222.vue'
import v456333 from '@/components/v456333.vue'
import v123left from '@/components/v123left.vue'
import v123right from '@/components/v123right.vue'
import yonghu from '@/components/yonghu.vue'
import vuexxx from '@/components/vuexxx.vue'

Vue.use(Router)

 let router=  new Router({
	
	// mode:'history',
	routes: [{
			path: '/home',
			name: 'v123',
			components: {
				default: v123,
				leftzujian: v123left,
				rightzujian: v123right,
			}
		},
		{
			path: '/taobao',
			name: 'v456',
			component: v456,
			children: [{
					path: 'v456111',
					name: 'v456111',
					components: {
						default: v456111,
						leftzujian: v123left,
					}
				}, {
					path: 'v456222',
					name: 'v456222',
					component: v456222
				}, {
					path: 'v456333',
					name: 'v456333',
					component: v456333
				},
				// 				{
				// 					path: '/taobao',
				// 					name: 'v456111',
				// 					redirect: 'v456111'
				// 				},
			]
		},
		{
			path: '/jingdong',
			name: 'v789',
			components: {
				default: v789,
				leftzujian: v123left,
			}
		},
		{
			path: '/yonghu',
			name: 'yonghu',
			component: yonghu
		},
		{
			path: '/yonghu/:id',
			name: 'yonghuid',
			component: yonghu,
			props: true
		},
		{
			path: '/vuexxx',
			name: 'vuexxx',
			component: vuexxx
		},
		// 		{
		// 			path: '*',
		// 			redirect: '/home'
		// 		},
	],
	scrollBehavior(to, from, savedPosition) {
		// return 期望滚动到哪个的位置
	}
})

router.beforeEach((to, from, next) => {
  next()
})

export default router