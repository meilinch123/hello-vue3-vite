<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#409eff"
      :default-active="activeName"
    >
      <sider-item :menu-list="menus" />
    </el-menu>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import SiderItem, { MenuProp } from './siderItem.vue'
  import { routes } from '../router'

  export default defineComponent({
    components: {
      SiderItem,
    },
    setup() {
      // 过滤非菜单栏
      const filterMenus = (arr: Record<string, any>[]) => {
        return arr.filter(item => !item.meta?.isNotMenu).map(item => {
          if (item.children) {
            item.children = filterMenus(item.children)
          }
          return item
        })
      }
      const menus = filterMenus(routes) as MenuProp[]

      const route = useRoute()
      const activeName = computed(() => {
        const { name, meta } = route
        if (!name) return ''
        if (meta?.isNotMenu) {
          return meta.parentName
        }
        return name
      })

      return { menus, activeName }
    }
  })
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo {
  height: 100%;
}
</style>
