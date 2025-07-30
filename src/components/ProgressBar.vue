<template>
  <div class="progress-item fade-in">
    <div class="flex justify-between items-center mb-2">
      <span class="text-lg font-semibold text-gray-900">{{ skill.name }}</span>
      <span class="text-lg font-bold text-gray-900">{{ skill.percentage }}%</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2">
      <div 
        class="h-2 rounded-full progress-bar transition-all duration-1500 ease-out"
        :class="skill.color"
        :style="{ width: isVisible ? skill.percentage + '%' : '0%' }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    skill: {
      type: Object,
      required: true
    },
    isVisible: {
      type: Boolean,
      default: false
    }
  }
}
</script>