<template>
    <div style="width:100%;height:100%;overflow: hidden">
        <div></div>
        <div></div>
        <ul class="phone_detail_container">
            <li v-for="list in $store.state.carts.cartsByRemoveBox" class="phone_detail">
                <a>
                    <img :src="list.product_img_url" class="img"/>
                    <div class="desc" :title="list.product_name">{{list.product_name}}</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import Req from '../utils/req.js'
    export default {
        name: "CatogyMoveBox",
        created(){
            let self = this
            Req.gertRemoveBox()
                .then((resp)=>{
                    self.$store.dispatch('getRemoveBox',resp.data)
                })
            }
    }
</script>

<style scoped>
    .phone_detail_container{
        width: calc(100%);
        display: flex;
        flex-wrap: wrap;
        background-color: #fff;
        margin-left: 0.1rem;
    }
    .phone_detail{
        width:calc((100% - 9rem) / 3);
        flex-flow: column;
        flex: 1 1 auto;
        list-style: none;
        margin: 1.5rem;
        height: 10rem;
        background-color: #fff;
    }
    .phone_detail a{
        width:100%;
    }
    .img{
        width:calc(100%);
        height: 9rem;
    }
    .desc{
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 0.8rem;
    }
</style>