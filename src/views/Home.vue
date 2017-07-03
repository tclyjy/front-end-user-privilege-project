<template>
  <div class="wrapper" :class="{hideSidebar:!sidebar.opened}">
    <div class="sidebar-wrapper">
      <Sidebar class="sidebar-container"></Sidebar>
    </div>
    <div class="main-container">
      <section class="app-main" style="min-height: 100%">
        <el-menu class="navbar" mode="horizontal">
          <Hamburger class="hamburger-container" :isActive="sidebar.opened">
          </hamburger>
          <el-dropdown class="avatar-container" trigger="click">
            <div class="avatar-wrapper">
              <img class="user-avatar" src="../../static/IMG_2581.jpg">
              <i class="el-icon-caret-bottom"></i>
            </div>
            <el-dropdown-menu class="user-dropdown" slot="dropdown">
              <router-link class='inlineBlock' to="/">
                <el-dropdown-item>
                  首页
                </el-dropdown-item>
              </router-link>
              <a target='_blank' href="https://github.com/tclyjy/front-end-user-privilege-project">
                <el-dropdown-item>
                  项目地址
                </el-dropdown-item>
              </a>
              <el-dropdown-item divided>
                <span @click="logout" style="display:block;">退出登录</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-menu>
        <transition name="fade" mode="out-in">
          <router-view :key="key"></router-view>
        </transition>
      </section>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar';
import Hamburger from './components/Hamburger'
export default {
  name: 'Home',
  components: { Sidebar, Hamburger },
  computed: {
    sidebar() {
      var sidebar = {}
      sidebar.opened = true
      return sidebar
    },
    key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('LogOut', this.registerFrom).then((res) => {
        location.reload();// 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
</script>
<style lang="less">
.wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  &.hideSidebar {
    .sidebar-wrapper {
      transform: translate(-140px, 0);
      .sidebar-container {
        transform: translate(132px, 0);
      }
      &:hover {
        transform: translate(0, 0);
        .sidebar-container {
          transform: translate(0, 0);
        }
      }
    }
    .main-container {
      margin-left: 40px;
    }
  }
  .sidebar-wrapper {
    width: 180px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    transition: all .28s ease-out;
  }
  .sidebar-container {
    transition: all .28s ease-out;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -17px;
    overflow-y: scroll;
  }
  .main-container {
    min-height: 100%;
    transition: all .28s ease-out;
    margin-left: 180px;
  }
}

.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .errLog-container {
    display: inline-block;
    position: absolute;
    right: 150px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>

