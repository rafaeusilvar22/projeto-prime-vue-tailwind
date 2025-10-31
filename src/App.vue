<template>
  <router-view />
</template>

<script setup lang="ts">
import { useDarkMode } from './composables/useDarkMode'
const { isDark, toggleTheme } = useDarkMode()
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}
</style>
