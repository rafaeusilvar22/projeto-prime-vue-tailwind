<template>
  <div class="flex flex-col gap-2">
    <h1 class="text-3xl font-bold">Configurações do usuário</h1>
    <Button label="Configurações" class="w-fit" icon="pi pi-check" @click="goToSettings" />
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useDevice } from '../composables/useDevice'

const router = useRouter()
const { isMobile } = useDevice()

const goToSettings = () => {
  if (isMobile.value) {
    router.push({ path: 'settings' })
  } else {
    router.push({ name: 'privacidade' })
  }
}
</script>
