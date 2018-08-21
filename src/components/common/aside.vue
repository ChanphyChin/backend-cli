<template>
  <div class="sidebar-container  sidebar-nav" >
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo sidebar-menu"  router>
      <el-menu-item index="/demo"  :class="{'is-active': activeted('/demo')}">
        <i class="iconfont icon-yhgl"></i> <span class="menu">demo1一级菜单</span>
      </el-menu-item>
      <el-menu-item index="/demo2" :class="{'is-active': activeted('/demo2')}">
        <i class="iconfont icon-yfx"></i> <span class="menu">demo2一级菜单</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'index',
   data() {
      return{
      }
    },
    methods:{
      activeted(path){
        return this.$route.fullPath.includes(path)
      }
    }
}
</script>

<style scoped>

</style>
