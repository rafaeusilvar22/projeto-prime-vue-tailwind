<template>
  <main class="p-1 w-full min-h-full">
    <Button
      rounded
      variant="text"
      label="Voltar"
      severity="secondary"
      aria-label="Voltar"
      icon="pi pi-arrow-left"
      class="block md:hidden! m-1"
      @click="$router.push('/settings')"
    />
    <Menu :model="privacyItems" class="border-none! bg-transparent!">
      <template #item="{ item, props }">
        <div
          v-ripple
          v-bind="props.action"
          class="menu-item-content text-gray-300 justify-between p-3! flex items-center"
        >
          <div class="flex items-center gap-3">
            <i :class="item.icon" style="font-size: 1.3rem"></i>
            <span>{{ item.label }}</span>
          </div>

          <div class="flex items-center gap-2">
            <div v-if="item.element === 'toggle'">
              <ToggleSwitch v-model="checked" />
            </div>

            <span class="item-value opacity-50" v-if="item.value">{{ item.value }}</span>
            <i v-if="!item.element" class="pi pi-angle-right opacity-50!"></i>
          </div>
        </div>
      </template>
    </Menu>
    <div class="h-[1.3px] bg-gray-300 opacity-50 m-4!" />

    <div class="m-4! flex flex-col gap-1">
      <span class="font-medium!">Outras configurações de privacidade</span>
      <p class="text-xs opacity-50">
        Algumas configurações como as de restrição, se aplicam ao Threads e ao Instagram, e podem
        ser gerenciadas no Instagram
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineOptions({ name: 'PrivacyView' })

const privacyItems = ref([
  { label: 'Perfil privado', icon: 'pi pi-lock', element: 'toggle' },
  { label: 'Marcações e menções', icon: 'pi pi-at' },
  { label: 'Status online', icon: 'pi pi-circle', value: 'Ninguém' },
  { label: 'Perfis restritos', icon: 'pi pi-ban' },
  { label: 'Perfis bloqueados', icon: 'pi pi-times-circle' },
  { label: 'Palavras ocultas', icon: 'pi pi-eye-slash' },
])

const checked = ref(false)
</script>
