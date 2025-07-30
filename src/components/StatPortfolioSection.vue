<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <!-- Stats Counter -->
      <div class="text-center mb-20">
        <!-- Large Background Text -->
        <div class="relative mb-16">
          <h2 class="text-[12rem] lg:text-[16rem] font-black text-gray-100 leading-none select-none">OUR WORKS</h2>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
              <StatCounter
                v-for="(stat, index) in stats"
                :key="index"
                :stat="stat"
                :is-visible="statsVisible"
                :delay="index * 200"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Portfolio Grid -->
      <div class="text-center mb-16 fade-in">
        <div class="flex items-center justify-center space-x-3 mb-6">
          <div class="w-12 h-0.5 bg-gray-400"></div>
          <span class="text-gray-600 font-medium">Our Portfolio</span>
          <div class="w-12 h-0.5 bg-gray-400"></div>
        </div>
        <h2 class="text-5xl font-bold mb-6">
          Recent <span class="text-blue-600">Projects</span>
        </h2>
        <p class="text-xl text-gray-600">Showcasing our latest work and creative solutions</p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PortfolioCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import StatCounter from './StatCounter.vue'
import PortfolioCard from './PortfolioCard.vue'

export default {
  name: 'StatsPortfolioSection',
  components: {
    StatCounter,
    PortfolioCard
  },
  setup() {
    const statsVisible = ref(false)
    
    const stats = ref([
      {
        value: 20,
        suffix: '+',
        label: 'Projects Done',
        color: 'text-green-500'
      },
      {
        value: 46,
        suffix: 'K',
        label: 'Team Member',
        color: 'text-green-500'
      },
      {
        value: 35,
        suffix: 'K',
        label: 'Clients Review',
        color: 'text-green-500'
      },
      {
        value: 76,
        suffix: 'K',
        label: 'Winning Awards',
        color: 'text-green-500'
      }
    ])

    const projects = ref([
      {
        id: 1,
        title: 'Tech Startup Identity',
        description: 'Complete brand identity for innovative fintech startup',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'Branding',
        link: '#'
      },
      {
        id: 2,
        title: 'E-commerce Platform',
        description: 'Modern e-commerce solution with seamless user experience',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'Web Design',
        link: '#'
      },
      {
        id: 3,
        title: 'Digital Campaign',
        description: 'Integrated marketing campaign driving 300% growth',
        image: 'https://images.unsplash.com/photo-1553895501-af9e282e7fc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'Marketing',
        link: '#'
      }
    ])

    onMounted(() => {
      // Setup intersection observer to trigger stats animation
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              statsVisible.value = true
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.3 }
      )

      // Find the stats section and observe it
      const statsSection = document.querySelector('.text-\\[12rem\\]')
      if (statsSection) {
        observer.observe(statsSection)
      }
    })

    return {
      stats,
      projects,
      statsVisible
    }
  }
}
</script>