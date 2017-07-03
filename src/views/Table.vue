<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template scope="scope">
          <el-button type="text" size="small" v-if="privileges.indexOf('CONTENT_READ')>=0">查看</el-button>
          <el-button type="text" size="small" v-if="privileges.indexOf('CONTENT_MOD')>=0">编辑</el-button>
          <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small" v-if="privileges.indexOf('CONTENT_DELETE')>=0">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1316 弄'
      }, {
        date: '2016-06-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1528 弄'
      }, {
        date: '2016-06-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1527 弄'
      }, {
        date: '2016-06-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1539 弄'
      }, {
        date: '2016-06-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1526 弄'
      }]
    }
  },
  computed: {
    // 使用对象扩展操作符把 getter 混入到 computed 中
    ...mapGetters([
      'privileges'
    ])
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  }
}
</script>
<style lang="less">

</style>
