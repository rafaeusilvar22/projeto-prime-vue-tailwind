<template>
  <div class="flex flex-col min-h-screen w-full">
    <header class="flex items-center justify-between p-4 bg-gray-900 text-white">
      <h1 class="text-lg font-semibold">Meu App</h1>
      <ToggleSwitch v-model="isDark">
        <template #handle="{ checked }">
          <i :class="['!text-xs pi', checked ? 'pi-moon' : 'pi-sun']" />
        </template>
      </ToggleSwitch>
    </header>

    <div class="flex flex-1 w-full">
      <main class="flex-1 w-full p-6 overflow-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDarkMode } from '../composables/useDarkMode'

const { isDark } = useDarkMode()
</script>
