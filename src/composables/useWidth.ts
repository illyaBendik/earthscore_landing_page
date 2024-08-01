import { onBeforeUnmount, onMounted, ref } from 'vue'

export const useWidth = () => {
  const screenWidth = ref(window.innerWidth)

  const handleResize = () => {
    screenWidth.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
  })

  return {
    screenWidth
  }
}
