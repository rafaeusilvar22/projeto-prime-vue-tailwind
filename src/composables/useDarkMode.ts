import { ref, watch, onMounted } from 'vue'

/**
 * Composable to manage dark mode.
 *
 * It stores the current theme in localStorage and watches for changes.
 * When the theme changes, it applies the theme to the document.
 *
 * It returns an object with three properties:
 * - isDark: a boolean ref indicating whether the theme is dark or not.
 * - toggleTheme: a function to toggle the theme.
 *
 * @example
 * const { isDark, toggleTheme } = useDarkMode()
 * toggleTheme()
 */
export const useDarkMode = () => {
  const isDark = ref(false)

  const loadTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    applyTheme()
  }

  /**
   * Applies the current theme to the document.
   *
   * If the theme is dark, it adds the 'dark' class to the document element.
   * Otherwise, it removes the 'dark' class.
   */
  const applyTheme = () => {
    const htmlElement = document.documentElement
    if (isDark.value) {
      htmlElement.classList.add('dark')
    } else {
      htmlElement.classList.remove('dark')
    }
  }

  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  watch(isDark, (newValue) => {
    localStorage.setItem('theme', newValue ? 'dark' : 'light')
    applyTheme()
  })

  onMounted(() => {
    loadTheme()
  })

  return {
    isDark,
    toggleTheme,
  }
}
