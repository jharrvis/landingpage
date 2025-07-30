<template>
  <div 
    class="p-8 lg:p-12 cursor-pointer hover:bg-gray-800 transition-all duration-300 fade-slide-up opacity-0 transform translate-y-8 group relative"
    @click="$emit('click', service)"
  >
    <!-- Service Number and Title in same line -->
    <div class="flex items-start space-x-4 mb-8">
      <span 
        class="text-xl font-medium flex-shrink-0"
        :class="service.color"
      >
        {{ service.number }}/
      </span>
      
      <h3 class="text-xl lg:text-2xl font-bold text-white leading-tight group-hover:text-green-400 transition-colors duration-300">
        {{ service.title }}
      </h3>
    </div>
    
    <!-- Bottom Border Line (full width) -->
    <div class="absolute bottom-0 left-0 right-0">
      <div class="w-full h-0.5 bg-gray-700 group-hover:bg-green-400 transition-colors duration-300"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceItem',
  props: {
    service: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  emits: ['click']
}
</script>

<style scoped>
.fade-slide-up {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease-out;
}

.fade-slide-up.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>