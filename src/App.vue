<template>
  <el-config-provider :locale="locale">
    <frame />
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import Frame from './layouts/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    [ElConfigProvider.name]: ElConfigProvider,
    Frame,
  },
  setup() {
    const locale = ref(zhCn)
    return { locale }
  }
})
</script>
