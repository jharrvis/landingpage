<template>
  <section class="pt-32 pb-20 bg-white grid-pattern">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto text-center">
        <div class="space-y-8 slide-in-left">
          <div class="space-y-6">
            <h1 class="text-7xl lg:text-8xl font-black leading-none">
              <span class="block text-gray-900">Design For</span>
              <span class="block text-gray-900 text-selection-effect">A World That's</span>
              <span 
                class="block gradient-text font-extrabold" 
                :class="{ 'typewriter': showTypewriter }"
                ref="typewriterText"
              >
                {{ typewriterText }}
              </span>
            </h1>
            <p class="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium fade-in">
              We create brilliant brand identities and digital experiences that help your business thrive in an ever-changing digital landscape.
            </p>
          </div>
          <div class="flex items-center justify-center space-x-8 fade-in">
            <button 
              @click="handleCTAClick"
              class="bg-blue-600 text-white px-10 py-5 rounded-full hover:bg-blue-700 transition-all duration-300 font-bold text-lg hover-lift"
              :class="{ 'animate-pulse': ctaClicked }"
            >
              See How It Works
              <svg class="w-6 h-6 ml-3 inline transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </button>
            <div 
              @click="playDemo"
              class="flex items-center space-x-4 cursor-pointer hover-lift"
              :class="{ 'animate-spin': demoClicked }"
            >
              <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span class="text-gray-700 font-bold text-lg">Watch Demo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue'

export default {
  name: 'HeroSection',
  setup() {
    const typewriterText = ref('')
    const showTypewriter = ref(false)
    const ctaClicked = ref(false)
    const demoClicked = ref(false)
    const typewriterTextRef = ref(null)

    const fullText = 'Always Evolving'

    const typeWriter = () => {
      typewriterText.value = ''
      showTypewriter.value = true
      
      let i = 0
      const typing = () => {
        if (i < fullText.length) {
          typewriterText.value += fullText.charAt(i)
          i++
          setTimeout(typing, 100)
        }
      }
      
      setTimeout(typing, 500)
    }

    const handleCTAClick = () => {
      ctaClicked.value = true
      setTimeout(() => {
        ctaClicked.value = false
      }, 1000)
    }

    const playDemo = () => {
      demoClicked.value = true
      setTimeout(() => {
        demoClicked.value = false
      }, 1000)
      
      // Emit event to open video modal
      const event = new CustomEvent('openVideoModal', {
        detail: { videoId: 'dQw4w9WgXcQ' }
      })
      window.dispatchEvent(event)
    }

    onMounted(() => {
      nextTick(() => {
        // Start typewriter effect
        setTimeout(typeWriter, 1000)
        
        // Setup scroll observer for typewriter restart
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              typeWriter()
            }
          })
        }, { threshold: 0.5 })
        
        if (typewriterTextRef.value) {
          observer.observe(typewriterTextRef.value)
        }
      })
    })

    return {
      typewriterText,
      showTypewriter,
      ctaClicked,
      demoClicked,
      typewriterTextRef,
      handleCTAClick,
      playDemo
    }
  }
}
</script>

<style scoped>
.typewriter {
  overflow: hidden;
  border-right: 3px solid #2563eb;
  white-space: nowrap;
  animation: typing 3s steps(30, end), blink-caret 0.8s step-end infinite;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: #2563eb; }
}
</style>