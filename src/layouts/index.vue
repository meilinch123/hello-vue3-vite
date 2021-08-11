<template>
  <div class="app-wrapper">
    <div class="headbar-wrapper fixed-header">
      <headbar />
    </div>
    <div class="main-container">
      <sidebar class="sidebar-container" />
      <div class="app-main">
        <router-view :key="$route.path" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import Headbar from './header.vue'
  import Sidebar from './sidebar.vue'

  export default defineComponent({
    components: {
      Headbar,
      Sidebar,
    }
  })
</script>

<style lang="scss" scoped>
@import "../styles/mixin.scss";

.app-wrapper {
  @include clearfix;

  position: relative;
  width: 100%;
  height: 100%;
}
.sidebar-container {
  position: fixed;
  top: $headbarHeight;
  left: 0;
  z-index: 1001;
  width: $sideBarWidth !important;
  height: calc(100vh - #{$headbarHeight});
  overflow: hidden;
  font-size: 0;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
  transition: width .28s;
  :deep(.scrollbar-wrapper) {
    overflow-x: hidden !important;
  }
  :deep(.is-horizontal) {
    display: none;
  }
}
.main-container {
  position: relative;
  min-height: calc(100vh - #{$headbarHeight});
}
.headbar-wrapper {
  position: relative;
  height: $headbarHeight;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
  &.fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9;
  }
}
.app-main {
  position: relative;
  min-height: calc(100vh - #{$headbarHeight + 40px});
  padding: 20px;
  margin-left: $sideBarWidth;
  overflow: hidden;
  transition: margin-left .28s;
}
.fixed-header + .main-container {
  padding-top: $headbarHeight;
  overflow: auto;
}
</style>
