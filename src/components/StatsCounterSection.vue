<template>
  <section class="py-20 bg-blue-600">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-8 text-center text-white">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="fade-in"
        >
          <div class="text-5xl font-bold mb-2">
            {{ animatedStats[index] }}{{ stat.suffix }}
          </div>
          <p class="text-xl opacity-90">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, reactive } from 'vue'

export default {
  name: 'StatsCounterSection',
  setup() {
    const stats = ref([
      { value: 150, suffix: '+', label: 'Projects Completed' },
      { value: 95, suffix: '+', label: 'Happy Clients' },
      { value: 8, suffix: '+', label: 'Years Experience' },
      { value: 25, suffix: '+', label: 'Awards Won' }
    ])

    const animatedStats = reactive([0, 0, 0, 0])

    const animateCounter = (index, targetValue, duration = 2000) => {
      const startTime = Date.now()
      const startValue = 0

      const updateCounter = () => {
        const now = Date.now()
        const progress = Math.min((now - startTime) / duration, 1)
        
        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3)
        
        animatedStats[index] = Math.round(startValue + (targetValue - startValue) * easeOut)

        if (progress < 1) {
          requestAnimationFrame(updateCounter)
        }
      }

      requestAnimationFrame(updateCounter)
    }

    const startAnimation = () => {
      stats.value.forEach((stat, index) => {
        setTimeout(() => {
          animateCounter(index, stat.value)
        }, index * 200) // Stagger the animations
      })
    }

    onMounted(() => {
      // Setup intersection observer to trigger animation when section is visible
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startAnimation()
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.5 }
      )

      // Observer will be attached to the section element
      const section = document.querySelector('.bg-blue-600')
      if (section) {
        observer.observe(section)
      }
    })

    return {
      stats,
      animatedStats
    }
  }
}
</script>