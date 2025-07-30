<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16 fade-in">
        <div class="inline-flex items-center space-x-2 bg-gray-50 px-6 py-2 rounded-full mb-6">
          <svg class="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          <span class="font-medium text-gray-700">100+ Positive Reviews</span>
        </div>
        <h2 class="text-5xl font-bold mb-6">
          What Our <span class="text-blue-600">Clients Say</span>
        </h2>
      </div>
      
      <!-- Carousel Container -->
      <div class="relative max-w-6xl mx-auto">
        <!-- Carousel Wrapper -->
        <div class="overflow-hidden">
          <div 
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }"
          >
            <div 
              v-for="testimonial in testimonials"
              :key="testimonial.id"
              class="flex-shrink-0 px-4"
              :style="{ width: `${100 / slidesToShow}%` }"
            >
              <TestimonialCard :testimonial="testimonial" />
            </div>
          </div>
        </div>
        
        <!-- Navigation Buttons -->
        <button 
          @click="prevSlide"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-lg"
          :disabled="currentSlide === 0"
          :class="{ 'opacity-50 cursor-not-allowed': currentSlide === 0 }"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
        </button>
        
        <button 
          @click="nextSlide"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-lg"
          :disabled="currentSlide >= maxSlide"
          :class="{ 'opacity-50 cursor-not-allowed': currentSlide >= maxSlide }"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
        </button>
        
        <!-- Dots Indicator -->
        <div class="flex justify-center mt-8 space-x-2">
          <button
            v-for="(dot, index) in Math.ceil(testimonials.length / slidesToShow)"
            :key="index"
            @click="goToSlide(index)"
            class="w-3 h-3 rounded-full transition-all duration-300"
            :class="currentSlide === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue'
import TestimonialCard from './TestimonialCard.vue'

export default {
  name: 'TestimonialsSection',
  components: {
    TestimonialCard
  },
  setup() {
    const currentSlide = ref(0)
    const slidesToShow = ref(3)
    
    const testimonials = ref([
      {
        id: 1,
        name: 'John Doe',
        position: 'CEO, TechCorp',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5,
        content: 'Promolax transformed our brand identity completely. Their attention to detail and creative vision exceeded our expectations.'
      },
      {
        id: 2,
        name: 'Sarah Miller',
        position: 'Marketing Director',
        image: 'https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5,
        content: 'Outstanding results! Our website traffic increased by 200% after their digital marketing campaign.'
      },
      {
        id: 3,
        name: 'Michael Johnson',
        position: 'Founder, StartupXYZ',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5,
        content: 'Professional, creative, and reliable. They delivered exactly what we needed and more.'
      },
      {
        id: 4,
        name: 'Emily Chen',
        position: 'CMO, InnovateTech',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5,
        content: 'Their strategic approach to digital marketing helped us reach new audiences and double our conversion rates.'
      },
      {
        id: 5,
        name: 'David Rodriguez',
        position: 'Operations Manager, GrowthCo',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5,
        content: 'The team delivered exceptional results on time and within budget. Our mobile app downloads increased by 300%.'
      },
      {
        id: 6,
        name: 'Lisa Wang',
        position: 'Brand Manager, StyleHub',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5,
        content: 'Amazing work on our brand redesign! The new identity perfectly captures our vision and resonates with our target audience.'
      },
      {
        id: 7,
        name: 'Robert Thompson',
        position: 'Founder, NextGen Solutions',
        image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5,
        content: 'Their expertise in business solutions transformed our operations. Highly recommend their consulting services.'
      },
      {
        id: 8,
        name: 'Maria Garcia',
        position: 'Head of Digital, FutureCorp',
        image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5,
        content: 'Incredible attention to detail and innovative solutions. They helped us achieve our digital transformation goals.'
      }
    ])

    const maxSlide = computed(() => {
      return Math.max(0, testimonials.value.length - slidesToShow.value)
    })

    const nextSlide = () => {
      if (currentSlide.value < maxSlide.value) {
        currentSlide.value++
      }
    }

    const prevSlide = () => {
      if (currentSlide.value > 0) {
        currentSlide.value--
      }
    }

    const goToSlide = (index) => {
      currentSlide.value = index
    }

    return {
      testimonials,
      currentSlide,
      slidesToShow,
      maxSlide,
      nextSlide,
      prevSlide,
      goToSlide
    }
  }
}
</script>