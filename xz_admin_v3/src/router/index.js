import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import login from '@/components/login'
import main from '@/components/main'
import productlist from '@/components/productlist'
import statistics from '@/components/statistics'
import userlist from '@/components/userlist'

Vue.use(Router)
Vue.use(Resource)

export default new Router({
  routes: [
    {path: '/', component: login},
    {path:'/login',component:login},
    {
    	path:'/main',component:main,
    	children:[
			{path:'',component:statistics},
    		{path:'plist',component:productlist},
    		{path:'sta',component:statistics},
    		{path:'ulist',component:userlist}
    	]
	}
  ]
})
