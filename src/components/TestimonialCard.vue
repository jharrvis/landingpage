<template>
  <div class="bg-white p-8 rounded-3xl subtle-shadow interactive-card scale-in">
    <!-- Quote Icon -->
    <div class="mb-6">
      <svg class="w-12 h-12 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
      </svg>
    </div>
    
    <!-- Rating Stars -->
    <div class="flex mb-6">
      <svg 
        v-for="star in 5" 
        :key="star"
        class="w-5 h-5"
        :class="star <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300'"
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    </div>
    
    <!-- Content -->
    <p class="text-gray-600 text-lg leading-relaxed mb-8">
      "{{ testimonial.content }}"
    </p>
    
    <!-- Author -->
    <div class="flex items-center">
      <img 
        :src="testimonial.image" 
        :alt="testimonial.name" 
        class="w-12 h-12 rounded-full object-cover mr-4"
      >
      <div>
        <h4 class="font-bold text-gray-900">{{ testimonial.name }}</h4>
        <p class="text-gray-600 text-sm">{{ testimonial.position }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialCard',
  props: {
    testimonial: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.subtle-shadow {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}
</style>