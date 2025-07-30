<template>
  <div 
    @click="handleClick"
    class="bg-gray-50 p-8 rounded-3xl interactive-card scale-in cursor-pointer group"
  >
    <div 
      class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br"
      :class="service.gradient"
    >
      <svg class="w-8 h-8 text-white svg-icon" fill="currentColor" viewBox="0 0 24 24">
        <path :d="service.icon"/>
      </svg>
    </div>
    <h3 class="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
      {{ service.title }}
    </h3>
    <p class="text-gray-600 leading-relaxed">
      {{ service.description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    service: {
      type: Object,
      required: true
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = () => {
      emit('click', props.service)
    }

    return {
      handleClick
    }
  }
}
</script>