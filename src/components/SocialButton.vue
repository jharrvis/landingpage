<template>
  <a 
    :href="social.url"
    @click="handleClick"
    class="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-green-500 hover:text-black transition-all duration-300 text-white svg-icon relative overflow-hidden"
  >
    <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle at center, rgba(16, 185, 129, 0.2) 1px, transparent 1px); background-size: 8px 8px;"></div>
    <svg class="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
      <path :d="social.icon"/>
    </svg>
  </a>
</template>

<script>
export default {
  name: 'SocialButton',
  props: {
    social: {
      type: Object,
      required: true
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = (event) => {
      event.preventDefault()
      emit('click', props.social)
    }

    return {
      handleClick
    }
  }
}
</script>