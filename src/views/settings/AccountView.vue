<template>
  <div class="w-full mx-auto p-4 md:p-6">
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
    <div class="mb-6">
      <h2 class="text-2xl font-semibold mb-2">Minha conta</h2>
      <p class="text-surface-600 dark:text-surface-400">
        Gerencie suas informações pessoais e preferências
      </p>
    </div>

    <div v-if="isLoadingUser || isLoadingSettings" class="flex justify-center items-center py-12">
      <ProgressSpinner />
    </div>

    <Message v-else-if="userError || settingsError" severity="error" :closable="false" class="mb-4">
      Erro ao carregar dados. Tente novamente mais tarde.
    </Message>

    <div v-else class="grid gap-4">
      <Card>
        <template #title>
          <div class="flex items-center justify-between">
            <span class="text-lg">Informações pessoais</span>
            <Button
              label="Editar"
              icon="pi pi-pencil"
              severity="secondary"
              text
              size="small"
              @click="isEditing = !isEditing"
            />
          </div>
        </template>
        <template #content>
          <div class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="text-sm text-surface-600 dark:text-surface-400 block mb-2"
                  >Nome completo</label
                >
                <InputText v-model="formData.name" :disabled="!isEditing" class="w-full" />
              </div>
              <div>
                <label class="text-sm text-surface-600 dark:text-surface-400 block mb-2"
                  >Nome de usuário</label
                >
                <InputText v-model="formData.username" :disabled="!isEditing" class="w-full" />
              </div>
            </div>

            <div>
              <label class="text-sm text-surface-600 dark:text-surface-400 block mb-2">Email</label>
              <div class="flex gap-2">
                <InputText v-model="formData.email" :disabled="!isEditing" class="flex-1" />
                <Tag value="Verificado" severity="success" class="self-center" />
              </div>
            </div>

            <div>
              <label class="text-sm text-surface-600 dark:text-surface-400 block mb-2"
                >Telefone</label
              >
              <InputText v-model="formData.phone" :disabled="!isEditing" class="w-full" />
            </div>

            <div v-if="isEditing" class="flex gap-2 justify-end pt-2">
              <Button label="Cancelar" severity="secondary" text @click="cancelEdit" />
              <Button
                label="Salvar"
                icon="pi pi-check"
                :loading="isUpdating"
                @click="saveChanges"
              />
            </div>
          </div>
        </template>
      </Card>
      <Card>
        <template #title>
          <span class="text-lg">Foto de perfil</span>
        </template>
        <template #content>
          <div class="flex items-center gap-4">
            <Avatar
              :label="user?.name?.charAt(0) || 'U'"
              size="xlarge"
              shape="circle"
              class="bg-primary text-white"
            />
            <div class="flex-1">
              <p class="text-sm text-surface-600 dark:text-surface-400 mb-2">
                JPG, PNG ou GIF. Tamanho máximo de 2MB.
              </p>
              <div class="flex gap-2">
                <Button
                  label="Alterar foto"
                  icon="pi pi-upload"
                  size="small"
                  severity="secondary"
                />
                <Button label="Remover" icon="pi pi-trash" size="small" severity="danger" text />
              </div>
            </div>
          </div>
        </template>
      </Card>
      <Card>
        <template #title>
          <span class="text-lg">Preferências</span>
        </template>
        <template #content>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <div class="font-medium mb-1">Idioma</div>
                <div class="text-sm text-surface-600 dark:text-surface-400">
                  {{ settings?.language || 'Português (Brasil)' }}
                </div>
              </div>
              <Button icon="pi pi-chevron-right" text rounded />
            </div>

            <Divider />

            <div class="flex items-center justify-between">
              <div>
                <div class="font-medium mb-1">Tema</div>
                <div class="text-sm text-surface-600 dark:text-surface-400">
                  {{ themeLabel }}
                </div>
              </div>
              <Button icon="pi pi-chevron-right" text rounded />
            </div>

            <Divider />

            <div class="flex items-center justify-between">
              <div>
                <div class="font-medium mb-1">Notificações por email</div>
                <div class="text-sm text-surface-600 dark:text-surface-400">
                  Receber atualizações e novidades
                </div>
              </div>
              <InputSwitch
                v-model="emailNotifications"
                @update:modelValue="updateEmailNotifications"
              />
            </div>
          </div>
        </template>
      </Card>
      <Card>
        <template #title>
          <span class="text-lg flex items-center gap-2">
            <i class="pi pi-database text-blue-500"></i>
            Dados da API (TanStack Query)
          </span>
        </template>
        <template #content>
          <div class="space-y-3">
            <div class="p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg">
              <div class="text-sm font-medium mb-2">Status das Queries:</div>
              <div class="flex gap-4 text-xs">
                <span
                  >Usuário:
                  <Tag
                    :value="isLoadingUser ? 'Loading' : 'Success'"
                    :severity="isLoadingUser ? 'warning' : 'success'"
                /></span>
                <span
                  >Settings:
                  <Tag
                    :value="isLoadingSettings ? 'Loading' : 'Success'"
                    :severity="isLoadingSettings ? 'warning' : 'success'"
                /></span>
              </div>
            </div>

            <Message severity="info" :closable="false">
              <div class="text-sm">
                <strong>💾 Persistência:</strong> Os dados agora são salvos no localStorage. Quando
                você atualizar a página, suas alterações permanecerão!
              </div>
            </Message>

            <div class="text-xs text-surface-600 dark:text-surface-400">
              <strong>Fonte inicial:</strong> https://jsonplaceholder.typicode.com/users/1<br />
              <strong>Armazenamento:</strong> localStorage (navegador)
            </div>

            <div class="flex gap-2">
              <Button
                label="Refetch Data"
                icon="pi pi-refresh"
                size="small"
                severity="secondary"
                outlined
                @click="refetchData"
              />
              <Button
                label="Limpar Dados"
                icon="pi pi-trash"
                size="small"
                severity="danger"
                outlined
              />
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import {
  useUser,
  useUserSettings,
  useUpdateUser,
  useUpdateSettings,
} from '../../composables/useUser'
import { useToast } from 'primevue/usetoast'

