<template>
  <page-lay-out>
    <header slot="header-search" style="width: 100%;" class="header-search">
        <div style="width:100%;position: relative;background:rgba(201, 21, 35, 0)">
             <router-link  to="/home"class="icon"/>
             <form class="search-container" action="#">
                <span class="search-img"></span>
                <input class="search-input" type="search" placeholder="点击搜索"/>
             </form>
            <span class="button login-btn">登录</span>
        </div>
    </header>
    <div slot="page-body" style="overflow-y: auto;width:100%">
      <div class="page-body clearfix carousel-container">
        <ul class="carousel-body" style="transition: left 1s ease-in-out;" :style="{left: (4*initLeft)+'px',width: 8* initLeft + 'px'}">
         <img v-for="img in imgs" :src="img.url"/>
        </ul>
        <div class="point_box">
         <span v-for="(img,$index) in imgs" :index="`${$index + 1}`" @click="buttonClick($index)" :class="{'active': currentIndex == $index}"></span>
        </div>
        <span class="prev-button" @click="(e)=>{topClick();e.stopPropagation()}">&lt;</span>
        <span class="next-button" @click="(e)=>{nexClick();e.stopPropagation()}">&gt;</span>
      </div>
      <div class="nav-container">
        <nav class="nav-body">
          <ul>
            <li v-for="nav in navList">
              <a href="#">
               <img :src="nav.img"/>
               <span v-text="nav.des"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="main">
        <section>
          <div class="main-top">
            <a>
              <img src="../assert/images/jd_skill.png"/>
              <strong>六点场</strong>
              <span>{{getTimeStamp(new Date())}}</span>
            </a>
          </div>
          <div class="main-product">
            <ul>
              <li v-for="list in product">
                <img :src="list.product_img_url"/>
               <p>
                 <i class="text">¥</i>
                 <span class="text">{{list.product_price}}</span>
               </p>
                <p>
                  <i class="old">¥</i>
                 <del class="text old">{{list.product_uprice}}</del>
                </p>
              </li>
            </ul>
          </div>
          <div class="main-suggest" style="width: 100%">
              <nav class="main-suggest-nav">为你推荐</nav>
              <ul class="main-suggest-product">
                 <li  v-for="img in productList">
                     <a href="">
                       <img v-lazy="img.product_img_url"/>
                         <div class="desc">
                           <p>{{img.product_name}}</p>
                           <p>
                             <i>¥</i>
                             <span class="text">{{img.product_price}}</span>
                            </p>
                         </div>
                     </a>
                     <loading v-show="$store.state.loading.isShow"></loading>
                 </li>
              </ul>
          </div>
        </section>
      </div>
    </div>
  </page-lay-out>
</template>

<script>
    import CarouselBase from '../components/Carousel.vue'
    import Loading from '../components/Loading.vue'
    import Utils from '../utils/utils.js'
    import Req from '../utils/req.js'
    import {mapState, mapGetter} from 'vuex'
    export default {
        name: "Home",
        mixins:[CarouselBase],
        components:{
            'loading': Loading
        },
        created(){
            let self = this
            Req.getHomeDatas()
                .then(resp=>{
                    console.log(resp)
                    self.$store.dispatch('getHomeDatas', resp)
                })
        },
        data(){
            return{
                initLeft:0,
                num:8,
                url: require('../assert/images/a-home.png'),
                imgs:[{
                    url: require('../assert/images/l1.jpg'),
                    show: true
                },{
                    url: require('../assert/images/l2.jpg'),
                    show: true
                },{
                    url: require('../assert/images/l3.jpg'),
                    show: true
                },{
                    url: require('../assert/images/l4.jpg'),
                    show: true
                },{
                    url: require('../assert/images/l5.jpg'),
                    show: true
                },{
                    url: require('../assert/images/l6.jpg'),
                    show: true
                },{
                    url: require('../assert/images/l7.jpg'),
                    show: true
                },{
                    url: require('../assert/images/l8.jpg'),
                    show: true
                }],
                navList:[{
                    img: require('../assert/images/nav0.png'),
                    des: '京东超市'
                },{
                    img: require('../assert/images/nav1.png'),
                    des: '全球购'
                },{
                    img: require('../assert/images/nav2.png'),
                    des: '服装城'
                },{
                    img: require('../assert/images/nav3.png'),
                    des: '京东生鲜'
                },{
                    img: require('../assert/images/nav4.png'),
                    des: '京东到家'
                },{
                    img: require('../assert/images/nav5.png'),
                    des: '充值中心'
                },{
                    img: require('../assert/images/nav6.png'),
                    des: '惠赚钱'
                },{
                    img: require('../assert/images/nav7.png'),
                    des: '领券'
                },{
                    img: require('../assert/images/nav8.png'),
                    des: '物流查询'
                },{
                    img: require('../assert/images/nav9.png'),
                    des: '我的关注'
                }],
            }
        },
        mounted(){
            let self = this
            self.initLeft = document.documentElement.clientWidth
            self.carouselElement = document.querySelector('.carousel-body')
            self.carouselContainer = document.querySelector('.carousel-container')
        },
        computed:{
            product: function(){
            return this.productList.filter((item) => item.product_id<=6)
            },
            index(){
                let element = document.querySelector('.point_box')
                element.setAttribute('index');
            },
            ...mapState({productList: state => state.home.homeData}),
        },
        methods:{
           ...Utils,
            setErrorHandle(){
               let self = this
               self.src = require('../assert/images/a-home.png');
            }
        }
    }
</script>

<style scoped>
.point_box {
    position: absolute;
    height: 2rem;
    bottom: 2rem;
    width: 100%;
    justify-content: center;
    display: flex;
}
.point_box span{
    width:1rem;
    height: 1rem;
    line-height: 100%;
    border: 1px solid #000;
    display:inline-block;
    border-radius: 100%;
    margin-right: 0.25rem;
    background: rgba(0,0,0,0.5);
}
.active{
    background: orangered !important;
}
</style>