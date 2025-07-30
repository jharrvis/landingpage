<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="grid lg:grid-cols-12 gap-12 items-start">
        <!-- Left Column - Header -->
        <div class="lg:col-span-4">
          <div class="space-y-6 slide-in-bottom">
            <p class="text-gray-500 text-sm font-medium tracking-wider uppercase">Blog</p>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              Latest News<br>
              & Updates
            </h2>
          </div>
        </div>
        
        <!-- Right Column - Blog Posts -->
        <div class="lg:col-span-8">
          <div class="space-y-0">
            <BlogCard 
              v-for="(post, index) in blogPosts" 
              :key="post.id"
              :post="post"
              :index="index"
              :hasImage="index === 0"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BlogCard from './BlogCard.vue'

export default {
  name: 'BlogSection',
  components: {
    BlogCard
  },
  setup() {
    const blogPosts = [
      {
        id: 1,
        date: 'Nov 26, 2024',
        title: 'DESIGN FOR A WORLD THAT\'S ALWAYS EVOLVING',
        image: '/src/assets/images/blog-1.jpg',
        excerpt: 'Creating designs that adapt and evolve with changing times and technology trends.'
      },
      {
        id: 2,
        date: 'Nov 27, 2024',
        title: 'WE CAN HELP YOU FIND YOUR BUSINESS COMPASS',
        excerpt: 'Navigate your business towards success with strategic design and branding solutions.'
      },
      {
        id: 3,
        date: 'Nov 28, 2024',
        title: 'CONSULTING THAT GOES BEYOND BUSINESS AS USUAL',
        excerpt: 'Innovative consulting approaches that deliver exceptional business transformation.'
      }
    ]

    return {
      blogPosts
    }
  }
}
</script>

<style scoped>
</style>