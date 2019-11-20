<template>
  <div class="page-layout">
    <nav>
      <el-menu class="nav-menu" :default-active="onRoutes" router mode="horizontal">
        <el-menu-item index="userPage">用户管理</el-menu-item>
        <el-menu-item class="right-nav" @click="logout">退出登录</el-menu-item>
        <el-menu-item class="right-nav">{{$store.state.user.username}}</el-menu-item>
      </el-menu>
    </nav>
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
export default {
  name: 'Layout',
  data () {
    return {
      defaultActive: 'dataPage'
    }
  },
  computed: {
    onRoutes () {
      // 根据路由设置导航的选中
      let obj = {
        '/': 'dataPage',
        '/dataPage': 'dataPage',
        '/userPage': 'userPage'
      }
      return obj[this.$route.path]
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('LOG_OUT')
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="scss">
.page-layout {
  nav {
    position: relative;
    height: 61px;
    .nav-menu {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1;
    }
  }
  .main-content {
    padding: 20px;
    box-sizing: border-box;
  }
  .right-nav {
    float: right;
  }
}
</style>
