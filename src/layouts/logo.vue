<template>
  <div class="app-logo">
    <span class="app-logo-icon" />
    <span class="app-logo-text">后台工作端</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Logo',
})
</script>

<style lang='scss' scoped>
.app-logo {
  height: $headbarHeight;
  padding: 0 24px;
  overflow: hidden;
  line-height: $headbarHeight;
  white-space: nowrap;
  transition: padding .3s;
  .app-logo-text {
    font-size: 20px;
    color: $menuText;
    vertical-align: middle;
  }
  .app-logo-icon {
    display: inline-block;
    width: 26px;
    height: 26px;
    margin-right: 10px;
    vertical-align: middle;
    background: url("@/assets/logo.png");
    background-size: contain;
    transition: .3s;
  }
}
</style>
