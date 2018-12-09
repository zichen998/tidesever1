import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Products from '@/components/Products'
import Show from '@/components/Show'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import Edit from '@/components/Edit'
import Login from '@/components/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },

    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/show',
      name: 'Show',
      component: Show
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
      props: true
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs
    }
  ]
})
