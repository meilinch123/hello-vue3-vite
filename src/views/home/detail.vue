<template>
  <el-page-header
    icon="el-icon-arrow-left"
    content="详情页面"
    @back="goBack"
  />
  <h3>Detail页</h3>
</template>
<!--
<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({

  setup() {
    const router = useRouter()
    const goBack = () => {
      router.go(-1)
    }

    return { goBack }
  }
})
</script>
-->
<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const goBack = () => {
    router.go(-1)
  }
</script>
