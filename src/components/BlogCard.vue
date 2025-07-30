<template>
  <div 
    class="border-b border-gray-200 pb-8 pt-8 slide-in-bottom group cursor-pointer transition-all duration-300"
    :style="{ 'transition-delay': `${index * 0.15}s` }"
  >
    <div class="grid lg:grid-cols-12 gap-8 items-center">
      <!-- Content -->
      <div class="lg:col-span-8 space-y-4">
        <p class="text-gray-500 text-sm font-medium">{{ post.date }}</p>
        <h3 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight group-hover:underline transition-all duration-300">
          {{ post.title }}
        </h3>
      </div>
      
      <!-- Image and Arrow -->
      <div class="lg:col-span-4 flex justify-end items-center space-x-4">
        <div v-if="hasImage" class="w-full max-w-sm">
          <div class="aspect-video rounded-lg overflow-hidden">
            <img 
              :src="post.image" 
              :alt="post.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              @error="handleImageError"
            />
          </div>
        </div>
        <div class="flex items-center justify-center">
          <div class="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center group-hover:bg-lime-500 transition-colors duration-300">
            <svg class="w-6 h-6 text-gray-900 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogCard',
  props: {
    post: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      default: 0
    },
    hasImage: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const handleImageError = (event) => {
      // Hide image if it fails to load
      event.target.style.display = 'none'
    }

    return {
      handleImageError
    }
  }
}
</script>

<style scoped>
</style>