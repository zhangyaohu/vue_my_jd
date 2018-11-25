<template>
    <div class="cart-container">
      <header class="cart_header">购物车</header>
      <div class="cart_login">
          <span>登录后可同步电脑与手机购物车中的商品</span>
          <span class="button primary">登录</span>
      </div>
      <div class="cart-body" v-for="(list,$index) in $store.state.carts.cartList" @click="checkRadio($event,$index)">
          <div v-show="$store.state.carts.cartList[$index].selected" class="checkbox_selected"></div>
          <div v-show="!$store.state.carts.cartList[$index].selected" class="checkbox_normal"></div>
          <a>
            <img :src="list.product_img_url"/>
          </a>
      </div>
    </div>
</template>

<script>
    import Req from '../utils/req.js'
    export default {
        name: "Cart",
        data(){
            return{
                cartList: []
            }
         },
        created(){
            let self = this
            Req.getCartData()
                .then((resp)=>{
                    self.$store.dispatch('getCartData', resp.data)
                }).then(()=>{
                self.cartList = this.$store.state.carts.carts
                self.cartList.forEach(item=>{
                    item.selected= false
                })
                this.$store.state.carts.cartList = self.cartList
            })
        },
        computed:{

        },
        methods:{
            checkRadio($event,$index){
                let self = this
                this.$store.state.carts.cartList[$index].selected = !this.$store.state.carts.cartList[$index].selected
                self.$store.dispatch('getSelectedData',  this.$store.state.carts.cartList)
                $event.stopPropagation()
            }
        }
    }
</script>

<style scoped>

</style>