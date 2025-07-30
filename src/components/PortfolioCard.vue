<template>
  <div 
    class="bg-white rounded-3xl overflow-hidden subtle-shadow interactive-card scale-in group cursor-pointer"
    @click="handleClick"
  >
    <div class="h-64 overflow-hidden relative">
      <img 
        :src="project.image" 
        :alt="project.title" 
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      >
      <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
        {{ project.category }}
      </div>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
        {{ project.title }}
      </h3>
      <p class="text-gray-600">{{ project.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const handleClick = () => {
      console.log('Portfolio project clicked:', props.project.title)
      // Navigate to project details or open modal
      if (props.project.link && props.project.link !== '#') {
        window.open(props.project.link, '_blank')
      }
    }

    return {
      handleClick
    }
  }
}
</script>

<style scoped>
.subtle-shadow {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}
</style>