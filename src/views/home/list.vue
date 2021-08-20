<template>
  <h3>Home页</h3>
  <img alt="Vue logo" src="@/assets/logo.png">
  <hello-world msg="Hello Vue 3 + TypeScript + Vite" />
  <router-link to="/home/detail">Go to Detail</router-link>
  <p>Vuex-count: {{ count }}</p>
</template>

<!--
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import HelloWorld from 'comps/HelloWorld.vue'

export default defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    const store = useStore()
    const count = computed(() => store.state.count)
    return { count }
  }
})
</script>
-->
<script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import HelloWorld from 'comps/HelloWorld.vue'

  const store = useStore()
  const count = computed(() => store.state.count)
</script>
