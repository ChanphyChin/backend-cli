<template>
    <div class="submenu-container" >
      <div class="submenu-aside dh200">
        <div class="submenu-hd"><span>demo模块</span></div>
        <el-menu :default-active="$route.path" class="submenu" router>
          <el-menu-item index="/demo2/test1" :class="{'is-active':isActived('/demo2/test1')}">test1</el-menu-item>
        </el-menu>
      </div>

      <div class="content-wrapper">
        <router-view></router-view>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'index',
    data() {
      return {
      }
    },
    methods: {
      isActived(path){
        let isActived = this.$route.fullPath.indexOf(path) != -1 ;
        return isActived;
      }
    },
  }
  </script>

  <style scoped>

  </style>
