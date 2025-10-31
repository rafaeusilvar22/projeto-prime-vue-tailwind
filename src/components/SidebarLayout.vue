<template>
  <div
    class="w-full min-w-70 md:w-70 min-h-full flex flex-col justify-between border-r border-gray-300 p-1"
  >
    <Menu :model="topOptions" class="border-none! bg-transparent!">
      <template #item="{ item, props }">
        <router-link
          v-if="item.route"
          :to="item.route"
          custom
          v-slot="{ href, navigate, isActive }"
        >
          <a
            v-ripple
            :href="href"
            v-bind="props.action"
            @click="navigate"
            :class="[isActive ? 'bg-white/10 text-white' : 'text-gray-400']"
            class="rounded-sm"
          >
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
      </template>
    </Menu>

    <div>
      <Menu :model="bottomOptions" class="border-none! bg-transparent!">
        <template #item="{ item, props }">
          <a v-ripple v-bind="props.action" class="rounded-sm" @click="item.event">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </template>
      </Menu>
    </div>
  </div>
  <logout-dialog v-model="isShowLogoutDialog" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LogoutDialog from './Dialog/LogoutDialog.vue'

const isShowLogoutDialog = ref(false)

const topOptions = ref([
  {
    label: 'Privacidade',
    icon: 'pi pi-lock',
    route: '/settings/privacidade',
  },
  {
    label: 'Status da conta',
    icon: 'pi pi-user',
    route: '/settings/status',
  },
  {
    label: 'Conta',
    icon: 'pi pi-cog',
    route: '/settings/conta',
  },
  {
    label: 'Ajuda',
    icon: 'pi pi-question-circle',
    route: '/settings/ajuda',
  },
])

const bottomOptions = ref([
  {
    label: 'Sair',
    icon: 'pi pi-sign-out',
    event: handleLogout,
  },
])

function handleLogout() {
  isShowLogoutDialog.value = true
}
</script>
