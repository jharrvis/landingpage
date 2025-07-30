<template>
  <section class="relative overflow-hidden">
    <!-- Image Section with Scroll Effect -->
    <div class="relative h-[400px] lg:h-[500px] overflow-hidden">
      <img 
        ref="parallaxImage"
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
        alt="Team collaboration" 
        class="w-full h-full object-cover transition-transform duration-300 ease-out"
        :style="{ transform: `translateY(${parallaxOffset}px)` }"
      >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-20"></div>
      
      <!-- Optional content overlay -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center text-white">
          <h2 class="text-4xl lg:text-6xl font-bold mb-4 opacity-90">
            Creating Digital Excellence
          </h2>
          <p class="text-xl lg:text-2xl opacity-80">
            Together we build the future
          </p>
        </div>
      </div>
    </div>

    <!-- Marquee Text Section -->
    <div class="bg-green-500 py-6 lg:py-8 overflow-hidden relative">
      <!-- Marquee Container -->
      <div class="marquee-container">
        <div class="marquee-content">
          <!-- First Set -->
          <div class="flex items-center whitespace-nowrap">
            <span class="text-2xl lg:text-4xl font-black text-black mx-8">DESIGN</span>
            <div class="rotating-star mx-4">
              <svg class="w-6 h-6 lg:w-8 lg:h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span class="text-2xl lg:text-4xl font-black text-black mx-8">UI/UX DESIGN</span>
            <div class="rotating-star mx-4">
              <svg class="w-6 h-6 lg:w-8 lg:h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span class="text-2xl lg:text-4xl font-black text-black mx-8">WEB DEVELOPMENT</span>
            <div class="rotating-star mx-4">
              <svg class="w-6 h-6 lg:w-8 lg:h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span class="text-2xl lg:text-4xl font-black text-black mx-8">BRANDING</span>
            <div class="rotating-star mx-4">
              <svg class="w-6 h-6 lg:w-8 lg:h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span class="text-2xl lg:text-4xl font-black text-black mx-8">DIGITAL MARKETING</span>
            <div class="rotating-star mx-4">
              <svg class="w-6 h-6 lg:w-8 lg:h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
          
          <!-- Second Set (Duplicate for seamless loop) -->
          <div class="flex items-center whitespace-nowrap">
            <span class="text-2xl lg:text-4xl font-black text-black mx-8">DESIGN</span>
            <div class="rotating-star mx-4">
              <svg class="w-6 h-6 lg:w-8 lg:h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span class="text-2xl lg:text-4xl font-black text-black mx-8">UI/UX DESIGN</span>
            <div class="rotating-star mx-4">
              <svg class="w-6 h-6 lg:w-8 lg:h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span class="text-2xl lg:text-4xl font-black text-black mx-8">WEB DEVELOPMENT</span>
            <div class="rotating-star mx-4">
              <svg class="w-6 h-6 lg:w-8 lg:h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span class="text-2xl lg:text-4xl font-black text-black mx-8">BRANDING</span>
            <div class="rotating-star mx-4">
              <svg class="w-6 h-6 lg:w-8 lg:h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span class="text-2xl lg:text-4xl font-black text-black mx-8">DIGITAL MARKETING</span>
            <div class="rotating-star mx-4">
              <svg class="w-6 h-6 lg:w-8 lg:h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'MarqueeSection',
  setup() {
    const parallaxImage = ref(null)
    const parallaxOffset = ref(0)

    const handleScroll = () => {
      if (parallaxImage.value) {
        const rect = parallaxImage.value.getBoundingClientRect()
        const scrolled = window.pageYOffset
        const rate = scrolled * -0.5
        parallaxOffset.value = rate
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      parallaxImage,
      parallaxOffset
    }
  }
}
</script>

<style scoped>
.marquee-container {
  width: 100%;
  overflow: hidden;
}

.marquee-content {
  display: flex;
  animation: marquee 30s linear infinite;
}

.rotating-star {
  animation: rotate 3s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Pause animation on hover */
.marquee-container:hover .marquee-content {
  animation-play-state: paused;
}

.marquee-container:hover .rotating-star {
  animation-play-state: paused;
}
</style>