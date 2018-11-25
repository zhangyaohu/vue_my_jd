<template>
    <div style="width: 100%;height: 100%;">
        <div style="width: 6rem;border-right: 1px solid #ccc;">
              <div v-for="(menu,$index) in MenuList.cagoryMenuList" style="width: 6rem;display:inline-block;" class="catgory-menu" @click="clickMenu(menu,$index)" :class="{'active': currentId===$index}">
                <router-link :to="`/${menu.path}`" class="catgory-path">
                 <span class="text">{{menu.name}}</span>
                </router-link>
              </div>
        </div>
        <div class="catogry-container" v-show="currTab === 'catgory/1'" style="width: calc(100% - 6rem);">
           <catogy-phone></catogy-phone>
        </div>
        <div class="catogry-container" v-show="currTab === 'catgory/2'" >
            <catogy-movebox></catogy-movebox>
        </div>
        <div class="catogry-container" v-show="currTab === 'catgory/3'" >
            <catogy-backpack></catogy-backpack>
        </div>
        <div class="catogry-container" v-show="currTab === 'catgory/4'" >
            <catogy-hoildaybox></catogy-hoildaybox>
        </div>
        <div class="catogry-container" v-show="currTab === 'catgory/5'" >
            <catogy-planebox></catogy-planebox>
        </div>
        <div class="catogry-container" v-show="currTab === 'catgory/6'">
            <catgory-pushbox></catgory-pushbox>
        </div>
        <div class="catogry-container" v-show="currTab === 'catgory/7'">
            <catgory-candy></catgory-candy>
        </div>
        <div class="catogry-container" v-show="currTab === 'catgory/8'">
            <catgory-bread></catgory-bread>
        </div>
    </div>
</template>

<script>
    import MenuList from '../components/menu.js'
    import CatogyPhone from '../components/CatogyPhone.vue'
    import CatogyMoveBox from '../components/CatogyMoveBox.vue'
    import CatogyBackpack from '../components/CatogyBackpack.vue'
    import CatogyHoildaybox from '../components/CatogyHoildaybox.vue'
    import CatogyPlanebox from '../components/CatogyPlanebox.vue'
    import CatoryPushBox from '../components/CatogyPushBox.vue'
    import CartCandy from '../components/CatogyCandy.vue'
    import CartBread from '../components/CatogyBred.vue'
    export default {
        name: "Catgory",
        components:{
          'catogy-phone': CatogyPhone,
          'catogy-movebox': CatogyMoveBox,
          'catogy-backpack': CatogyBackpack,
          'catogy-hoildaybox': CatogyHoildaybox,
          'catogy-planebox': CatogyPlanebox,
          'catgory-pushbox': CatoryPushBox,
          'catgory-candy': CartCandy,
          'catgory-bread': CartBread
        },
        data(){
            return {
                MenuList: MenuList,
                isActive: false,
                currentId: 0,
                currTab: 'catgory/1'
            }
        },
        methods:{
         clickMenu(menu,$index){
             const self = this
              self.currentId = parseInt(menu.path.split('/')[1]) - 1;
              self.currTab = menu.path
          }
        }
    }
</script>

<style scoped>
    .active{
        background-color: #369;
        width: 100%;
        height: 100%;
    }
    .text{
        color: #fff;
    }

    .catogry-container{
        width: calc(100% - 6rem);
    }
</style>