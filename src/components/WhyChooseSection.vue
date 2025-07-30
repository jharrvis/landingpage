<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left side - Image with Video Button -->
        <div class="relative slide-in-left">
          <div class="relative">
            <!-- Hexagon shaped image -->
            <div class="hexagon-container relative w-full max-w-lg mx-auto">
              <div class="hexagon overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Professional woman" 
                  class="w-full h-full object-cover"
                >
              </div>
            </div>
            
            <!-- Play Video Button -->
            <div class="absolute bottom-8 right-8">
              <button 
                @click="playVideo"
                class="bg-green-500 text-black px-6 py-3 rounded-full hover:bg-green-600 transition-all duration-300 font-bold text-lg hover-lift flex items-center"
              >
                <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
                </svg>
                Play Video
              </button>
            </div>
          </div>
        </div>

        <!-- Right side - Content -->
        <div class="space-y-8 slide-in-right" id="why-choose-content">
          <div class="space-y-6">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-0.5 bg-gray-400"></div>
              <span class="text-gray-600 font-medium">Why Choose</span>
            </div>
            <h2 class="text-5xl font-bold leading-tight">
              We Provide brilliant ideas & the digital agency
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              Creating products with a strong identity. We provide brilliant ideas and adding the world called success brand. We deliver customized marketing campaign to use your audience to make a positive move.
            </p>
          </div>

          <!-- Progress Bars -->
          <div class="space-y-6" id="progress-bars-container">
            <ProgressBar
              v-for="skill in skills"
              :key="skill.name"
              :skill="skill"
              :is-visible="progressVisible"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import ProgressBar from './ProgressBar.vue'

export default {
  name: 'WhyChooseSection',
  components: {
    ProgressBar
  },
  setup() {
    const progressVisible = ref(false)
    
    const skills = ref([
      {
        name: 'Digital Marketing',
        percentage: 89,
        color: 'bg-green-500'
      },
      {
        name: 'Mobile Solution',
        percentage: 65,
        color: 'bg-green-500'
      },
      {
        name: 'Business Solution',
        percentage: 40,
        color: 'bg-green-500'
      }
    ])

    const playVideo = () => {
      // Emit event to open video modal
      const event = new CustomEvent('openVideoModal', {
        detail: { videoId: 'dQw4w9WgXcQ' }
      })
      window.dispatchEvent(event)
    }

    onMounted(() => {
      // Add a small delay to ensure DOM is fully rendered
      setTimeout(() => {
        // Setup intersection observer to trigger progress bars animation
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                progressVisible.value = true
                observer.unobserve(entry.target)
              }
            })
          },
          { threshold: 0.3 }
        )

        // Find the progress bars container and observe it
        const progressContainer = document.getElementById('progress-bars-container')
        if (progressContainer) {
          observer.observe(progressContainer)
        }
      }, 100)
    })

    return {
      skills,
      progressVisible,
      playVideo
    }
  }
}
</script>

<style scoped>
.hexagon-container {
  width: 400px;
  height: 400px;
}

.hexagon {
  width: 100%;
  height: 100%;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  background: #f3f4f6;
}
</style>