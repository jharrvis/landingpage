<template>
  <div class="text-center fade-in">
    <div class="text-4xl lg:text-6xl font-black mb-2">
      <span class="text-gray-900">{{ animatedValue }}</span>
      <span :class="stat.color">{{ stat.suffix }}</span>
    </div>
    <p class="text-lg text-gray-600 font-medium">{{ stat.label }}</p>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue'

export default {
  name: 'StatCounter',
  props: {
    stat: {
      type: Object,
      required: true
    },
    isVisible: {
      type: Boolean,
      default: false
    },
    delay: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const animatedValue = ref(0)

    const animateCounter = () => {
      const duration = 1500
      const startTime = Date.now()
      const startValue = 0
      const targetValue = props.stat.value

      const updateCounter = () => {
        const now = Date.now()
        const progress = Math.min((now - startTime) / duration, 1)
        
        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3)
        
        animatedValue.value = Math.round(startValue + (targetValue - startValue) * easeOut)

        if (progress < 1) {
          requestAnimationFrame(updateCounter)
        }
      }

      setTimeout(() => {
        requestAnimationFrame(updateCounter)
      }, props.delay)
    }

    watch(() => props.isVisible, (newValue) => {
      if (newValue) {
        animateCounter()
      }
    })

    return {
      animatedValue
    }
  }
}
</script>