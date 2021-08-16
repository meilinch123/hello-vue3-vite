<template>
  <div>
    <template v-for="item in menuList">
      <el-submenu
        v-if="item.children && item.children.length"
        :key="item.path"
        :index="item.name"
      >
        <template #title>
          <i :class="item.meta.icon" />
          <span>{{ item.meta.title }}</span>
        </template>
        <sider-item :menu-list="item.children" />
      </el-submenu>
      <el-menu-item
        v-else
        :key="item.name"
        :index="item.name"
        @click="trigger(item)"
      >
        <i :class="item.meta.icon" />
        <template #title>{{ item.meta.title }}</template>
      </el-menu-item>
    </template>
  </div>
</template>
<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import { useRouter, useRoute } from 'vue-router'

  export interface MenuProp {
    name: string;
    path: string;
    meta: {
      title: string;
      icon: string;
    };
    children?:[];
  }

  export default defineComponent({
    name: 'SiderItem',
    props: {
      menuList: {
        type: [] as PropType<Array<MenuProp>>,
        default: () => []
      }
    },
    setup() {
      const router = useRouter()
      const route = useRoute()
      const trigger = ({ name }: {name: string}) => {
        if (route.name !== name) {
          router.push({ name })
        }
      }
      return { trigger }
    }
  })
</script>
