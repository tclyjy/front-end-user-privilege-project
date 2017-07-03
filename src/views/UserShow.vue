<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="name" label="用户名" width="180">
    </el-table-column>
    <el-table-column prop="registerTime" label="注册时间" width="300">
    </el-table-column>
    <el-table-column prop="loginTime" label="最后登入时间" width="300">
    </el-table-column>
    <el-table-column prop="role" label="角色">
    </el-table-column>
  </el-table>
</template>
<script>
import getUserList from '../api/getUserList.js'
export default {
  data() {
    return {
      tableData: []
    }
  },
  created() {
    getUserList().then(res => {
      console.log(res)
      for (let i = 0; i < res.data.length; i++) {
        var data = {}
        data.name = res.data[i].name;
        data.registerTime = res.data[i].registerTime;
        data.loginTime = res.data[i].loginTime;
        data.role = res.data[i].role;
        this.tableData.push(data);
      }
    })
  }
}
</script>
<style lang="less">

</style>
