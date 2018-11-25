<template>
    <footer class="footer-menu">
      <li v-for="menu in menuList" @click="openMenu(menu)" class="menu-body" :class="{'high-light': currentPath == menu.path}">
          <a class="text">
              <div class="icon-container">
                  <img :src="menu.icon" class="icon"/>
              </div>
          </a>
      </li>
    </footer>
</template>

<script>
    import MenuList from '../components/menu.js'
    export default {
        name: "Menu",
        data(){
            return {
                menuList: MenuList.menuList,
                currentPath: '/home'
            }
        },
        created(){
            let self = this
            self.currentPath = location.hash.split('#')[1]
        },
        methods:{
            openMenu(menu){
              const self = this
              if(menu.path){
                self.$router.push({path:menu.path});
                  self.currentPath = menu.path
              }
            }
        }
    }
</script>

<style scoped>
    .high-light{
        background-color: chocolate;
    }
</style>