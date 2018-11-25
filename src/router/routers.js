import Home from './../apps/Home.vue'
import Catgory from '../apps/Catgory.vue'
import Login from '../apps/Login.vue'
import Cart from '../apps/Cart.vue'
export default [{
    path: '/home',
    component: Home
   },{
       path:'/catgory',
       name:'Home',
       component: Catgory
   },{
    path:'/catgory/:id',
    name:'Home',
    component: Catgory
    },{
       path:'/cart',
       name:'Home',
       component: Cart
   },{
       path:'/login',
       name: 'Home',
       component: Login
   },{
       path: '*',
       redirect: '/home'
   }]