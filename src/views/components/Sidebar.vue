<template>
  <el-menu mode="vertical" theme="dark" :default-active="$route.path">
    <div v-for="item in routers" :key="item">
      <router-link v-if="!item.hidden&&item.noDropdown" :to="item.path">
        <el-menu-item :index="item.path">
          {{item.name}}
        </el-menu-item>
      </router-link>
      <el-submenu :index="item.name" v-if="!item.noDropdown&&!item.hidden">
        <div slot="title">
          {{item.name}}
        </div>
        <div v-for="child in item.children" v-if='!child.hidden' :key="child">
          <router-link class="menu-indent" :to="item.path+'/'+child.path">
            <el-menu-item :index="item.path+'/'+child.path">
              {{child.name}}
            </el-menu-item>
          </router-link>
        </div>
      </el-submenu>
    </div>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Sidebar',
  components: {},
  computed: {
    // 使用对象扩展操作符把 getter 混入到 computed 中
    ...mapGetters([
      'routers'
    ])
  }
}
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
}

.el-menu {
  min-height: 100%;
}

.hideSidebar .menu-indent {
  display: block;
  text-indent: 10px;
}
</style>