export interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website?: string
  address?: {
    street: string
    suite: string
    city: string
    zipcode: string
  }
  company?: {
    name: string
    catchPhrase: string
  }
}

export interface UserSettings {
  userId: number
  theme: 'light' | 'dark' | 'auto'
  language: string
  notifications: {
    email: boolean
    push: boolean
    sms: boolean
  }
  privacy: {
    profilePublic: boolean
    showEmail: boolean
    showPhone: boolean
  }
}

const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

const STORAGE_KEY = 'app_user_data'
const SETTINGS_KEY = 'app_user_settings'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

function getStoredUser(userId: number): User | null {
  const stored = localStorage.getItem(`${STORAGE_KEY}_${userId}`)
  return stored ? JSON.parse(stored) : null
}

function getStoredSettings(userId: number): UserSettings | null {
  const stored = localStorage.getItem(`${SETTINGS_KEY}_${userId}`)
  return stored ? JSON.parse(stored) : null
}

export const api = {
  // Buscar dados do usuário
  async getUser(userId: number): Promise<User> {
    await delay(800)

    const storedUser = getStoredUser(userId)
    if (storedUser) {
      console.log('📦 Dados carregados do localStorage (persistidos)')
      return storedUser
    }

    console.log('🌐 Buscando dados da API')
    const response = await fetch(`${API_BASE_URL}/users/${userId}`)
    if (!response.ok) {
      throw new Error('Erro ao buscar usuário')
    }
    const data = await response.json()

    localStorage.setItem(`${STORAGE_KEY}_${userId}`, JSON.stringify(data))

    return data
  },

  async getUserSettings(userId: number): Promise<UserSettings> {
    await delay(600)

    const storedSettings = getStoredSettings(userId)
    if (storedSettings) {
      console.log('📦 Settings carregadas do localStorage')
      return storedSettings
    }

    const defaultSettings: UserSettings = {
      userId,
      theme: 'auto',
      language: 'pt-BR',
      notifications: {
        email: true,
        push: false,
        sms: false,
      },
      privacy: {
        profilePublic: true,
        showEmail: false,
        showPhone: false,
      },
    }

    localStorage.setItem(`${SETTINGS_KEY}_${userId}`, JSON.stringify(defaultSettings))

    return defaultSettings
  },

  async updateUser(userId: number, data: Partial<User>): Promise<User> {
    await delay(1000)
    console.log('💾 Salvando dados no localStorage...')

    const currentUser = getStoredUser(userId) || (await this.getUser(userId))

    const updatedUser = {
      ...currentUser,
      ...data,
    }

    localStorage.setItem(`${STORAGE_KEY}_${userId}`, JSON.stringify(updatedUser))

    console.log('✅ Dados salvos com sucesso!')
    return updatedUser
  },

  async updateSettings(userId: number, settings: Partial<UserSettings>): Promise<UserSettings> {
    await delay(800)
    console.log('💾 Salvando settings no localStorage...')

    const currentSettings = getStoredSettings(userId) || (await this.getUserSettings(userId))

    const updatedSettings = {
      ...currentSettings,
      ...settings,
      notifications: {
        ...currentSettings.notifications,
        ...(settings.notifications || {}),
      },
      privacy: {
        ...currentSettings.privacy,
        ...(settings.privacy || {}),
      },
    }

    localStorage.setItem(`${SETTINGS_KEY}_${userId}`, JSON.stringify(updatedSettings))

    console.log('✅ Settings salvas com sucesso!')
    return updatedSettings
  },

  clearStoredData(userId: number) {
    localStorage.removeItem(`${STORAGE_KEY}_${userId}`)
    localStorage.removeItem(`${SETTINGS_KEY}_${userId}`)
    console.log('🗑️ Dados locais removidos')
  },
}
