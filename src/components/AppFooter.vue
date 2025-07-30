<template>
  <footer class="bg-gray-800 py-20 relative overflow-hidden">
    <!-- Background Decoration -->
    <div class="absolute inset-0 opacity-5">
      <!-- Grid Pattern -->
      <div class="absolute inset-0" style="background-image: linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px); background-size: 50px 50px;"></div>
      
      <!-- Circuit Lines -->
      <div class="absolute top-20 left-10 w-32 h-0.5 bg-green-500 opacity-30"></div>
      <div class="absolute top-20 left-10 w-0.5 h-32 bg-green-500 opacity-30"></div>
      <div class="absolute top-40 right-20 w-48 h-0.5 bg-blue-500 opacity-30"></div>
      <div class="absolute bottom-40 left-1/4 w-0.5 h-24 bg-blue-500 opacity-30"></div>
      <div class="absolute bottom-20 right-1/3 w-40 h-0.5 bg-green-500 opacity-30"></div>
      
      <!-- Tech Dots -->
      <div class="absolute top-32 right-32 w-2 h-2 bg-green-500 rounded-full opacity-40"></div>
      <div class="absolute top-48 left-1/3 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-40"></div>
      <div class="absolute bottom-32 left-20 w-2 h-2 bg-green-500 rounded-full opacity-40"></div>
      <div class="absolute bottom-48 right-1/4 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-40"></div>
      
      <!-- Large Background Numbers -->
      <div class="absolute top-10 right-10 text-[8rem] font-black text-gray-700 opacity-10 select-none">01</div>
      <div class="absolute bottom-10 left-10 text-[6rem] font-black text-gray-700 opacity-10 select-none">02</div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Contact Header -->
      <div class="grid lg:grid-cols-2 gap-16 items-center mb-20">
        <div class="space-y-6 fade-in">
          <h2 class="text-6xl lg:text-7xl font-black text-white leading-tight">
            Contact with us
          </h2>
          <p class="text-xl text-gray-400 leading-relaxed max-w-lg">
            If you would like to work with us or just want to get in touch, we'd love to hear from you!
          </p>
        </div>
        
        <div class="flex justify-center lg:justify-end fade-in">
          <button 
            @click="handleContactClick"
            class="w-48 h-48 bg-green-500 rounded-full flex flex-col items-center justify-center cursor-pointer hover:bg-green-600 transition-all duration-300 hover-lift relative overflow-hidden"
          >
            <!-- Button Background Pattern -->
            <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 2px, transparent 2px), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 1px, transparent 1px); background-size: 15px 15px;"></div>
            <svg class="w-12 h-12 text-black mb-2 relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span class="text-black font-bold text-lg relative z-10">LET'S TALK</span>
          </button>
        </div>
      </div>

      <!-- Divider with Tech Elements -->
      <div class="relative mb-16">
        <div class="border-t border-gray-700"></div>
        <div class="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full"></div>
        <div class="absolute left-1/4 top-0 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
        <div class="absolute right-1/4 top-0 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
      </div>

      <!-- Footer Content -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
        <!-- Logo -->
        <div class="fade-in">
          <div class="flex items-center space-x-3 mb-8">
            <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center relative overflow-hidden">
              <!-- Logo Background Pattern -->
              <div class="absolute inset-0 opacity-30" style="background-image: linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%); background-size: 6px 6px;"></div>
              <svg class="w-8 h-8 text-black relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span class="text-3xl font-black text-white">TechFlow</span>
          </div>
          
          <!-- Social Media -->
          <div class="flex space-x-4">
            <SocialButton 
              v-for="social in socialLinks" 
              :key="social.name"
              :social="social"
              @click="handleSocialClick"
            />
          </div>
        </div>

        <!-- Address -->
        <div class="fade-in">
          <h3 class="text-2xl font-bold text-white mb-6">Address</h3>
          <div class="space-y-2">
            <p class="text-gray-400">3770 Hidden Meadow Drive</p>
            <p class="text-gray-400">Venturia, ND 58489</p>
          </div>
        </div>

        <!-- Empty Column for Spacing -->
        <div></div>

        <!-- Newsletter -->
        <div class="fade-in">
          <form @submit.prevent="handleNewsletterSubmit" class="space-y-6">
            <div class="flex relative">
              <input 
                type="email" 
                v-model="email"
                placeholder="Enter your email" 
                class="flex-1 bg-gray-700 border border-gray-600 rounded-l-full px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                required
              >
              <button 
                type="submit"
                class="bg-red-500 text-white px-8 py-3 rounded-r-full hover:bg-red-600 transition-all duration-300 font-bold relative overflow-hidden"
              >
                <div class="absolute inset-0 opacity-20" style="background-image: linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%); background-size: 4px 4px;"></div>
                <span class="relative z-10">SUBSCRIBE</span>
              </button>
            </div>
            <p class="text-gray-500 text-sm">Powered by TechFlow</p>
          </form>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-700 mt-16 pt-8 text-center fade-in relative">
        <div class="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-green-500"></div>
        <p class="text-gray-500">&copy; 2025 TechFlow. All rights reserved. Crafted with passion for design.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from 'vue'
