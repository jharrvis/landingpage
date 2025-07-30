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
      <div class="grid md:grid-cols-3 gap-8">
        <TestimonialCard
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          :testimonial="testimonial"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import TestimonialCard from './TestimonialCard.vue'

export default {
  name: 'TestimonialsSection',
  components: {
    TestimonialCard
  },
  setup() {
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
      }
    ])

    return {
      testimonials
    }
  }
}
</script>