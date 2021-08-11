<template>
  <div class="app-header">
    <logo />
    <div class="right-menu">
      <el-dropdown>
        <span class="el-dropdown-link">
          嘻嘻嘻<i class="el-icon-arrow-down el-icon--right" />
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
import { defineComponent } from 'vue'
import Logo from './logo.vue'

export default defineComponent({
  components: {
    Logo,
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
