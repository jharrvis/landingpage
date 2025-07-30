<template>
  <div 
    class="text-center process-step transition-all duration-600 ease-out"
    :class="{
      'opacity-0 transform translate-x-[-50px]': !isVisible,
      'opacity-100 transform translate-x-0 visible': isVisible
    }"
  >
    <!-- Green Dot -->
    <div class="flex justify-center mb-8">
      <div 
        class="w-4 h-4 bg-green-500 rounded-full process-dot transition-all duration-300"
        :class="{
          'transform scale-150 shadow-[0_0_20px_rgba(16,_185,_129,_0.6)]': isActive
        }"
      ></div>
    </div>
    
    <div class="space-y-4">
      <h3 class="text-lg font-medium text-gray-400">{{ step.stage }}</h3>
      <h4 class="text-2xl font-bold text-white">{{ step.title }}</h4>
      <p class="text-gray-400 leading-relaxed">{{ step.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProcessStep',
  props: {
    step: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    isVisible: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>