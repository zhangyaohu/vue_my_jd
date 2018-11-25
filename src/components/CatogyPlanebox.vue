<template>
    <div style="width:100%;height:100%;overflow: hidden">
        <div></div>
        <div></div>
        <ul class="phone_detail_container" v-if="$store.state.carts.cartByPlaneBox.length>0">
            <li v-for="list in $store.state.carts.cartByPlaneBox" class="phone_detail">
                <a>
                    <img :src="list.product_img_url" class="img"/>
                    <div class="desc" :title="list.product_name">{{list.product_name}}</div>
                </a>
            </li>
        </ul>
        <ul class="phone_detail_container" v-else>
            <li class="no-data">
                暂无数据
            </li>
        </ul>
    </div>
</template>

<script>
    import Req from '../utils/req.js'
    export default {
        name: "CatogyPlanebox",
        created(){
            let self = this
            Req.getCartPlaneBox()
                .then((resp)=>{
                    self.$store.dispatch('getCartPlaneBox', resp.data)
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
        height: 100%;
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
    .no-data{
        font-size: 2rem;
        text-align: center;
        background: #fff;
        color: #f15353;
        width: 100%;
        height:5rem;
        line-height: 5rem;
        justify-content: center;
        margin: 7rem 4rem 0rem;
        border-radius: 50%;
        box-shadow:  0.1rem -0.1rem 0.1rem 0.1rem #cccccc, .1rem 0.1rem 0.1rem #ccc;
        animation:no-data 5s linear infinite;
    }
    @keyframes no-data{
        25%{transform: rotate(90deg);}
        50%{transform: rotate(180deg);}
        75%{transform: rotate(270deg);}
        100%{transform: rotate(360deg);}
    }
</style>