import SocialButton from './SocialButton.vue'

export default {
  name: 'AppFooter',
  components: {
    SocialButton
  },
  setup() {
    const email = ref('')
    
    const socialLinks = ref([
      {
        name: 'Twitter',
        icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z',
        url: '#'
      },
      {
        name: 'Instagram',
        icon: 'M12.035 8.097c-2.091 0-3.785 1.693-3.785 3.784s1.694 3.784 3.785 3.784c2.09 0 3.784-1.693 3.784-3.784s-1.694-3.784-3.784-3.784zm0 6.073c-1.264 0-2.29-1.025-2.29-2.289s1.026-2.289 2.29-2.289 2.289 1.025 2.289 2.289-1.025 2.289-2.289 2.289zm4.489-6.228c0 .488-.396.884-.884.884s-.884-.396-.884-.884.396-.884.884-.884.884.396.884.884zm2.512.884c-.056-1.181-.325-2.228-1.188-3.09-.862-.862-1.909-1.132-3.09-1.188C13.551.454 10.449.454 9.242.775c-1.181.056-2.228.325-3.09 1.188-.862.862-1.132 1.909-1.188 3.09C4.644 6.258 4.644 9.36 4.964 10.567c.056 1.181.325 2.228 1.188 3.09.862.862 1.909 1.132 3.09 1.188 1.207.32 4.309.32 5.516 0 1.181-.056 2.228-.325 3.09-1.188.862-.862 1.132-1.909 1.188-3.09.32-1.207.32-4.309 0-5.516zm-1.576 6.79c-.256.641-.753 1.138-1.394 1.394-1.363.54-4.599.415-6.105.415s-4.743.125-6.105-.415c-.641-.256-1.138-.753-1.394-1.394-.54-1.363-.415-4.599-.415-6.105s-.125-4.743.415-6.105c.256-.641.753-1.138 1.394-1.394 1.363-.54 4.599-.415 6.105-.415s4.743-.125 6.105.415c.641.256 1.138.753 1.394 1.394.54 1.363.415 4.599.415 6.105s.125 4.743-.415 6.105z',
        url: '#'
      },
      {
        name: 'GitHub',
        icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
        url: '#'
      },
      {
        name: 'LinkedIn',
        icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
        url: '#'
      }
    ])

    const handleContactClick = () => {
      console.log('Contact button clicked')
      // Handle contact action
    }

    const handleSocialClick = (social) => {
      console.log('Social link clicked:', social.name)
      // Handle social link click
    }

    const handleNewsletterSubmit = () => {
      if (email.value) {
        console.log('Newsletter subscription:', email.value)
        // Handle newsletter subscription
        email.value = ''
        // Show success message
      }
    }

    return {
      email,
      socialLinks,
      handleContactClick,
      handleSocialClick,
      handleNewsletterSubmit
    }
  }
}
</script>