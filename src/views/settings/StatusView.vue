<template>
  <div class="w-full mx-auto p-4 md:p-6">
    <div class="mb-6">
      <h2 class="text-2xl font-semibold mb-2">Status da conta</h2>
      <p class="text-surface-600 dark:text-surface-400">
        Informações sobre o status e atividade da sua conta
      </p>
    </div>

    <div class="grid gap-4">
      <Card>
        <template #content>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div
                class="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center"
              >
                <i class="pi pi-check-circle text-green-600 dark:text-green-400 text-2xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-lg m-0">Conta Ativa</h3>
                <p class="text-surface-600 dark:text-surface-400 text-sm m-0">
                  Sua conta está funcionando normalmente
                </p>
              </div>
            </div>
            <Tag value="Verificada" severity="success" />
          </div>
        </template>
      </Card>
      <Card>
        <template #title>
          <span class="text-lg">Informações da conta</span>
        </template>
        <template #content>
          <div class="space-y-4">
            <div
              class="flex justify-between py-3 border-b border-surface-200 dark:border-surface-700"
            >
              <span class="text-surface-600 dark:text-surface-400">Email</span>
              <span class="font-medium">usuario@exemplo.com</span>
            </div>
            <div
              class="flex justify-between py-3 border-b border-surface-200 dark:border-surface-700"
            >
              <span class="text-surface-600 dark:text-surface-400">Membro desde</span>
              <span class="font-medium">15 de janeiro de 2024</span>
            </div>
            <div
              class="flex justify-between py-3 border-b border-surface-200 dark:border-surface-700"
            >
              <span class="text-surface-600 dark:text-surface-400">Último acesso</span>
              <span class="font-medium">Hoje às 14:32</span>
            </div>
          </div>
        </template>
      </Card>
      <Card>
        <template #title>
          <span class="text-lg">Estatísticas de uso</span>
        </template>
        <template #content>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="text-center p-4 bg-surface-50 dark:bg-surface-800 rounded-lg">
              <i class="pi pi-calendar text-3xl text-blue-500 mb-2"></i>
              <div class="text-2xl font-bold">127</div>
              <div class="text-sm text-surface-600 dark:text-surface-400">Dias ativos</div>
            </div>
            <div class="text-center p-4 bg-surface-50 dark:bg-surface-800 rounded-lg">
              <i class="pi pi-chart-line text-3xl text-green-500 mb-2"></i>
              <div class="text-2xl font-bold">342</div>
              <div class="text-sm text-surface-600 dark:text-surface-400">Ações realizadas</div>
            </div>
            <div class="text-center p-4 bg-surface-50 dark:bg-surface-800 rounded-lg">
              <i class="pi pi-clock text-3xl text-purple-500 mb-2"></i>
              <div class="text-2xl font-bold">48h</div>
              <div class="text-sm text-surface-600 dark:text-surface-400">Tempo de uso</div>
            </div>
          </div>
        </template>
      </Card>
      <Card>
        <template #title>
          <span class="text-lg">Segurança</span>
        </template>
        <template #content>
          <div class="space-y-3">
            <div
              class="flex items-center justify-between p-3 bg-surface-50 dark:bg-surface-800 rounded-lg"
            >
              <div class="flex items-center gap-3">
                <i class="pi pi-shield text-green-500 text-xl"></i>
                <span>Autenticação de dois fatores</span>
              </div>
              <Tag value="Ativada" severity="success" rounded />
            </div>
            <div
              class="flex items-center justify-between p-3 bg-surface-50 dark:bg-surface-800 rounded-lg"
            >
              <div class="flex items-center gap-3">
                <i class="pi pi-lock text-blue-500 text-xl"></i>
                <span>Senha forte</span>
              </div>
              <Tag value="Configurada" severity="success" rounded />
            </div>
            <div
              class="flex items-center justify-between p-3 bg-surface-50 dark:bg-surface-800 rounded-lg"
            >
              <div class="flex items-center gap-3">
                <i class="pi pi-mobile text-purple-500 text-xl"></i>
                <span>Dispositivos conectados</span>
              </div>
              <span class="font-semibold">3 dispositivos</span>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'StatusView',
})
</script>

<style scoped>
.space-y-4 > * + * {
  margin-top: 1rem;
}

.space-y-3 > * + * {
  margin-top: 0.75rem;
}
</style>