defineOptions({ name: 'AccountView' })

const toast = useToast()

const userId = ref(1)

// Queries
const {
  data: user,
  isLoading: isLoadingUser,
  error: userError,
  refetch: refetchUser,
} = useUser(userId)
const {
  data: settings,
  isLoading: isLoadingSettings,
  error: settingsError,
  refetch: refetchSettings,
} = useUserSettings(userId)

// Mutations
const { mutate: updateUser, isPending: isUpdating } = useUpdateUser()
const { mutate: updateSettings } = useUpdateSettings()

// Form state
const isEditing = ref(false)
const formData = ref({
  name: '',
  username: '',
  email: '',
  phone: '',
})

// Watchers para sincronizar dados da API com o form
watch(
  user,
  (newUser) => {
    if (newUser && !isEditing.value) {
      formData.value = {
        name: newUser.name,
        username: newUser.username,
        email: newUser.email,
        phone: newUser.phone,
      }
    }
  },
  { immediate: true },
)

const emailNotifications = ref(true)

watch(
  settings,
  (newSettings) => {
    if (newSettings) {
      emailNotifications.value = newSettings.notifications.email
    }
  },
  { immediate: true },
)

// Computed
const themeLabel = computed(() => {
  const themeMap = {
    light: 'Claro',
    dark: 'Escuro',
    auto: 'Automático (segue o sistema)',
  }
  return themeMap[settings.value?.theme || 'auto']
})

// Methods
const cancelEdit = () => {
  isEditing.value = false
  if (user.value) {
    formData.value = {
      name: user.value.name,
      username: user.value.username,
      email: user.value.email,
      phone: user.value.phone,
    }
  }
}

const saveChanges = () => {
  updateUser(
    {
      userId: userId.value,
      data: formData.value,
    },
    {
      onSuccess: () => {
        toast.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Informações atualizadas com sucesso',
          life: 3000,
        })
        isEditing.value = false
      },
      onError: () => {
        toast.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao atualizar informações',
          life: 3000,
        })
      },
    },
  )
}

const updateEmailNotifications = (value: boolean) => {
  updateSettings(
    {
      userId: userId.value,
      settings: {
        notifications: {
          email: value,
          push: settings.value?.notifications.push || false,
          sms: settings.value?.notifications.sms || false,
        },
      },
    },
    {
      onSuccess: () => {
        toast.add({
          severity: 'success',
          summary: 'Preferência atualizada',
          detail: `Notificações por email ${value ? 'ativadas' : 'desativadas'}`,
          life: 3000,
        })
      },
    },
  )
}

const refetchData = () => {
  refetchUser()
  refetchSettings()
  toast.add({
    severity: 'info',
    summary: 'Atualizando',
    detail: 'Buscando dados atualizados...',
    life: 2000,
  })
}
</script>

<style scoped>
.space-y-4 > * + * {
  margin-top: 1rem;
}

.space-y-3 > * + * {
  margin-top: 0.75rem;
}
</style>
