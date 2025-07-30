<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left side - Images -->
        <div class="relative fade-in">
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Team member 1" 
                class="w-full h-64 object-cover rounded-2xl"
              >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Team member 2" 
                class="w-full h-48 object-cover rounded-2xl"
              >
            </div>
            <div class="pt-8">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Team collaboration" 
                class="w-full h-80 object-cover rounded-2xl"
              >
            </div>
          </div>
          <!-- Experience Badge -->
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 w-32 h-32 rounded-full flex flex-col items-center justify-center text-white font-bold shadow-xl">
            <span class="text-3xl font-black">25+</span>
            <span class="text-sm">Year</span>
            <span class="text-sm">Experience</span>
          </div>
        </div>

        <!-- Right side - Content -->
        <div class="space-y-8 slide-in-right">
          <div class="space-y-6">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-0.5 bg-gray-400"></div>
              <span class="text-gray-600 font-medium">Our Service</span>
            </div>
            <h2 class="text-5xl font-bold leading-tight">
              The best digital marketing solutions
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't slightly.
            </p>
          </div>

          <!-- Service Features -->
          <div class="space-y-8">
            <ServiceFeature
              v-for="(feature, index) in features"
              :key="feature.id"
              :feature="feature"
              :number="String(index + 1).padStart(2, '0')"
            />
          </div>

          <!-- CTA Section -->
          <div class="flex items-center justify-between pt-6">
            <button class="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all duration-300 font-bold text-lg hover-lift flex items-center">
              View Projects
              <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </button>
            
            <div class="flex items-center space-x-4">
              <div class="flex -space-x-2">
                <img 
                  v-for="(client, index) in clients"
                  :key="index"
                  :src="client.image" 
                  :alt="client.alt" 
                  class="w-10 h-10 rounded-full border-2 border-white object-cover"
                >
              </div>
              <div class="text-left">
                <p class="text-sm font-bold text-gray-900">100+ Positive</p>
                <p class="text-sm text-gray-600">Reviews Form Theme</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import ServiceFeature from './ServiceFeature.vue'

export default {
  name: 'AboutSection',
  components: {
    ServiceFeature
  },
  setup() {
    const features = ref([
      {
        id: 1,
        title: 'Leading in marketing',
        description: 'Knowledge of technologies rules better than anyone which we apply in our daily work'
      },
      {
        id: 2,
        title: 'Expert developers',
        description: 'Knowledge of technologies rules better than anyone which we apply in our daily work'
      }
    ])

    const clients = ref([
      {
        image: 'https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        alt: 'Client 1'
      },
      {
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        alt: 'Client 2'
      },
      {
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        alt: 'Client 3'
      }
    ])

    return {
      features,
      clients
    }
  }
}
</script>