<template>
  <header class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50" :class="headerClass">
    <div class="container mx-auto px-6">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span class="text-2xl font-bold text-gray-900">TechFlow</span>
        </div>

        <!-- Navigation -->
        <nav class="hidden lg:flex items-center space-x-12">
          <div class="relative group">
            <a href="#" class="text-gray-700 hover:text-purple-600 transition-colors duration-300 flex items-center font-medium">
              Services 
              <svg class="w-4 h-4 ml-2 transition-transform group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </a>
            <div class="absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div class="py-2">
                <a href="#" class="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">Brand Identity</a>
                <a href="#" class="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">Digital Marketing</a>
                <a href="#" class="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">Web Design</a>
                <a href="#" class="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">UI/UX Design</a>
              </div>
            </div>
          </div>
          <div class="relative group">
            <a href="#" class="text-gray-700 hover:text-purple-600 transition-colors duration-300 flex items-center font-medium">
              Portfolio 
              <svg class="w-4 h-4 ml-2 transition-transform group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </a>
            <div class="absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div class="py-2">
                <a href="#" class="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">Recent Projects</a>
                <a href="#" class="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">Case Studies</a>
                <a href="#" class="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">Client Stories</a>
              </div>
            </div>
          </div>
          <a href="#" class="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">About</a>
          <a href="#" class="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Blog</a>
          <a href="#" class="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Contact</a>
        </nav>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu" 
          class="lg:hidden flex items-center space-x-2 text-gray-700"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <!-- CTA Buttons -->
        <div class="hidden lg:flex items-center space-x-4">
          <button class="px-6 py-2.5 text-gray-700 border border-gray-300 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-medium hover-lift">
            Login
          </button>
          <button class="px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 font-medium hover-lift">
            Request Demo
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-show="mobileMenuOpen" class="lg:hidden py-4 border-t border-gray-100">
        <nav class="space-y-4">
          <a href="#" class="block text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
          <a href="#" class="block text-gray-700 hover:text-blue-600 transition-colors font-medium">Portfolio</a>
          <a href="#" class="block text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
          <a href="#" class="block text-gray-700 hover:text-blue-600 transition-colors font-medium">Blog</a>
          <a href="#" class="block text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
          <div class="flex space-x-4 pt-4">
            <button class="px-4 py-2 text-gray-700 border border-gray-300 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-medium text-sm">
              Login
            </button>
            <button class="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 font-medium text-sm">
              Request Demo
            </button>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'AppHeader',
  setup() {
    const headerClass = ref('')
    const mobileMenuOpen = ref(false)

    const handleScroll = () => {
      if (window.scrollY > 50) {
        headerClass.value = 'shadow-lg'
      } else {
        headerClass.value = 'border-b border-gray-100'
      }
    }

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      headerClass,
      mobileMenuOpen,
      toggleMobileMenu
    }
  }
}
</script>