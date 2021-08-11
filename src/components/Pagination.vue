<template>
  <el-pagination
    v-model:current-page="currentPage"
    v-model:page-size="pageLimit"
    :total="total"
    :page-sizes="pageSizes"
    :layout="layout"
    v-bind="$attrs"
    @size-change="handleSizeChange"
    @current-change="handleChange"
  />
</template>
<script lang="ts">
  import { defineComponent, computed } from 'vue'

  export default defineComponent({
    name: 'Pagination',
    props: {
      pageNumber: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 10
      },
      total: {
        type: Number,
        default: 0
      },
      pageSizes: {
        type: Array,
        default: () => [10, 20, 30, 50, 100]
      },
      layout: {
        type: String,
        default: 'total, prev, pager, next, sizes'
      },
    },
    emits: ['update:pageNumber', 'update:pageSize', 'pagination'],
    setup(props, { emit }) {
      const currentPage = computed({
        get: () => props.pageNumber,
        set: val => {
          emit('update:pageNumber', val)
        }
      })

      const pageLimit = computed({
        get: () => props.pageSize,
        set: val => {
          emit('update:pageSize', val)
        }
      })

      const handleChange = () => {
        emit('pagination')
      }

      const handleSizeChange = () => {
        currentPage.value = 1
        emit('pagination')
      }

      return {
        currentPage,
        pageLimit,
        handleChange,
        handleSizeChange,
      }
    }
  })
</script>
