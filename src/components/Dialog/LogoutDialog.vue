<template>
  <Dialog
    modal
    v-model:visible="visible"
    :draggable="false"
    :style="{ width: '28rem', margin: '20px' }"
    :pt="{
      header: { class: 'pb-4' },
      content: { class: 'pt-0' },
    }"
  >
    <template #header>
      <div class="flex items-center gap-3">
        <div
          class="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/20"
        >
          <i class="pi pi-sign-out text-red-600 dark:text-red-400 text-xl"></i>
        </div>
        <div>
          <h3 class="text-xl font-semibold m-0">Sair da conta</h3>
        </div>
      </div>
    </template>

    <div class="py-4">
      <p class="text-surface-600 dark:text-surface-400 leading-relaxed m-0">
        Você será desconectado e precisará fazer login novamente para acessar sua conta.
      </p>
    </div>

    <template #footer>
      <div class="flex gap-2 justify-end">
        <Button label="Cancelar" severity="secondary" text @click="visible = false" class="px-4" />
        <Button
          class="px-4"
          label="Sair"
          severity="danger"
          icon="pi pi-sign-out"
          @click="handleLogout"
          :loading="isLoading"
        />
      </div>
    </template>
  </Dialog>
  <Toast position="bottom-right" />
</template>

<script setup>
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'

const visible = defineModel({
  default: false,
})

const toast = useToast()
const isLoading = ref(false)

const emit = defineEmits(['confirm'])

const handleLogout = async () => {
  isLoading.value = true

  try {
    emit('confirm')

    toast.add({
      severity: 'success',
      summary: 'Logout realizado',
      detail: 'Você foi desconectado com sucesso',
      life: 3000,
    })

    visible.value = false
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'Erro ao sair',
      detail: 'Ocorreu um erro ao tentar desconectar. Tente novamente.',
      life: 3000,
    })
  } finally {
    isLoading.value = false
  }
}
</script>
