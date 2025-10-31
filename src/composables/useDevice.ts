import { ref, onMounted, onUnmounted, computed } from 'vue'

export function useDevice() {
  const width = ref(window.innerWidth)

  const isMobile = computed(() => width.value < 768)
  const isTablet = computed(() => width.value >= 768 && width.value < 1024)
  const isDesktop = computed(() => width.value >= 1024)

  function onResize() {
    width.value = window.innerWidth
  }

  onMounted(() => window.addEventListener('resize', onResize))
  onUnmounted(() => window.removeEventListener('resize', onResize))

  return { width, isMobile, isTablet, isDesktop }
}
