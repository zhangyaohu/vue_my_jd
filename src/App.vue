<template>
    <div style="width:100%;height:100%;" id="app">
      <router-view></router-view>
      <menu-list></menu-list>
    </div>
</template>

<script>
    import Vue from 'vue'
    import PageLayOut from './components/PageLayOut.vue'
    Vue.component('page-lay-out',PageLayOut)
    import MenuList from './components/Menu.vue'
    export default {
        name: "app",
        components:{
            'menu-list': MenuList,
        }
    }
</script>

<style scoped>

</style>