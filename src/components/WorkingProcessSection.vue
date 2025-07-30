<template>
  <section class="py-20 bg-gray-800">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16 fade-in">
        <div class="flex items-center justify-center space-x-3 mb-6">
          <div class="w-12 h-0.5 bg-gray-500"></div>
          <span class="text-gray-400 font-medium">Our Workflow</span>
          <div class="w-12 h-0.5 bg-gray-500"></div>
        </div>
        <h2 class="text-5xl font-bold text-white">Working Process</h2>
      </div>

      <!-- Process Timeline -->
      <div class="relative">
        <!-- Background Numbers -->
        <div class="absolute inset-0 flex justify-between items-center opacity-5 pointer-events-none px-8 lg:px-16">
          <span 
            v-for="(step, index) in steps" 
            :key="index"
            class="text-[10rem] lg:text-[15rem] font-black text-white"
          >
            {{ String(index + 1).padStart(2, '0') }}
          </span>
        </div>

        <!-- Timeline Line -->
        <div class="absolute top-8 left-8 right-8 lg:left-16 lg:right-16 h-0.5 bg-gray-600"></div>
        
        <!-- Process Steps Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProcessStep
            v-for="(step, index) in steps"
            :key="step.id"
            :step="step"
            :index="index"
            :is-visible="visibleSteps[index]"
            :is-active="activeSteps[index]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, reactive } from 'vue'
import ProcessStep from './ProcessStep.vue'

export default {
  name: 'WorkingProcessSection',
  components: {
    ProcessStep
  },
  setup() {
    const steps = ref([
      {
        id: 1,
        stage: 'Stage 01',
        title: 'Audience',
        description: 'Having these the marketplace to your business'
      },
      {
        id: 2,
        stage: 'Stage 02',
        title: 'Plan & Sketch',
        description: 'Delicate and long-lasting with vitamins and nutritions'
      },
      {
        id: 3,
        stage: 'Stage 03',
        title: 'Customize',
        description: 'Creating brand identities for the digital experiences'
      },
      {
        id: 4,
        stage: 'Stage 04',
        title: 'User Testing',
        description: 'We look forward to engage with beyond the conventional'
      }
    ])

    const visibleSteps = reactive([false, false, false, false])
    const activeSteps = reactive([false, false, false, false])

    const animateProcessSteps = () => {
      steps.value.forEach((step, index) => {
        setTimeout(() => {
          visibleSteps[index] = true
          activeSteps[index] = true
        }, index * 300) // Delay 300ms between each step
      })
    }

    onMounted(() => {
      // Setup intersection observer to trigger animation when section is visible
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateProcessSteps()
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.3 }
      )

      // Find the section element and observe it
      const section = document.querySelector('.bg-gray-800')
      if (section) {
        observer.observe(section)
      }
    })

    return {
      steps,
      visibleSteps,
      activeSteps
    }
  }
}
</script>