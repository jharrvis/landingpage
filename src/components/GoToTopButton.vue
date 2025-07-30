<template>
  <button 
    v-show="isVisible"
    @click="scrollToTop"
    class="fixed bottom-8 right-8 w-12 h-12 bg-green-500 text-black rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 hover-lift z-50"
    :class="{ 'opacity-100 visible': isVisible, 'opacity-0 invisible': !isVisible }"
  >
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
    </svg>
  </button>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'GoToTopButton',
  setup() {
    const isVisible = ref(false)

    const handleScroll = () => {
      isVisible.value = window.scrollY > 300
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      isVisible,
      scrollToTop
    }
  }
}
</script>