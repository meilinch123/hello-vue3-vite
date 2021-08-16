<template>
  <div class="app-header">
    <logo />
    <div class="right-menu">
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ name }}<i class="el-icon-arrow-down el-icon--right" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Logo from './logo.vue'
import request from '../utils/request'

export default defineComponent({
  components: {
    Logo,
  },

  setup() {
    const name = ref(null)
    request.get('/api/getUser').then((res: any) => {
      name.value = res.name
    })
    return { name }
  }
})
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  height: 100%;
  width: 100%;
  -webkit-user-select: none;
  justify-content: space-between;
  align-items: center;
  .right-menu {
    margin-right: 20px;
  }
}
</style>
