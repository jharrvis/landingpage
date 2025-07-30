<template>
  <div class="flex space-x-6">
    <div class="flex-shrink-0">
      <span class="text-3xl font-bold text-gray-300">{{ number }}</span>
    </div>
    <div class="space-y-2">
      <h3 class="text-2xl font-bold text-gray-900">{{ feature.title }}</h3>
      <p class="text-gray-600">{{ feature.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceFeature',
  props: {
    feature: {
      type: Object,
      required: true
    },
    number: {
      type: String,
      required: true
    }
  }
}
</script>