<template>
  <div id="app">
    <!-- Header Component -->
    <AppHeader />
    
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Marquee Section (New) -->
    <MarqueeSection />

    <!-- Services Section -->
    <ServicesSection />
    
    <!-- About Section -->
    <AboutSection />
    
    <!-- Stats Portfolio Section -->
    <StatsPortfolioSection />
    
    <!-- Working Process Section -->
    <WorkingProcessSection />
    
    <!-- Testimonials Section -->
    <TestimonialsSection />
    
    <!-- Why Choose Section -->
    <WhyChooseSection />
    
    <!-- Stats Counter Section -->
    <StatsCounterSection />
    
    <!-- Footer Component -->
    <AppFooter />
    
    <!-- Video Modal -->
    <VideoModal 
      :isOpen="videoModal.isOpen" 
      :videoId="videoModal.videoId"
      @close="closeVideoModal" 
    />
    
    <!-- Go to Top Button -->
    <GoToTopButton />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import MarqueeSection from './components/MarqueeSection.vue'
import AboutSection from './components/AboutSection.vue'
import StatsPortfolioSection from './components/StatsPortfolioSection.vue'
import WorkingProcessSection from './components/WorkingProcessSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import WhyChooseSection from './components/WhyChooseSection.vue'
import StatsCounterSection from './components/StatsCounterSection.vue'
import AppFooter from './components/AppFooter.vue'
import VideoModal from './components/VideoModal.vue'
import GoToTopButton from './components/GoToTopButton.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    HeroSection,
    ServicesSection,
    MarqueeSection,
    AboutSection,
    StatsPortfolioSection,
    WorkingProcessSection,
    TestimonialsSection,
    WhyChooseSection,
    StatsCounterSection,
    AppFooter,
    VideoModal,
    GoToTopButton
  },
  setup() {
    const videoModal = ref({
      isOpen: false,
      videoId: ''
    })

    const openVideoModal = (videoId) => {
      videoModal.value.isOpen = true
      videoModal.value.videoId = videoId
      document.body.classList.add('overflow-hidden')
    }

    const closeVideoModal = () => {
      videoModal.value.isOpen = false
      videoModal.value.videoId = ''
      document.body.classList.remove('overflow-hidden')
    }

    // Setup intersection observer for animations
    const setupAnimations = () => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      }, observerOptions)

      // Observe animation elements
      const animationElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in')
      animationElements.forEach(el => observer.observe(el))

      return observer
    }

    // Provide methods globally for child components
    const provide = (key, value) => {
      if (key === 'openVideoModal') {
        return openVideoModal
      }
    }

    onMounted(() => {
      setupAnimations()
      
      // Global event listener for video modal
      window.addEventListener('openVideoModal', (event) => {
        openVideoModal(event.detail.videoId)
      })
    })

    onUnmounted(() => {
      window.removeEventListener('openVideoModal', () => {})
    })

    return {
      videoModal,
      openVideoModal,
      closeVideoModal
    }
  }
}
</script>

<style>
/* Global styles */
body {
  overflow-x: hidden;
  font-family: 'Sora', sans-serif;
}

.gradient-text {
  color: #2563eb;
}

.subtle-shadow {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.floating-animation {
  animation: float 8s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { 
    transform: translateY(0px); 
  }
  50% { 
    transform: translateY(-10px); 
  }
}

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.slide-in-left {
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.6s ease-out;
}

.slide-in-left.visible {
  opacity: 1;
  transform: translateX(0);
}

.slide-in-right {
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.6s ease-out;
}

.slide-in-right.visible {
  opacity: 1;
  transform: translateX(0);
}

.scale-in {
  opacity: 0;
  transform: scale(0.95);
  transition: all 0.6s ease-out;
}

.scale-in.visible {
  opacity: 1;
  transform: scale(1);
}

.svg-icon {
  transition: all 0.2s ease;
}

.svg-icon:hover {
  transform: scale(1.05);
}

.interactive-card {
  transition: all 0.3s ease;
}

.interactive-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(37, 99, 235, 0.1);
}

.text-selection-effect {
  position: relative;
  display: inline-block;
}

.text-selection-effect::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #10b981;
  opacity: 0.15;
  transform: scaleX(0);
  transform-origin: left;
  animation: selectTextOnce 1.5s ease-in-out 2s forwards;
  z-index: -1;
}

@keyframes selectTextOnce {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}

.grid-pattern {
  background-image: 
    linear-gradient(rgba(37, 99, 235, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(37, 99, 235, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}

.hover-lift {
  transition: all 0.2s ease;
}

.hover-lift:hover {
  transform: translateY(-2px);
}

.process-step {
  transition: all 0.6s ease-out;
}

.process-step.visible {
  opacity: 1;
  transform: translateX(0);
}

.process-dot {
  transition: all 0.3s ease;
}

.process-dot.active {
  transform: scale(1.5);
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.6);
}

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

.progress-bar {
  transition: width 1.5s ease-out;
}

.aspect-video {
  aspect-ratio: 16 / 9;
}

@keyframes fall {
  to {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}
</style>