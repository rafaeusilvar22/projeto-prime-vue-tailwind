<template>
  <div id="app" class="p-2 h-screen overflow-hidden w-full">
    <div class="flex h-full rounded-2xl border overflow-hidden border-gray-300 w-full">
      <SidebarLayout v-if="showSidebar" />

      <main class="flex-1 overflow-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import SidebarLayout from '../components/SidebarLayout.vue'
import { useDevice } from '../composables/useDevice'
import { useRoute } from 'vue-router'

const { isMobile } = useDevice()
const route = useRoute()

const showSidebar = computed(() => {
  if (!isMobile.value) return true

  return route.path === '/settings'
})
</script>
