import home from './home.js'
import loading from './loading.js'
import carts from './cart.js'
import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

 export default new Vuex.Store({
     modules: {
         home,
         loading,
         carts
     },
})