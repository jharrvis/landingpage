<template>
  <section class="pt-32 pb-20 bg-white grid-pattern">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto text-center">
        <div class="space-y-8 slide-in-left">
          <div class="space-y-6">
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none">
              <span class="block text-gray-900">Design For</span>
              <span class="block text-gray-900 text-selection-effect">A World That's</span>
              <span class="block gradient-text font-extrabold">
                Always Evolving
              </span>
            </h1>
            <p class="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium fade-in">
              We create brilliant brand identities and digital experiences that help your business thrive in an ever-changing digital landscape.
            </p>
          </div>
          <div class="flex items-center justify-center fade-in">
            <button 
              @click="handleCTAClick"
              class="bg-blue-600 text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-full hover:bg-blue-700 transition-all duration-300 font-bold text-base sm:text-lg hover-lift"
              :class="{ 'animate-pulse': ctaClicked }"
            >
              View Projects
              <svg class="w-6 h-6 ml-3 inline transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HeroSection',
  setup() {
    const ctaClicked = ref(false)

    const handleCTAClick = () => {
      ctaClicked.value = true
      setTimeout(() => {
        ctaClicked.value = false
      }, 1000)
      // Handle navigation to projects page here
      console.log('View Projects clicked')
    }

    return {
      ctaClicked,
      handleCTAClick
    }
  }
}
</script>