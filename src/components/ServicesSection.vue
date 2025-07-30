<template>
  <section class="py-20 bg-gray-900">
    <div class="container mx-auto px-6">
      <!-- Header -->
      <div class="flex justify-between items-start mb-16">
        <div class="max-w-2xl fade-slide-up opacity-0 transform translate-y-8" ref="headerSection">
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-12 h-0.5 bg-gray-600"></div>
            <span class="text-gray-400 font-medium">Our Service</span>
          </div>
          <h2 class="text-5xl lg:text-6xl font-bold text-white leading-tight">
            What We Can Do for<br>
            Our Clients
          </h2>
        </div>
        
        <button 
          class="hidden lg:flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 fade-slide-up opacity-0 transform translate-y-8"
          ref="seeAllButton"
          @click="handleSeeAllServices"
        >
          <div class="w-12 h-12 border border-gray-600 rounded-lg flex items-center justify-center hover:border-green-500 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </div>
          <span class="text-lg font-medium">See all Services</span>
        </button>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
        <ServiceItem
          v-for="(service, index) in services"
          :key="service.id"
          :service="service"
          :index="index"
          :ref="el => { if (el) serviceRefs[index] = el }"
          @click="handleServiceClick"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import ServiceItem from './ServiceItem.vue'

export default {
  name: 'ServicesSection',
  components: {
    ServiceItem
  },
  setup() {
    const headerSection = ref(null)
    const seeAllButton = ref(null)
    const serviceRefs = ref([])

    const services = ref([
      {
        id: 1,
        number: '01',
        title: 'MARKET RESEARCH WITH INVESTMENT',
        color: 'text-green-400'
      },
      {
        id: 2,
        number: '02',
        title: 'DIGITAL MARKETING STRATEGY',
        color: 'text-green-400'
      },
      {
        id: 3,
        number: '03',
        title: 'WEB DESIGN & DEVELOPMENT',
        color: 'text-green-400'
      },
      {
        id: 4,
        number: '04',
        title: 'SEARCH ENGINE OPTIMIZATION',
        color: 'text-green-400'
      },
      {
        id: 5,
        number: '05',
        title: 'WEBSITE DATA & ANALYTICS SERVICE',
        color: 'text-green-400'
      },
      {
        id: 6,
        number: '06',
        title: 'CONTENT WRITING & UPLOAD',
        color: 'text-green-400'
      }
    ])

    const handleScroll = () => {
      // Header animation
      if (headerSection.value) {
        const rect = headerSection.value.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
          headerSection.value.classList.add('visible')
        }
      }

      // See all button animation
      if (seeAllButton.value) {
        const rect = seeAllButton.value.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
          seeAllButton.value.classList.add('visible')
        }
      }

      // Service items animation with stagger
      serviceRefs.value.forEach((serviceRef, index) => {
        if (serviceRef && serviceRef.$el) {
          const rect = serviceRef.$el.getBoundingClientRect()
          const windowHeight = window.innerHeight
          
          if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
            setTimeout(() => {
              serviceRef.$el.classList.add('visible')
            }, index * 100) // Stagger animation by 100ms
          }
        }
      })
    }

    const handleServiceClick = (service) => {
      console.log('Service clicked:', service.title)
    }

    const handleSeeAllServices = () => {
      console.log('See all services clicked')
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      handleScroll() // Check on mount
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      services,
      headerSection,
      seeAllButton,
      serviceRefs,
      handleServiceClick,
      handleSeeAllServices
    }
  }
}
</script>

<style scoped>
.fade-slide-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.fade-slide-up.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>