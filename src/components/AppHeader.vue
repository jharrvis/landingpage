<template>
  <header class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-30" :class="headerClass">
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
          class="lg:hidden w-10 h-10 flex items-center justify-center text-gray-700 z-60 relative"
        >
          <div class="hamburger" :class="{ 'active': mobileMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </div>
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
    </div>

    <!-- Mobile Sidebar Menu -->
    <div 
      class="fixed top-0 left-0 h-screen w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden border-r border-gray-200"
      :class="mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'"
      style="background-color: rgba(255, 255, 255, 1); height: 100vh; min-height: 100vh; z-index: 50;"
    >
      <div class="flex flex-col h-full">
        <!-- Sidebar Header -->
        <div class="flex items-center p-6 border-b border-gray-100 bg-white">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span class="text-xl font-bold text-gray-900">TechFlow</span>
          </div>
        </div>

        <!-- Navigation Menu -->
        <nav class="flex-1 overflow-y-auto px-6 py-4 bg-white">
          <div class="space-y-1">
            <!-- Services Dropdown -->
            <div class="mb-3">
              <button 
                @click="toggleDropdown('services')"
                class="w-full flex items-center justify-between text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              >
                Services
                <svg 
                  class="w-4 h-4 transition-transform duration-200"
                  :class="activeDropdown === 'services' ? 'rotate-90' : ''"
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                </svg>
              </button>
              <div 
                v-show="activeDropdown === 'services'"
                class="ml-4 mt-1 space-y-1 transition-all duration-200"
              >
                <a href="#" class="block text-gray-600 hover:text-blue-600 transition-colors py-1.5 text-sm">Brand Identity</a>
                <a href="#" class="block text-gray-600 hover:text-blue-600 transition-colors py-1.5 text-sm">Digital Marketing</a>
                <a href="#" class="block text-gray-600 hover:text-blue-600 transition-colors py-1.5 text-sm">Web Design</a>
                <a href="#" class="block text-gray-600 hover:text-blue-600 transition-colors py-1.5 text-sm">UI/UX Design</a>
              </div>
            </div>

            <!-- Portfolio Dropdown -->
            <div class="mb-3">
              <button 
                @click="toggleDropdown('portfolio')"
                class="w-full flex items-center justify-between text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              >
                Portfolio
                <svg 
                  class="w-4 h-4 transition-transform duration-200"
                  :class="activeDropdown === 'portfolio' ? 'rotate-90' : ''"
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                </svg>
              </button>
              <div 
                v-show="activeDropdown === 'portfolio'"
                class="ml-4 mt-1 space-y-1 transition-all duration-200"
              >
                <a href="#" class="block text-gray-600 hover:text-blue-600 transition-colors py-1.5 text-sm">Recent Projects</a>
                <a href="#" class="block text-gray-600 hover:text-blue-600 transition-colors py-1.5 text-sm">Case Studies</a>
                <a href="#" class="block text-gray-600 hover:text-blue-600 transition-colors py-1.5 text-sm">Client Stories</a>
              </div>
            </div>

            <!-- About -->
            <a href="#" class="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 mb-3">About</a>

            <!-- Blog -->
            <a href="#" class="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 mb-3">Blog</a>

            <!-- Contact -->
            <a href="#" class="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">Contact</a>
          </div>
        </nav>

        <!-- CTA Buttons -->
        <div class="p-6 border-t border-gray-100 bg-white">
          <div class="space-y-3">
            <button class="w-full px-6 py-3 text-gray-700 border border-gray-300 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-medium">
              Login
            </button>
            <button class="w-full px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 font-medium">
              Request Demo
            </button>
          </div>
        </div>
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
    const activeDropdown = ref('')

    const handleScroll = () => {
      if (window.scrollY > 50) {
        headerClass.value = 'shadow-lg'
      } else {
        headerClass.value = 'border-b border-gray-100'
      }
    }

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
      // Emit global event to App.vue with current state
      const event = new CustomEvent('toggleMobileMenu', { 
        detail: { isOpen: mobileMenuOpen.value } 
      })
      window.dispatchEvent(event)
      
      if (!mobileMenuOpen.value) {
        activeDropdown.value = '' // Close all dropdowns when menu closes
      }
    }

    const closeMobileMenu = () => {
      mobileMenuOpen.value = false
      activeDropdown.value = ''
      // Emit close event to App.vue
      const event = new CustomEvent('closeMobileMenu')
      window.dispatchEvent(event)
    }

    const toggleDropdown = (dropdown) => {
      activeDropdown.value = activeDropdown.value === dropdown ? '' : dropdown
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      
      // Listen for external close events (from overlay click)
      window.addEventListener('closeMobileMenuFromOverlay', () => {
        mobileMenuOpen.value = false
        activeDropdown.value = ''
      })
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('closeMobileMenuFromOverlay', () => {})
      document.body.style.overflow = ''
    })

    return {
      headerClass,
      mobileMenuOpen,
      activeDropdown,
      toggleMobileMenu,
      closeMobileMenu,
      toggleDropdown
    }
  }
}
</script>

<style scoped>
/* Hamburger Animation */
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.hamburger span {
  display: block;
  width: 20px;
  height: 2px;
  background-color: currentColor;
  margin: 2px 0;
  transition: all 0.3s ease-in-out;
  transform-origin: center;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(4px, 4px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
  transform: translateX(-20px);
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(4px, -4px);
}

/* Mobile sidebar scrollbar */
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f5f9;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 2px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>