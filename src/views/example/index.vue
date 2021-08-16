<template>
  <h3>Example页</h3>
  <el-button type="primary" @click="handleCount">Vuex++{{ count }}</el-button>

  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="date"
      label="日期"
      width="180"
    />
    <el-table-column
      prop="name"
      label="姓名"
      width="180"
    />
    <el-table-column
      prop="address"
      label="地址"
    />
    <el-table-column label="操作">
      <template #default="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index)"
        >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <pagination
    v-model:pageNumber="pageNumber"
    v-model:pageSize="pageSize"
    background
    :total="totalCount"
    @pagination="handlePagination"
  />
</template>

<script lang="ts">
import { defineComponent, computed, ref, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import Pagination from 'comps/Pagination.vue'

export default defineComponent({
  components: {
    Pagination,
  },
  setup() {
    const data = [{
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
      address: '上海市普陀区金沙江路 1516 弄'
    }]

    const tableData = ref(data)
    const handleDelete = (idx: number) => {
      data.splice(idx, 1)
      tableData.value = [...data]
    }

    const totalCount = ref(200)
    const pagination = reactive({
      pageNumber: 1,
      pageSize: 10,
    })
    const handlePagination = () => {
      console.log(pagination)
    }

    const store = useStore()
    const count = computed(() => store.state.count)

    const handleCount = () => {
      store.commit('increment')
    }
    return {
      ...toRefs(pagination),
      tableData,
      handleDelete,
      totalCount,
      handlePagination,
      count,
      handleCount
    }
  }
})
</script>

