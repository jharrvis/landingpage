<template>
  <Teleport to="body">
    <div 
      v-if="isOpen"
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-all duration-300"
      :class="{ 'opacity-100 visible': isOpen, 'opacity-0 invisible': !isOpen }"
      @click="handleBackdropClick"
    >
      <div class="relative bg-white rounded-lg overflow-hidden max-w-4xl w-full mx-4">
        <button 
          @click="closeModal"
          class="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all z-10"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div class="aspect-video">
          <iframe 
            v-if="videoId"
            width="100%" 
            height="100%" 
            :src="`https://www.youtube.com/embed/${videoId}?autoplay=1`" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script>
import { watch, onMounted, onUnmounted } from 'vue'

export default {
  name: 'VideoModal',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    videoId: {
      type: String,
      default: ''
    }
  },
  emits: ['close'],
  setup(props, { emit }) {
    const closeModal = () => {
      emit('close')
    }

    const handleBackdropClick = (event) => {
      if (event.target === event.currentTarget) {
        closeModal()
      }
    }

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && props.isOpen) {
        closeModal()
      }
    }

    watch(() => props.isOpen, (newValue) => {
      if (newValue) {
        document.body.classList.add('overflow-hidden')
      } else {
        document.body.classList.remove('overflow-hidden')
      }
    })

    onMounted(() => {
      document.addEventListener('keydown', handleEscapeKey)
    })

    onUnmounted(() => {
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.classList.remove('overflow-hidden')
    })

    return {
      closeModal,
      handleBackdropClick
    }
  }
}
</script>