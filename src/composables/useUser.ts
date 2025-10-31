import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query'
import { api, type User, type UserSettings } from '../services/api'
import type { MaybeRef } from 'vue'
import { unref } from 'vue'

export function useUser(userId: MaybeRef<number>) {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => api.getUser(unref(userId)),
    staleTime: 5 * 60 * 1000,
    retry: 2,
  })
}

export function useUserSettings(userId: MaybeRef<number>) {
  return useQuery({
    queryKey: ['userSettings', userId],
    queryFn: () => api.getUserSettings(unref(userId)),
    staleTime: 5 * 60 * 1000,
    retry: 2,
  })
}

export function useUpdateUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ userId, data }: { userId: number; data: Partial<User> }) =>
      api.updateUser(userId, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['user', variables.userId] })
    },
  })
}

export function useUpdateSettings() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ userId, settings }: { userId: number; settings: Partial<UserSettings> }) =>
      api.updateSettings(userId, settings),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['userSettings', variables.userId] })
    },
  })
}
